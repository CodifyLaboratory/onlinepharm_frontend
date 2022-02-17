import React, {useEffect, useRef, useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {strings} from "../../localization";
import recoveryPassword from "../../styles/recoveryPassword";
import {Controller, useForm} from "react-hook-form";
import {Colors} from "../../constants/colors";
import {registration} from "../../styles/registration";
import {Countdown} from "react-native-element-timer/index";
import {resetPassword, verifyCode} from "../../api";

const PasswordRecoveryCode = ({navigation, route}) => {

    const {email} = route.params

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            code: '',
        }
    });

    const [resend, setResend] = useState(false)
    const countdownRef = useRef(null);

    useEffect(() => {
        !resend && countdownRef.current.start();
    }, [resend])

    const onSubmit = async (data) => {
        try {
            const { user_id } = await verifyCode({otp: data.code, email})
            if (user_id) {
                navigation.navigate('CreateNewPassword', {email})
            }
        } catch (e) {
            setError('code', {type: 'focus', message: 'Wrong code'})
        }
    }

    const _resend = async () => {
        await resetPassword({email})
        setResend(false)
    }

    return (
        <View style={recoveryPassword.container}>
            <Text style={recoveryPassword.info_text}>{strings.auth.confirm_code}</Text>
            <Controller
                control={control}
                rules={{required: true}}
                render={({field: {onChange, onBlur, value}}) => (
                    <View style={{marginTop: 83}}>
                        <Text style={recoveryPassword.enter_code}>{strings.auth.enter_the_code}</Text>
                        <TextInput
                            placeholder={'******'}
                            placeholderTextColor={Colors.gray_secondary}
                            keyboardType="numeric"
                            style={{
                                ...recoveryPassword.input,
                                borderBottomColor: errors.code ? Colors.error : Colors.gray_secondary,
                                fontSize: 24
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.code &&
                        <Text style={registration.errorText}>
                            {errors.code?.message
                                ? errors.code.message
                                : 'Field is required'
                            }.
                        </Text>}
                    </View>

                )}
                name="code"
            />
            <View style={recoveryPassword.group_buttons}>
                <TouchableOpacity
                    style={recoveryPassword.group_button_next}
                    onPress={handleSubmit(onSubmit)}
                    activeOpacity={0.8}
                >
                    <Text style={registration.nextText}>{strings.auth.next}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={!resend}
                    style={{
                        ...recoveryPassword.group_button_resend,
                        backgroundColor: resend ? Colors.light : Colors.background
                    }}
                    onPress={_resend}
                    activeOpacity={0.8}
                >
                    <Text style={{
                        ...recoveryPassword.resendText,
                        color: !resend ? Colors.gray_light : Colors.white
                    }}>{strings.auth.resend_code} </Text>
                    {resend ? null : <Text style={recoveryPassword.timer}>
                        00:
                        <Countdown
                            ref={countdownRef}
                            style={{position: 'absolute', paddingLeft: 19}}
                            textStyle={recoveryPassword.timerText}
                            initialSeconds={30}
                            onEnd={(e) => setResend(true)}
                        />
                    </Text>}

                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PasswordRecoveryCode


