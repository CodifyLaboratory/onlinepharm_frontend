import React, {useState} from 'react'
import {Controller} from "react-hook-form";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {strings} from "../localization";
import {Colors} from "../constants/colors";
import {registration} from "../styles/registration";
import OpenEye from '../assets/icons/open_eye.svg'
import CloseEye from '../assets/icons/closed_eye.svg'


const PasswordInput = ({errors, onChange, onBlur, value, placeholder}) => {

    console.log('errors', errors)

    const [visible, setVisible] = useState(false)

    return (
                <View>
                    <TouchableOpacity style={{width: 20, height: 20, position: "absolute", top: 30, right: 10, zIndex: 1}} onPress={()=>setVisible(!visible)}>
                        {visible ? <OpenEye /> : <CloseEye />}
                    </TouchableOpacity>
                    <TextInput
                        secureTextEntry={!visible}
                        placeholder={placeholder}
                        placeholderTextColor={Colors.gray_medium}
                        style={{
                            ...registration.input,
                            borderBottomColor: errors ? Colors.error : Colors.gray_secondary,
                        }}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                    {errors &&
                    <Text style={{...registration.errorText, bottom: (errors.length > 30) ? -20 : 10}}>
                        {errors}
                    </Text>}
                </View>
    )

}

export default PasswordInput
