import React, { useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { strings } from '../../localization'
import recoveryPassword from '../../styles/recoveryPassword'
import { Controller, useForm } from 'react-hook-form'
import { Colors } from '../../constants/colors'
import { registration } from '../../styles/registration'

import { resetPassword, verifyCode } from '../../api'

const PasswordRecoveryCode = ({ navigation, route }) => {
    const [counter, setCounter] = React.useState(30)
    const [startCountdown, setStartCountdown] = React.useState(true)

    const { email } = route.params

    const {
        control,
        handleSubmit,
        setError,
        formState: { errors },
    } = useForm({
        defaultValues: {
            code: '',
        },
    })

    React.useEffect(() => {
        if (startCountdown) {
            const timer =
                counter > 0 && setInterval(() => setCounter(counter - 1), 1000)

            if (counter === 0) {
                // countdown is finished
                setStartCountdown(false)
            }

            return () => clearInterval(timer)
        }
    }, [counter, startCountdown])

    const onSubmit = async (data) => {
        try {
            const { user_id } = await verifyCode({ otp: data.code, email })
            if (user_id) {
                navigation.navigate('CreateNewPassword', { email })
            }
        } catch (e) {
            setError('code', {
                type: 'focus',
                message: strings.validation.wrong_code,
            })
        }
    }

    const _resend = async () => {
        await resetPassword({ email })
        setCounter(30)
        setStartCountdown(true)
    }

    return (
        <View style={recoveryPassword.container}>
            <Text style={recoveryPassword.info_text}>
                {strings.auth.confirm_code}
            </Text>
            <Controller
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View style={{ marginTop: 83 }}>
                        <Text style={recoveryPassword.enter_code}>
                            {strings.auth.enter_the_code}
                        </Text>
                        <TextInput
                            placeholder={'******'}
                            placeholderTextColor={Colors.gray_secondary}
                            keyboardType="numeric"
                            style={{
                                ...recoveryPassword.input,
                                borderBottomColor: errors.code
                                    ? Colors.error
                                    : Colors.gray_secondary,
                                fontSize: 24,
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.code && (
                            <Text style={registration.errorText}>
                                {errors.code?.message
                                    ? errors.code.message
                                    : strings.validation.field_is_required}
                                .
                            </Text>
                        )}
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
                    <Text style={registration.nextText}>
                        {strings.auth.next}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    disabled={startCountdown}
                    style={{
                        ...recoveryPassword.group_button_resend,
                        backgroundColor: !startCountdown
                            ? Colors.light
                            : Colors.background,
                    }}
                    onPress={_resend}
                    activeOpacity={0.8}
                >
                    <Text
                        style={{
                            ...recoveryPassword.resendText,
                            color: startCountdown
                                ? Colors.gray_light
                                : Colors.white,
                        }}
                    >
                        {strings.auth.resend_code}
                    </Text>

                    {!startCountdown ? null : (
                        <Text style={recoveryPassword.timer}>
                            :
                            <Text style={recoveryPassword.timerText}>
                                {counter}
                            </Text>{' '}
                            {strings.auth.seconds}
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PasswordRecoveryCode
