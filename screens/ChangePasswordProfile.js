import React, {useState} from 'react'
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {strings} from "../localization";
import recoveryPassword from "../styles/recoveryPassword";
import {Controller, useForm} from "react-hook-form";

import {registration} from "../styles/registration";
import {changePassword} from "../api";
import SuccessModalComponent from "../components/modals/successModal";
import PasswordInput from "../components/PasswordInput";

const ChangePasswordProfile = ({navigation}) => {



    const [visible, setVisible] = useState(false)

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            old_password: '',
            password: '',
            confirm_password: ''
        }
    });


    const onSubmit = async (data) => {
        if (data.password !== data.confirm_password) {
            return setError('password', {type: 'focus', message: strings.validation.password_must_match})
        }
        try {
            await changePassword({
                new_password: data.password,
                confirm_password: data.confirm_password,
                old_password: data.old_password
            })
            setVisible(true)
            setTimeout(() => navigation.push('Profile'), 3000)

        } catch (e) {
            if (e.response.data?.old_password) {
                setError('old_password', {type: 'focus', message: e.response.data?.old_password})
            }
        }
    }

    return (

        <View style={{...recoveryPassword.container, justifyContent: 'flex-end'}}>
            <View>
                <ScrollView>
                    <Controller
                        control={control}
                        rules={{required: true}}
                        render={({field: {onChange, onBlur, value}}) => (
                            <PasswordInput value={value} onChange={onChange} onBlur={onBlur}
                                           errors={errors.old_password && (errors.old_password?.message ? errors.old_password?.message : strings.validation.required_field)}
                                           placeholder={strings.validation.old_password}/>
                        )}
                        name="old_password"
                    />

                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&]).*$/i,
                                message: strings.validation.password_rule
                            }
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <PasswordInput value={value} onChange={onChange} onBlur={onBlur}
                                           errors={errors?.password && (errors.password?.message ? errors.password?.message : strings.validation.required_field)}
                                           placeholder={strings.auth.password}/>

                        )}
                        name="password"
                    />
                    <Controller
                        control={control}
                        rules={{
                            required: true,
                            pattern: {
                                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&]).*$/i,
                                message: strings.validation.password_rule
                            }
                        }}
                        render={({field: {onChange, onBlur, value}}) => (
                            <PasswordInput value={value} onChange={onChange} onBlur={onBlur}
                                           errors={errors?.confirm_password && (errors.confirm_password?.message ? errors.confirm_password?.message : strings.validation.required_field)}
                                           placeholder={strings.auth.new_password}/>

                        )}
                        name="confirm_password"
                    />
                    <SuccessModalComponent visible={visible} setVisible={(e) => setVisible(e)}
                                           text={strings.auth.password_changed}/>

                    <TouchableOpacity
                        style={{...recoveryPassword.btn, position: "relative", marginTop: 100}}
                        onPress={handleSubmit(onSubmit)}
                        activeOpacity={0.8}
                    >
                        <Text style={registration.nextText}>{strings.profile.save}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>


        </View>
    )
}

export default ChangePasswordProfile


