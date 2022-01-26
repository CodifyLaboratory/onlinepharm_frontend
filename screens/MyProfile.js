import React, {useEffect, useState} from 'react'
import {View, Image, ScrollView, TouchableOpacity, Button, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Input} from 'react-native-elements'
import {myProfile} from '../styles/myProfile'

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import Camera from '../assets/profile/camera.svg'

import * as ImagePicker from 'expo-image-picker';
import {cameraPermission} from "../permissions/camera";
import {updateProfile, updateUserPhoto} from "../api";
import {strings} from "../localization";

export default function MyProfile({route, navigation}) {
    const data = route.params

    const [image, setImage] = useState(null);
    const [state, setState] = useState(data)

    useEffect(() => {
        cameraPermission()
    }, []);

    console.log('STATE', state)


    const callCamera = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
            setState({
                ...state, user_profile: {
                    ...state.user_profile,
                    photo: result.uri
                }
            })
        }
    }

    const update = async () => {



        const user = {
            email: state.email,
            user_profile: {
                first_name: state.user_profile.first_name,
                last_name: state.user_profile.last_name,
                phone: state.user_profile.phone
            },
            location: {
                address: state.location.address
            }
        }

        try {
            if (image) {
                const formData = new FormData()
                formData.append('photo', {
                    uri: image,
                    type: 'image/jpg',
                    name: 'image.jpg',
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
        <ScrollView keyboardShouldPersistTaps='always' listViewDisplayed={false}>
            <View style={myProfile.container}>
                <Button title={'SAVE'} onPress={update}/>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{marginBottom: 32}} onPress={callCamera}>
                        <Image
                            style={myProfile.profileAvatar}
                            source={image
                                ? {uri: image}
                                : (state?.user_profile?.photo
                                    ? {uri: state?.user_profile?.photo}
                                    : require('../assets/auth/defaultPhoto.png'))}
                        />
                        <Camera style={myProfile.avatar_camera}/>
                    </TouchableOpacity>

                    <Input
                        keyboardType="default"
                        label={strings.auth.name}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        onChangeText={(e) => setState({
                            ...state, user_profile: {
                                ...state.user_profile,
                                first_name: e
                            }
                        })}
                        value={state?.user_profile?.first_name}
                        defaultValue={state?.user_profile?.first_name}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                        placeholder={strings.auth.name}
                    />
                    <Input
                        keyboardType="default"
                        label={strings.auth.surname}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        onChangeText={(e) => setState({
                            ...state, user_profile: {
                                ...state.user_profile,
                                last_name: e
                            }
                        })}
                        value={state?.user_profile?.last_name}
                        defaultValue={state?.user_profile?.last_name}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                        placeholder={strings.auth.surname}
                    />
                    <Input
                        keyboardType="email-address"
                        label={strings.auth.email}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        value={state?.email}
                        onChangeText={(e) => setState({...state, email: e})}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                        placeholder={strings.auth.email}
                    />
                    <Input
                        keyboardType="numeric"
                        label={strings.auth.phone}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        onChangeText={(e) => setState({
                            ...state, user_profile: {
                                ...state.user_profile,
                                phone: e
                            }
                        })}
                        defaultValue={state?.user_profile?.phone}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                        placeholder={strings.auth.phone}
                    />
                    <GooglePlacesAutocomplete
                        onPress={(data, details = null) => {
                            setState({
                                ...state, location: {
                                    ...state.location,
                                    address: data.description
                                }
                            })
                        }}
                        styles={{
                            listView: {
                                // color: 'black',
                                zIndex: 999,
                                position: 'absolute',
                                top: -280,
                            }
                        }}
                        textInputProps={{
                            value: state?.location?.address,
                            onChangeText: (e) => setState({
                            ...state, location: {
                            ...state.location,
                            address: e}
                        }),

                            InputComp: (props) => <Input
                                keyboardType="default"
                                label={strings.profile.address}
                                labelStyle={myProfile.label}
                                rightIcon={
                                    <Icon name="pen" size={14} color="#cccccc"/>
                                }
                                defaultValue={
                                    state?.location === null ? '' : state?.location.address
                                }
                                inputStyle={{fontSize: 14}}
                                inputContainerStyle={myProfile.input}
                                {...props}
                            />,
                            errorStyle: {color: 'red'},
                        }}
                        placeholder={strings.search.title}
                        query={{
                            key: 'AIzaSyA8qTJSkhgaHWljBupetyS4jrk4YW7QtlY',
                            language: strings.getLanguage() || 'ru',
                        }}
                    />

                </View>
            </View>
        </ScrollView>
    )
}
