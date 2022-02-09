import React, { useEffect, useState } from 'react'
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
import { Input } from 'react-native-elements'
import { myProfile } from '../styles/myProfile'

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

import Camera from '../assets/profile/camera.svg'

import * as ImagePicker from 'expo-image-picker'
import { cameraPermission } from '../permissions/camera'
import { updateProfile, updateUserPhoto } from '../api'
import { strings } from '../localization'
import { Colors } from '../constants/colors'
import { registration } from '../styles/registration'
import { Controller, useForm } from 'react-hook-form'
import MaskInput from 'react-native-mask-input/src/MaskInput'

export default function MyProfile({ route, navigation }) {
    const data = route.params
    // console.log('data', data)

    const [image, setImage] = useState(null)
    const [state, setState] = useState({ ...data })
    const [phonePlaceholder, setPlaceholder] = useState(strings.auth.phone)

    const {
        control,
        handleSubmit,
        setError,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
            address: '',
        },
    })

    useEffect(() => {
        if (data) {
            console.log('++++++++++', data)
            // setValue([
            //     { first_name: data?.user_profile?.first_name },
            //     { last_name: data?.user_profile?.last_name },
            //     { phone: data?.user_profile?.phone },
            //     { address: data?.location?.address },
            // ])
        }
        cameraPermission()
    }, [])

    const callCamera = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        })

        if (!result.cancelled) {
            setImage(result.uri)
        }
    }

    const update = async (data) => {
        console.log('update', data)

        // const user = {
        //     email: state.email,
        //     user_profile: {
        //         first_name: data.first_name,
        //         last_name: data.last_name,
        //         phone: data.phone
        //     },
        //     location: {
        //         address: data?.address
        //     }
        // }

        // try {
        //     if (image) {
        //         const formData = new FormData()
        //         formData.append('photo', {
        //             uri: image,
        //             type: 'image/jpg',
        //             name: 'image.jpg',
        //         })
        //         await updateUserPhoto(formData)
        //     }
        //     // console.log('USER', user)
        //     await updateProfile(data.id, user)
        // } catch (e) {
        //     console.log('e', e)
        // } finally {
        //     navigation.push('Profile')
        // }
    }

    // const GoogleInput = React.forwardRef((props, ref) => (
    //     <GooglePlacesAutocomplete
    //         ref={ref}
    //         onPress={(data, details = null) => {
    //             setState({
    //                 ...state,
    //                 location: {
    //                     ...state.location,
    //                     address: data.description,
    //                 },
    //             })
    //         }}
    //         styles={{
    //             listView: {
    //                 zIndex: 999,
    //                 position: 'absolute',
    //                 top: -280,
    //             },
    //         }}
    //         textInputProps={{
    //             value: state?.location?.address,
    //             onChangeText: (e) =>
    //                 setState({
    //                     ...state,
    //                     location: {
    //                         ...state.location,
    //                         address: e,
    //                     },
    //                 }),

    //             InputComp: (props) => (
    //                 <View>
    //                     <Input
    //                         {...props}
    //                         // ref={ref}
    //                         keyboardType="default"
    //                         label={strings.profile.address}
    //                         labelStyle={myProfile.label}
    //                         rightIcon={
    //                             <Icon name="pen" size={14} color="#cccccc" />
    //                         }
    //                         // defaultValue={
    //                         //     state?.location === null ? '' : state?.location.address
    //                         // }
    //                         inputStyle={{ fontSize: 14 }}
    //                         inputContainerStyle={{
    //                             ...myProfile.input,
    //                         }}

    //                     />
    //                     {errors.phone && (
    //                         <Text
    //                             style={{
    //                                 ...registration.errorText,
    //                                 marginLeft: 10,
    //                                 bottom: 0,
    //                             }}
    //                         >
    //                             {errors.phone?.message
    //                                 ? errors.phone.message
    //                                 : strings.validation.required_field}
    //                         </Text>
    //                     )}
    //                 </View>
    //             ),
    //             errorStyle: { color: 'red' },
    //         }}
    //         placeholder={strings.search.title}
    //         query={{
    //             key: 'AIzaSyA8qTJSkhgaHWljBupetyS4jrk4YW7QtlY',
    //             language: strings.getLanguage() || 'ru',
    //         }}
    //         {...props}
    //     />
    // ))

    return (
        <SafeAreaView>
 <ScrollView
            keyboardShouldPersistTaps="always"
            // listViewDisplayed={false}
        >
            <View style={myProfile.container}>
                <Button title={'SAVE'} onPress={handleSubmit(update)} />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={{ marginBottom: 32 }}
                        onPress={callCamera}
                    >
                        <Image
                            style={myProfile.profileAvatar}
                            source={
                                image
                                    ? { uri: image }
                                    : state?.user_profile?.photo
                                    ? { uri: state?.user_profile?.photo }
                                    : require('../assets/auth/defaultPhoto.png')
                            }
                        />
                        <Camera style={myProfile.avatar_camera} />
                    </TouchableOpacity>

                    <Controller
                        control={control}
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Input
                                    keyboardType="default"
                                    label={strings.auth.name}
                                    labelStyle={myProfile.label}
                                    rightIcon={
                                        <Icon
                                            name="pen"
                                            size={14}
                                            color="#cccccc"
                                        />
                                    }
                                    onChangeText={onChange}
                                    value={value}
                                    // defaultValue={data.user_profile.first_name}
                                    inputStyle={{ fontSize: 14 }}
                                    inputContainerStyle={myProfile.input}
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
                        rules={{ required: true }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <View>
                                <Input
                                    keyboardType="default"
                                    label={strings.auth.surname}
                                    labelStyle={myProfile.label}
                                    rightIcon={
                                        <Icon
                                            name="pen"
                                            size={14}
                                            color="#cccccc"
                                        />
                                    }
                                    onChangeText={onChange}
                                    value={value}
                                    inputStyle={{ fontSize: 14 }}
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
                        rules={{ required: true, minLength: 8 }}
                        render={({ field: { onChange, value } }) => (
                            <View style={{ marginBottom: 20 }}>
                                <Text style={myProfile.label}>Phone</Text>
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
                                    style={{ ...myProfile.input }}
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
                        rules={{ required: true }}
                        render={(
                            { field: { onChange, onBlur, value } },
                            props
                        ) => (
                            <GooglePlacesAutocomplete
                                // ref={ref}
                                style={myProfile.input}
                                onPress={(data, details = null) => {
                                    setState({
                                        ...state,
                                        location: {
                                            ...state.location,
                                            address: data.description,
                                        },
                                    })
                                }}
                                onChangeText={onChange}
                                value={value}
                                styles={{
                                    listView: {
                                        zIndex: 999,
                                        position: 'absolute',
                                        top: -280,
                                    },
                                }}
                                textInputProps={{
                                    value: state?.location?.address,
                                    style: myProfile.input,
    
                                    // InputComp: (props) => (
                                    //     <View>
                                    //         <Input
                                    //             {...props}
                                    //             // ref={ref}
                                    //             keyboardType="default"
                                    //             label={strings.profile.address}
                                    //             labelStyle={myProfile.label}
                                    //             rightIcon={
                                    //                 <Icon
                                    //                     name="pen"
                                    //                     size={14}
                                    //                     color="#cccccc"
                                    //                 />
                                    //             }
                                    //             // defaultValue={
                                    //             //     state?.location === null ? '' : state?.location.address
                                    //             // }
                                    //             inputStyle={{ fontSize: 14 }}
                                    //             inputContainerStyle={{
                                    //                 ...myProfile.input,
                                    //             }}
                                    //         />
                                    //         {errors.address && (
                                    //             <Text
                                    //                 style={{
                                    //                     ...registration.errorText,
                                    //                     marginLeft: 10,
                                    //                     bottom: 0,
                                    //                 }}
                                    //             >
                                    //                 {errors.address?.message
                                    //                     ? errors.address.message
                                    //                     : strings.validation
                                    //                           .required_field}
                                    //             </Text>
                                    //         )}
                                    //     </View>
                                    // ),
                                    errorStyle: { color: 'red' },
                                }}
                                placeholder={strings.search.title}
                                query={{
                                    key: 'AIzaSyA8qTJSkhgaHWljBupetyS4jrk4YW7QtlY',
                                    language: strings.getLanguage() || 'ru',
                                }}
                                {...props}
                            />
                        )}
                        name="address"
                    />
                </View>
            </View>
        </ScrollView>
        </SafeAreaView>
       
    )
}
