import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { registrationData } from '../styles/registrationData'
import Logo from '../assets/header/logo.svg'
import { registration } from '../styles/registration'
import Api from '../API'
import {strings} from "../localization";

function RegistrationData({ navigation, setIsSignIn }) {
    const [userProfile, setUserProfile] = useState({
        first_name: null,
        last_name: null,
        phone: null,
    })
    const [userData, setUserData] = useState(null)

    const loadData = async () => {
        try {
            let data = await AsyncStorage.getItem('user')
            if (data !== null) {
                setUserData(JSON.parse(data))
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleChangeFirstName = (text) => {
        setUserProfile({ ...userProfile, first_name: text })
    }
    const handleChangeLastName = (text) => {
        setUserProfile({ ...userProfile, last_name: text })
    }
    const handleChangePhone = (text) => {
        setUserProfile({ ...userProfile, phone: text })
    }

    const handleSubmit = () => {
        let body = { user_profile: userProfile, ...userData }
        Api.putData(`auth/users/update/${userData.id}/`, body, userData.access)
            .then((res) => {
                if (res.status === 200) {
                    navigation.push('Login')
                }
            })
            .catch((e) => console.log(e))
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View style={registrationData.container}>
            <View style={{ width: '100%', alignItems: 'center' }}>
                <Logo />
                <Text style={registrationData.text}>{strings.auth.personal_data}</Text>
            </View>
            <View style={{ width: '100%' }}>
                <TextInput
                    placeholder={strings.auth.name}
                    placeholderTextColor={'#333333'}
                    style={registration.input}
                    onChangeText={handleChangeFirstName}
                />
                <TextInput
                    placeholder={strings.auth.surname}
                    placeholderTextColor={'#333333'}
                    style={registration.input}
                    onChangeText={handleChangeLastName}
                />
                <TextInput
                    placeholder={strings.auth.phone}
                    placeholderTextColor={'#333333'}
                    style={registration.input}
                    onChangeText={handleChangePhone}
                />
            </View>
            <TouchableOpacity
                style={registration.next}
                onPress={() => {
                    // props.setIsSignIn(true)
                    handleSubmit()
                }}
                activeOpacity={0.8}
            >
                <Text style={registration.nextText}>{strings.auth.registration}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default RegistrationData
