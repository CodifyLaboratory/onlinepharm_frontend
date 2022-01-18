import React, {useEffect, useState} from 'react'
import {View, Image, ScrollView, TouchableOpacity, Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {Input} from 'react-native-elements'
import {myProfile} from '../styles/myProfile'

import Camera from '../assets/profile/camera.svg'

import * as ImagePicker from 'expo-image-picker';
import {cameraPermission} from "../permissions/camera";

export default function MyProfile({route}) {
    const data = route.params
    const [image, setImage] = useState(null);


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
        }
    }

    return (
        <ScrollView>
            <View style={myProfile.container}>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{marginBottom: 32}} onPress={callCamera}>
                        <Image
                            style={myProfile.profileAvatar}
                            source={{uri: image}}
                        />
                        <Camera style={myProfile.avatar_camera}/>
                    </TouchableOpacity>

                    <Input
                        keyboardType="default"
                        label={'Имя'}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        defaultValue={data?.user_profile?.first_name}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                    />
                    <Input
                        keyboardType="default"
                        label={'Фамилия'}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        defaultValue={data?.user_profile?.last_name}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                    />
                    <Input
                        keyboardType="email-address"
                        label={'Email'}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        defaultValue={data?.email}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                    />
                    <Input
                        keyboardType="numeric"
                        label={'Телефон'}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        defaultValue={data?.user_profile?.phone}
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                    />
                    <Input
                        keyboardType="default"
                        label={'Адрес'}
                        labelStyle={myProfile.label}
                        rightIcon={
                            <Icon name="pen" size={14} color="#cccccc"/>
                        }
                        defaultValue={
                            data?.location === null ? '' : data?.location
                        }
                        inputStyle={{fontSize: 14}}
                        inputContainerStyle={myProfile.input}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
