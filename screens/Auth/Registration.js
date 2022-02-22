import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {registration} from '../../styles/registration'
import Api from '../../API'
import Logo from '../../assets/header/logo.svg'
import {strings} from "../../localization";
import {Controller, useForm} from "react-hook-form";
import {Colors} from "../../constants/colors";

function Registration({navigation}) {

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
            password: '',
            confirm_password: '',

        }
    });


    const validatePasswords = (data) => {
        if (data.password !== data.confirm_password) {

            setError(
                'password',
                {message: 'Пароли должны совпадать', type: 'focus'},
                {shouldFocus: true})
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

    const onSubmit = (data) => {
        validatePasswords(data)
        Api.postData('/auth/users/create/', data)
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
            <Logo style={{marginTop: 30}}/>

            <View style={{width: '100%'}}>
                <View>
                    <Controller
                        control={control}
                        rules={{required: true,
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                    }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <View>
                                <TextInput
                                    placeholder={'Email'}
                                    placeholderTextColor={Colors.black}
                                    style={{
                                        ...registration.input,
                                        borderBottomColor: errors.email ? Colors.error : Colors.gray_secondary
                                    }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                />
                                {errors.email &&
                                    <Text style={registration.errorText}>
                                        {errors.email?.message
                                            ? errors.email.message
                                            : strings.validation.required_field
                                        }
                                    </Text>}
                            </View>

                        )}
                        name="email"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <View>
                                <TextInput
                                    placeholder={strings.auth.password}
                                    placeholderTextColor={Colors.black}
                                    style={{
                                        ...registration.input,
                                        borderBottomColor: errors.password ? Colors.error : Colors.gray_secondary
                                    }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry={true}
                                />
                                {errors.password && <Text
                                    style={registration.errorText}>
                                    {errors.password?.message
                                        ? errors.password.message
                                        : strings.validation.required_field
                                    }
                                </Text>}
                            </View>
                        )}
                        name="password"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <View>
                                <TextInput
                                    placeholder={strings.auth.confirm_password}
                                    placeholderTextColor={Colors.black}
                                    style={{
                                        ...registration.input,
                                        borderBottomColor: errors.password ? Colors.error : Colors.gray_secondary
                                    }}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry={true}
                                />
                                {errors.confirm_password &&
                                    <Text style={registration.errorText}>{strings.validation.required_field}</Text>}
                            </View>
                        )}
                        name="confirm_password"
                    />
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
                onPress={handleSubmit(onSubmit)}
                activeOpacity={0.8}
            >
                <Text style={registration.nextText}>{strings.auth.next}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Registration
