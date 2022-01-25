import React from 'react'
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {strings} from "../localization";
import recoveryPassword from "../styles/recoveryPassword";
import {Controller, useForm} from "react-hook-form";
import {Colors} from "../constants/colors";
import {registration} from "../styles/registration";
import {resetPassword} from "../api";

const PasswordRecoveryEmail = ({navigation}) => {

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            email: '',
        }
    });

    const onSubmit = async (data) => {
        try {
            await resetPassword(data)
            navigation.navigate('RecoveryPasswordCode', { ...data })
        } catch (e) {
            setError('email', {type: 'focus', message: 'Wrong email'})
        }

    }

    return (
        <View style={recoveryPassword.container}>
            <Text style={recoveryPassword.info_text}>{strings.auth.enter_your_email}</Text>
            <Controller
                control={control}
                rules={{required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: strings.validation.invalid_email
                    }
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <View>
                        <TextInput
                            placeholder={'Email'}
                            placeholderTextColor={Colors.black}
                            style={{
                                ...registration.input,
                                borderBottomColor: errors.email ? Colors.error : Colors.gray_secondary,
                                marginTop: 83
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
            <TouchableOpacity
                style={recoveryPassword.btn}
                onPress={handleSubmit(onSubmit)}
                activeOpacity={0.8}
            >
                <Text style={registration.nextText}>{strings.auth.send}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default PasswordRecoveryEmail


