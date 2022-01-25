import React, {useState} from 'react'
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {strings} from "../localization";
import recoveryPassword from "../styles/recoveryPassword";
import {Controller, useForm} from "react-hook-form";
import {Colors} from "../constants/colors";
import {registration} from "../styles/registration";
import {setNewPassword} from "../api";
import SuccessModalComponent from "../components/modals/successModal";

const CreateNewPassword = ({navigation, route}) => {

    const {email} = route.params

    const [visible, setVisible] = useState(false)

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            password: '',
            confirm_password: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            await setNewPassword({new_password: data.password, confirm_password: data.confirm_password, email})
            setVisible(true)
            setTimeout(()=>navigation.navigate('Login'), 3000)

        } catch (e) {
            setError('password', {type: 'focus', message: 'Пароли должы совпадать'})
        }
    }

    return (
        <View style={recoveryPassword.container}>
            <Controller
                control={control}
                rules={{required: true,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&]).*$/i,
                        message: strings.validation.password_rule
                    }
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <View>
                        <TextInput
                            placeholder={strings.auth.new_password}
                            placeholderTextColor={Colors.gray_medium}
                            style={{
                                ...registration.input,
                                borderBottomColor: errors.password ? Colors.error : Colors.gray_secondary,
                                marginTop: 83
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.password &&
                        <Text style={registration.errorText}>
                            {errors.password?.message
                                ? errors.password.message
                                : strings.validation.required_field
                            }.
                        </Text>}
                    </View>

                )}
                name="password"
            />
            <Controller
                control={control}
                rules={{required: true,
                    pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d$@$!%*?&]).*$/i,
                        message: strings.validation.password_rule
                    }
                }}
                render={({field: {onChange, onBlur, value}}) => (
                    <View>
                        <TextInput
                            placeholder={strings.auth.confirm_password}
                            placeholderTextColor={Colors.gray_medium}
                            style={{
                                ...registration.input,
                                borderBottomColor: errors.confirm_password ? Colors.error : Colors.gray_secondary,
                            }}
                            onBlur={onBlur}
                            onChangeText={onChange}
                            value={value}
                        />
                        {errors.confirm_password &&
                        <Text style={registration.errorText}>
                            {errors.confirm_password?.message
                                ? errors.confirm_password.message
                                : strings.validation.required_field
                            }.
                        </Text>}
                    </View>

                )}
                name="confirm_password"
            />
            <TouchableOpacity
                style={recoveryPassword.btn}
                onPress={handleSubmit(onSubmit)}
                activeOpacity={0.8}
            >
                <Text style={registration.nextText}>{strings.auth.send}</Text>
            </TouchableOpacity>
            <SuccessModalComponent visible={visible} setVisible={(e)=>setVisible(e)} text={strings.auth.password_changed} />
        </View>
    )
}

export default CreateNewPassword


