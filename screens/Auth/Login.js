import React, {useState} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import {registration} from '../../styles/registration'
import Logo from '../../assets/header/logo.svg'
import {API} from 'react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper'
import Api from '../../API-old'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {setAuthorization, setGuest} from "../../store/actions";
import {useDispatch} from "react-redux";
import {strings} from "../../localization";
import {useForm, Controller} from "react-hook-form";
import {Colors} from "../../constants/colors";
import {login} from "../../api";

function Login({navigation}) {

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const dispatch = useDispatch()

    const saveData = async (data) => {
        try {
            const jsonValue = JSON.stringify(data)
            await AsyncStorage.setItem('userData', jsonValue)
        } catch (err) {
            console.log(err)
        }
    }

    const onSubmit = async (data) => {
        Api.postData('auth/users/token/', data)
            .then((res) => {
                if (res.status === 200) {
                    saveData(res.data)
                    dispatch(setGuest(false))
                    dispatch(setAuthorization(true))
                }
            })
            .catch((e) => setError("email", {
                message: 'Email or password is wrong',
                type: "focus"
            }, {shouldFocus: true}))
    }

    return (
        <View style={registration.container}>
            <Logo style={{marginTop: 65, marginBottom: 60}}/>
            <View style={{width: '100%'}}>
                <Controller
                    control={control}
                    rules={{required: true}}
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
                                }.
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
                            {errors.password && <Text style={registration.errorText}>{strings.validation.required_field}</Text>}
                        </View>
                    )}
                    name="password"
                />

                <TouchableOpacity onPress={() => navigation.push('RecoveryPasswordEmail')}>
                    <Text style={[
                        registration.forgotPassword,
                        {textAlign: 'center'},
                    ]}
                    >
                        {strings.auth.forgot_your_password}
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={registration.forgotContainer}>
                <Text style={registration.forgotAccount}>
                    {strings.auth.dont_have_account}
                </Text>
                <TouchableOpacity
                    style={registration.forgotTextContainer}
                    onPress={() => navigation.push('Registration')}
                >
                    <Text style={registration.forgotText}>
                        {strings.auth.registration}
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={registration.next}
                onPress={handleSubmit(onSubmit)}
                activeOpacity={0.8}
            >
                <Text style={registration.nextText}>{strings.auth.enter}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Login
