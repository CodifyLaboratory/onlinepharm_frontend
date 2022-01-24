import React, {useEffect, useState} from 'react'
import {View, Image, ScrollView, TouchableOpacity, Button, Alert} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Input} from 'react-native-elements'
import {myProfile} from '../styles/myProfile'
import { serialize } from 'object-to-formdata'

import Camera from '../assets/profile/camera.svg'

import * as ImagePicker from 'expo-image-picker';
import {cameraPermission} from "../permissions/camera";
import {updateProfile} from "../api";
import {strings} from "../localization";

export default function MyProfile({route, navigation}) {
    const data = route.params

    const [image, setImage] = useState(null);
    const [state, setState] = useState(data)

    useEffect(() => {
        cameraPermission()
    }, []);

    const callCamera = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
            setState({
                ...state, user_profile: {
                    ...state.user_profile,
                    photo: result.uri
                }
            })}
        }



        // const formData = serialize(
    //     state
    //     // options
    //     // existingFormData, // optional
    //     // keyPrefix, // optional
    // );



    const update = async () => {
        let formData = new FormData();

        formData.append("user_profile[photo]", state.user_profile.photo);
        formData.append("user_profile[first_name]", state.user_profile.first_name)

        try {
            console.log('form data', formData)
            await updateProfile(data.id, formData)
        } catch (e) {
           console.log('ERROR', e)
        } finally {
            navigation.push('Profile')
        }
    }

    return (
        <ScrollView>
            <View style={myProfile.container}>
                <Button title={'SAVE'} onPress={update}/>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{marginBottom: 32}} onPress={callCamera}>
                        <Image
                            style={myProfile.profileAvatar}
                            source={image ? {uri: image} : require('../assets/auth/defaultPhoto.png')}
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
                    />
                    <Input
                        keyboardType="default"
                        label={strings.profile.address}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        onChangeText={(e) => setState({
                            ...state, location: {
                                ...state.location,
                                address: e
                            }
                        })}
                        defaultValue={
                            state?.location === null ? '' : state?.location.address
                        }
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
