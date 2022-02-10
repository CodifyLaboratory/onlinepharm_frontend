import React, {useEffect, useState} from 'react'
import {
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Button,
    Alert,
    TextInput,
    Text,
    Dimensions,
    SafeAreaView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Input} from 'react-native-elements'
import {myProfile} from '../styles/myProfile'

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'

import Camera from '../assets/profile/camera.svg'

import * as ImagePicker from 'expo-image-picker'
import {cameraPermission} from '../permissions/camera'
import {updateProfile, updateUserPhoto} from '../api'
import {strings} from '../localization'
import {Colors} from '../constants/colors'
import {registration} from '../styles/registration'
import {Controller, useForm} from 'react-hook-form'
import MaskInput from 'react-native-mask-input/src/MaskInput'

export default function MyProfile({route, navigation}) {
    const data = route.params

    const [image, setImage] = useState(null)
    const [phonePlaceholder, setPlaceholder] = useState(strings.auth.phone)
    const [touched, setTouched] = useState(false)

    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        defaultValues: {
            first_name: data?.user_profile.first_name,
            last_name: data?.user_profile.last_name,
            phone: data?.user_profile.phone,
            address: data?.location.address
        },
    })

    useEffect(() => {
        navigation.setParams({updateProfile: handleSubmit(update)})
        cameraPermission()
    }, [image])

    const callCamera = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })
        console.log('result', result)
        if (!result?.cancelled) {
            setImage(result?.uri)
        }
    }

    const update = async (obj) => {
        const user = {
            email: data.email,
            user_profile: {
                first_name: obj.first_name,
                last_name: obj.last_name,
                phone: obj.phone
            },
            location: {
                address: obj?.address
            }
        }

        try {
            if (image) {
                const formData = new FormData()
                formData.append('photo', {
                    uri: image,
                    type: 'image/jpg',
                    name: `${new Date().getSeconds()}.jpg`,
                })
                await updateUserPhoto(formData)
            }
            await updateProfile(data.id, user)
        } catch (e) {
            console.log('e', e)
        } finally {
            navigation.push('Profile')
        }
    }


    return (

        <SafeAreaView>
            <ScrollView
                keyboardShouldPersistTaps="always"
                listViewDisplayed={false}
            >
                <View style={myProfile.container}>
                    <View style={{alignItems: 'center'}}>
                        <TouchableOpacity
                            style={{marginBottom: 32}}
                            onPress={callCamera}
                        >
                            <Image
                                style={myProfile.profileAvatar}
                                source={
                                    image
                                        ? {uri: image}
                                        : data?.user_profile?.photo
                                        ? {uri: data?.user_profile?.photo}
                                        : require('../assets/auth/defaultPhoto.png')
                                }
                            />
                            <Camera style={myProfile.avatar_camera}/>
                        </TouchableOpacity>

                        <Controller
                            control={control}
                            rules={{required: true}}
                            render={({field: {onChange, onBlur, value}}) => (
                                <View>
                                    <Text style={{...myProfile.label, marginLeft: 10}}>{strings.auth.name}</Text>
                                    <Icon
                                        style={{...myProfile.phone_pen, right: 35}}
                                        name="pen"
                                        size={14}
                                        color="#cccccc"
                                    />
                                    <Input
                                        keyboardType="default"
                                        onChangeText={onChange}
                                        value={value}
                                        // defaultValue={data.user_profile.first_name}
                                        inputStyle={{fontSize: 14}}
                                        inputContainerStyle={{...myProfile.input}}
                                        placeholder={strings.auth.name}
                                        placeholderTextColor={Colors.gray_medium}
                                    />
                                    {errors.first_name && (
                                        <Text
                                            style={{
                                                ...registration.errorText,
                                                marginLeft: 10,
                                                bottom: 0,
                                            }}
                                        >
                                            {errors.first_name?.message
                                                ? errors.first_name.message
                                                : strings.validation.required_field}
                                        </Text>
                                    )}
                                </View>
                            )}
                            name="first_name"
                        />

                        <Controller
                            control={control}
                            rules={{required: true}}
                            render={({field: {onChange, onBlur, value}}) => (
                                <View>
                                    <Text style={{...myProfile.label, marginLeft: 10}}>{strings.auth.surname}</Text>
                                    <Icon
                                        style={{...myProfile.phone_pen, right: 35}}
                                        name="pen"
                                        size={14}
                                        color="#cccccc"
                                    />
                                    <Input
                                        keyboardType="default"
                                        onChangeText={onChange}
                                        value={value}
                                        inputStyle={{fontSize: 14}}
                                        inputContainerStyle={myProfile.input}
                                        placeholderTextColor={Colors.gray_medium}
                                        placeholder={strings.auth.surname}
                                    />
                                    {errors.last_name && (
                                        <Text
                                            style={{
                                                ...registration.errorText,
                                                marginLeft: 10,
                                                bottom: 0,
                                            }}
                                        >
                                            {errors.last_name?.message
                                                ? errors.last_name.message
                                                : strings.validation.required_field}
                                        </Text>
                                    )}
                                </View>
                            )}
                            name="last_name"
                        />
                        <Controller
                            control={control}
                            rules={{required: true, minLength: 8}}
                            render={({field: {onChange, value}}) => (
                                <View style={{marginBottom: 20}}>
                                    <Text style={myProfile.label}>{strings.auth.phone}</Text>
                                    <Icon
                                        style={myProfile.phone_pen}
                                        name="pen"
                                        size={14}
                                        color="#cccccc"
                                    />
                                    <MaskInput
                                        value={value}
                                        onBlur={() =>
                                            setPlaceholder(strings.auth.phone)
                                        }
                                        onFocus={() =>
                                            setPlaceholder('(996) xxx-xxx-xxx')
                                        }
                                        onChangeText={onChange}
                                        label={strings.auth.phone}
                                        placeholder={phonePlaceholder}
                                        placeholderTextColor={Colors.gray_medium}
                                        labelStyle={myProfile.label}
                                        keyboardType="number-pad"
                                        style={{...myProfile.input}}
                                        mask={[
                                            '(',
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            ')',
                                            ' ',
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                            /\d/,
                                        ]}
                                    />
                                    {errors.phone && (
                                        <Text
                                            style={{
                                                ...registration.errorText,
                                                marginLeft: 0,
                                                bottom: -24,
                                            }}
                                        >
                                            {errors.phone?.message
                                                ? errors.phone.message
                                                : strings.validation.required_field}
                                        </Text>
                                    )}
                                </View>
                            )}
                            name="phone"
                        />

                        <Controller
                            control={control}
                            rules={{required: true}}
                            render={({field: {onChange, onBlur, value}}) => (
                                <View style={{position: 'relative', height: 70}}>
                                    <Text style={myProfile.label}>{strings.profile.address}</Text>
                                    <Icon
                                        style={myProfile.phone_pen}
                                        name="pen"
                                        size={14}
                                        color="#cccccc"
                                    />
                                    <GooglePlacesAutocomplete
                                        onPress={(data, details = null) => onChange(data.description)}
                                        // onChangeText={onChange}
                                        value={value}
                                        styles={{
                                            listView: {
                                                zIndex: 999,
                                                position: 'absolute',
                                                top: -180,
                                                elevation: 4,
                                                height: 100
                                            },
                                        }}
                                        textInputProps={{
                                            value: !touched ? value : null,
                                            style: {...myProfile.input, height: 50},
                                            errorStyle: {color: 'red'},
                                            onFocus: () => setTouched(true),
                                            onBlur: () => setTouched(false)
                                        }}
                                        placeholder={strings.search.title}
                                        query={{
                                            key: 'AIzaSyA8qTJSkhgaHWljBupetyS4jrk4YW7QtlY',
                                            language: strings.getLanguage() || 'ru',
                                        }}

                                    />
                                    {errors.address && (
                                        <Text
                                            style={{
                                                ...registration.errorText,
                                                marginLeft: 0,
                                                bottom: -24,
                                            }}
                                        >
                                            {errors.address?.message
                                                ? errors.address.message
                                                : strings.validation.required_field}
                                        </Text>
                                    )}
                                </View>

                            )}
                            name="address"
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>


    )
}
