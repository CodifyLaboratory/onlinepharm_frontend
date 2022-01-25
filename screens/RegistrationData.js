import React, { useState, useEffect } from 'react'
import {View, Text, TextInput, TouchableOpacity, Modal} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { registrationData } from '../styles/registrationData'
import Logo from '../assets/header/logo.svg'
import { registration } from '../styles/registration'
import Api from '../API'
import {strings} from "../localization";
import {Controller, useForm} from "react-hook-form";
import {Colors} from "../constants/colors";
import {styles} from "../styles/components/modals";
import Close from "../assets/icons/close.svg";
import Success from "../assets/icons/success.svg";
import MaskInput from "react-native-mask-input/src/MaskInput";

function RegistrationData({ navigation }) {

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            first_name: '',
            last_name: '',
            phone: ''
        }
    });

    const [userData, setUserData] = useState(null)
    const [visible, setVisible] = useState(false)
    const [phonePlaceholder, setPlaceholder] = useState(strings.auth.phone)

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

    const onSubmit = (data) => {
        Api.putData(`auth/users/update/${userData.id}/`, data, userData.access)
            .then((res) => {
                if (res.status === 200) {
                    setVisible(true)
                    setTimeout(()=>navigation.push('Login'), 2000)
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
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <View>
                            <TextInput
                                placeholder={strings.auth.name}
                                placeholderTextColor={Colors.black}
                                style={{
                                    ...registration.input,
                                    borderBottomColor: errors.first_name ? Colors.error : Colors.gray_secondary
                                }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.first_name &&
                                <Text style={registration.errorText}>
                                    {errors.first_name?.message
                                        ? errors.first_name.message
                                        : 'Field is required'
                                    }.
                                </Text>}
                        </View>
                    )}
                    name="first_name"
                />
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <View>
                            <TextInput
                                placeholder={strings.auth.surname}
                                placeholderTextColor={Colors.black}
                                style={{
                                    ...registration.input,
                                    borderBottomColor: errors.last_name ? Colors.error : Colors.gray_secondary
                                }}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                            {errors.last_name &&
                                <Text style={registration.errorText}>
                                    {errors.last_name?.message
                                        ? errors.last_name.message
                                        : 'Field is required'
                                    }.
                                </Text>}
                        </View>

                    )}
                    name="last_name"
                />
                <Controller
                    control={control}
                    rules={{required: true, minLength: 8}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <View>
                            <MaskInput
                                value={value}
                                onBlur={()=>setPlaceholder(strings.auth.phone)}
                                onFocus={()=>setPlaceholder('(996) xxx-xxx-xxx')}
                                onChangeText={onChange}
                                placeholder={phonePlaceholder}
                                placeholderTextColor={Colors.black}
                                keyboardType="number-pad"
                                style={{
                                    ...registration.input,
                                    borderBottomColor: errors.phone ? Colors.error : Colors.gray_secondary,
                                }}
                                mask={['(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
                            />
                            {errors.phone &&
                                <Text style={registration.errorText}>
                                    {errors.phone?.message
                                        ? errors.phone.message
                                        : 'Field is required'
                                    }.
                                </Text>}
                        </View>

                    )}
                    name="phone"
                />
            </View>
            <TouchableOpacity
                style={registration.next}
                onPress={handleSubmit(onSubmit)}
                activeOpacity={0.8}
            >
                <Text style={registration.nextText}>{strings.auth.registration}</Text>
            </TouchableOpacity>
            <SuccessModal visible={visible} setVisible={(e)=>setVisible(e)} />
        </View>
    )
}

export default RegistrationData

const SuccessModal = ({visible, setVisible, handleChange }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.modalViewClose}
                            onPress={() => {
                                setVisible(!visible)
                            }}
                        >
                            <Close />
                        </TouchableOpacity>
                        <Success />
                        <Text style={styles.modalText}>
                            {strings.auth.successfully_registered}
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
