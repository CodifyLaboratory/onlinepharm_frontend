import React, { useState } from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { registration } from '../styles/registration'
import Api from '../API'
import Logo from '../assets/header/logo.svg'
import {strings} from "../localization";

function Registration({ navigation }) {
    const [initialState, setInitialState] = useState({
        email: '',
        password: '',
        confirm_password: '',
    })
    const [passwordCheck, setPasswordCheck] = useState(false)

    const handleChangeEmail = (text) => {
        setInitialState({ ...initialState, email: text })
    }
    const handleChangePassword = (text) => {
        setInitialState({ ...initialState, password: text })
        setPasswordCheck(false)
    }
    const handleChangeConfirm = (text) => {
        setInitialState({ ...initialState, confirm_password: text })
        setPasswordCheck(false)
    }

    const validatePasswords = () => {
        if (initialState.password !== initialState.confirm_password) {
            setPasswordCheck(true)
        }
    }

    const saveData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('user', jsonValue)
        } catch (err) {
            console.log(err)
        }
    }

    const handleSubmit = () => {
        validatePasswords()
        Api.postData('/auth/users/create/', initialState)
            .then((res) => {
                if (res.status === 201) {
                    navigation.push('RegistrationData')
                    saveData(res.data)
                }
            })
            .catch((e) => console.log(e))
    }

    return (
        <View style={registration.container}>
            <Logo style={{ marginTop: 30 }} />

            <View style={{ width: '100%' }}>
                <View>
                    <TextInput
                        placeholder={'Email'}
                        placeholderTextColor={'#333333'}
                        style={registration.input}
                        textContentType={'emailAddress'}
                        onChangeText={handleChangeEmail}
                    />
                    <TextInput
                        placeholder={strings.auth.password}
                        placeholderTextColor={'#333333'}
                        style={registration.input}
                        secureTextEntry={true}
                        onChangeText={handleChangePassword}
                        autoCorrect={false}
                    />
                    {passwordCheck ? (
                        <Text
                            style={{
                                marginLeft: 15,
                                marginTop: -27,
                                color: 'red',
                            }}
                        >
                            Пароли не совпадают
                        </Text>
                    ) : null}
                    <TextInput
                        placeholder={strings.auth.confirm_password}
                        placeholderTextColor={'#333333'}
                        style={registration.input}
                        secureTextEntry={true}
                        onChangeText={handleChangeConfirm}
                        autoCorrect={false}
                    />

                    {passwordCheck ? (
                        <Text
                            style={{
                                marginLeft: 15,
                                marginTop: -27,
                                color: 'red',
                            }}
                        >
                            Пароли не совпадают
                        </Text>
                    ) : null}
                </View>

                <View style={registration.forgotContainer}>
                    <Text style={registration.forgotAccount}>
                        {strings.auth.already_have_account}
                    </Text>
                    <TouchableOpacity
                        style={registration.forgot}
                        onPress={() => navigation.push('Login')}
                    >
                        <Text style={registration.forgotText}>{strings.auth.enter}</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity
                style={registration.next}
                onPress={() => {
                    handleSubmit()
                    // navigation.push('RegistrationData')
                }}
                activeOpacity={0.8}
            >
                <Text style={registration.nextText}>{strings.auth.next}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Registration
