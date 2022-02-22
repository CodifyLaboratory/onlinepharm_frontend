import React, { useEffect } from 'react'
import {
    Text,
    View
} from "react-native";
import {strings} from "../../localization";
import {Controller, useForm} from "react-hook-form";

import {paymentMethods} from "../../styles/paymentMethods";
import {Colors} from "../../constants/colors";
import { Masks } from "react-native-mask-input";
import MaskInput from "react-native-mask-input/src/MaskInput";

const AddPaymentCard = ({navigation}) => {

    useEffect(() => {
        navigation.setParams({updateProfile: handleSubmit(onSubmit)})
    }, [])


    const {control, handleSubmit, setValue, formState: {errors}} = useForm({
        defaultValues: {
            number: '',
            date: '',
            cvc: ''
        }
    });

    const onSubmit = async (data) => {
        console.log('data', data)
    }

    return (
        <View style={paymentMethods.container}>
            <View style={paymentMethods.formCardContainer}>
                <Text style={paymentMethods.formCardLabel}>№ cards</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onBlur, value}}) => (
                        <View>
                            <MaskInput
                                value={value}
                                showObfuscatedValue
                                obfuscationCharacter="*"
                                onChangeText={(masked, unmasked, obfuscated) => {
                                    setValue('number', unmasked)
                                }}
                                onBlur={onBlur}
                                keyboardType='number-pad'
                                mask={Masks.CREDIT_CARD}
                                placeholder={'**** **** **** ****'}
                                placeholderTextColor={Colors.primary}
                                style={{...paymentMethods.formCardInput}}
                            />
                            {errors.number &&
                            <Text style={paymentMethods.errorText}>
                                {errors.number?.message
                                    ? errors.number.message
                                    : strings.validation.required_field
                                }.
                            </Text>}
                        </View>

                    )}
                    name="number"
                />
                <View style={{flexDirection: 'row', display: 'flex', marginTop: 24}}>
                    <View style={{marginRight: 32}}>
                        <Text style={paymentMethods.formCardLabel}>
                            {` VALID\nTHRU`}
                        </Text>
                        <Controller
                            control={control}
                            rules={{required: true}}
                            render={({field: {onChange, onBlur, value}}) => (
                                <View>
                                    <MaskInput
                                        value={value}
                                        onChangeText={onChange}
                                        onBlur={onBlur}
                                        placeholder={'dd/yy'}
                                        mask={[/\d/, /\d/, ' ', '/', ' ', /\d/, /\d/,]}
                                        obfuscationCharacter={"*"}
                                        keyboardType='number-pad'
                                        placeholderTextColor={Colors.primary}
                                        style={{...paymentMethods.formCardInputBottom}}
                                    />
                                    {errors.date &&
                                    <Text style={paymentMethods.errorText}>
                                        {errors.date?.message
                                            ? errors.cvc ? errors.date.message.slice(0, 10).concat('...') : errors.date.message
                                            : errors.cvc ? strings.validation.required_field.slice(0, 10).concat('...') : strings.validation.required_field
                                        }.
                                    </Text>}
                                </View>

                            )}
                            name="date"
                        />
                    </View>

                    <View>
                        <Text style={paymentMethods.formCardLabel}>{`code\nCVV/CVC`}</Text>
                        <Controller
                            control={control}
                            rules={{required: true}}
                            render={({field: {onChange, onBlur, value}}) => (
                                <View>
                                    <MaskInput
                                        value={value}
                                        onChangeText={onChange}
                                        // secureTextEntry={true}
                                        onBlur={onBlur}
                                        placeholderTextColor={Colors.primary}
                                        placeholder={'***'}
                                        keyboardType='number-pad'
                                        mask={[/\d/, /\d/, /\d/,]}
                                        style={{...paymentMethods.formCardInputBottom, width: 45}}
                                    />
                                    {errors.cvc &&
                                    <Text style={paymentMethods.errorText}>
                                        {errors.cvc?.message
                                            ? errors.cvc.message
                                            : strings.validation.required_field
                                        }.
                                    </Text>}
                                </View>

                            )}
                            name="cvc"
                        />
                    </View>


                </View>
            </View>
        </View>
    )
}

export default AddPaymentCard


