import React, {useEffect, useState} from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native'

import {Radio, NativeBaseProvider} from 'native-base'

import {ordering} from '../../styles/ordering'
import {cartStyle} from '../../styles/cart'

import VisaIcon from '../../assets/icons/visa.svg'
import {Controller, useForm} from "react-hook-form";
import {strings} from "../../localization";
import PrimaryInput from "../../components/PrimaryInput";
import {useDispatch, useSelector} from "react-redux";

function Ordering({navigation}) {
    const [deliveryOptionsValue, setDeliveryOptionsValue] =
        React.useState('delivery')
    const [paymentMethodsValue, setPaymentMethodsValue] = React.useState(1)
    const [currentCard, setCurrentCard] = useState(0)

    useEffect(()=> {

    }, [])

    const dispatch = useDispatch()

    const {cart, user} = useSelector(state => state.data)


    // console.log('user!~!!!', user)

    const {control, handleSubmit, setError, formState: {errors}} = useForm({
        defaultValues: {
            name: user?.user_profile?.first_name ? user?.user_profile?.first_name : '',
            email: user?.email ? user?.email : '',
            entrance: '',
            comment: '',
            city: '',
            address: user?.location?.address ? user?.location?.address : '',
            apartment: '',
            phone: user?.user_profile?.phone ? user?.user_profile?.phone : '',
        }
    });

    const submit = (data) => {
        // console.log('data', data)
    }

    const cards = [
        { type: 'Visa', id: 1, number: '5323232****2212'},
        { type: 'MasterCard', id: 2, number: '6623232****4422'}
    ]

    const sumTotal = (arr) =>
        arr ? arr.reduce((sum, {all_price, count}) => sum + all_price * count, 0)
            : 0

    const delivery_price = 156

    const total = sumTotal(cart)

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={ordering.container}>
                <Text style={ordering.title}>{strings.cart.contact_details}</Text>
                <Text style={ordering.label}>{strings.auth.name}</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <PrimaryInput
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            errors={errors.name && (errors.name?.message ? errors.name?.message : strings.validation.required_field)}
                        />

                    )}
                    name="name"
                />
                <Text style={ordering.label}>{strings.auth.email}</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (

                        <PrimaryInput
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            errors={errors.email && (errors.email?.message ? errors.email?.message : strings.validation.required_field)}
                        />
                    )}
                    name="email"
                />
                <Text style={ordering.label}>{strings.auth.phone}</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <PrimaryInput
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            errors={errors.phone && (errors.phone?.message ? errors.phone?.message : strings.validation.required_field)}
                        />

                    )}
                    name="phone"
                />
                <Text style={ordering.label}>{strings.cart.order_comments}</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <PrimaryInput
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            errors={errors.comment && (errors.comment?.message ? errors.comment?.message : strings.validation.required_field)}
                        />

                    )}
                    name="comment"
                />

                <Text style={ordering.title}>{strings.cart.delivery_type}</Text>
                <NativeBaseProvider>
                    <Radio.Group
                        style={ordering.radioBtns}
                        name="deliveryOptions"
                        accessibilityLabel="Delivery options"
                        value={deliveryOptionsValue}
                        defaultValue={'delivery'}
                        onChange={(nextValue) => {
                            setDeliveryOptionsValue(nextValue)
                        }}
                    >
                        <Radio
                            style={ordering.radioBtn}
                            value="delivery"
                            my={1}
                        >
                            <Text style={ordering.radioText}>{strings.cart.delivery}</Text>
                        </Radio>
                    </Radio.Group>
                </NativeBaseProvider>
                <Text style={{...ordering.label, marginTop: 20}}>{strings.cart.city}:</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <PrimaryInput
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            errors={errors.city && (errors.city?.message ? errors.city?.message : strings.validation.required_field)}
                        />

                    )}
                    name="city"
                />
                <Text style={ordering.label}>{strings.profile.address}:</Text>
                <Controller
                    control={control}
                    rules={{required: true}}
                    render={({field: {onChange, onBlur, value}}) => (
                        <PrimaryInput
                            onChange={onChange}
                            onBlur={onBlur}
                            value={value}
                            errors={errors.address && (errors.address?.message ? errors.address?.message : strings.validation.required_field)}
                        />

                    )}
                    name="address"
                />
                <View style={ordering.boxes}>
                    <View style={{width: '45%'}}>
                        <Text style={ordering.label}>{strings.cart.apartment}:</Text>
                        <Controller
                            control={control}
                            rules={{required: true}}
                            render={({field: {onChange, onBlur, value}}) => (
                                <PrimaryInput
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    errors={errors.apartment && (errors.apartment?.message ? errors.apartment?.message : strings.validation.required_field)}
                                />

                            )}
                            name="apartment"
                        />
                    </View>
                    <View style={{width: '45%'}}>
                        <Text style={ordering.label}>{strings.cart.entrance}:</Text>
                        <Controller
                            control={control}
                            rules={{required: true}}
                            render={({field: {onChange, onBlur, value}}) => (
                                <PrimaryInput
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    value={value}
                                    errors={errors.entrance && (errors.entrance?.message ? errors.entrance?.message : strings.validation.required_field)}
                                />

                            )}
                            name="entrance"
                        />
                    </View>
                </View>
                <TouchableOpacity style={ordering.mapSelectBtn}>
                    <Text style={ordering.mapSelectBtnText}>{strings.cart.choose_on_map}</Text>
                </TouchableOpacity>


                <Text style={ordering.productListTitle}>{strings.cart.list_of_products}</Text>
                <View style={ordering.productList}>
                    {cart?.map(({medication, count}) => <View style={ordering.productRow}>
                        <Text style={{...ordering.listCount, width: '70%'}}>{medication?.title}</Text>
                        <View style={ordering.productRowPrice}>
                            <Text style={ordering.listCount}>{count} {strings.main.pcs}</Text>
                            <Text style={ordering.listPrice}>{medication?.price} c</Text>
                        </View>
                    </View>)}


                </View>
                <View style={[ordering.boxes, {marginBottom: 16}]}>
                    <Text style={ordering.text}>{strings.cart.sum}</Text>
                    <Text style={ordering.text}>{total} с</Text>
                </View>
                <View style={[ordering.boxes, {marginBottom: 16}]}>
                    <Text style={ordering.text}>{strings.cart.shipping_cost}</Text>
                    <Text style={ordering.text}>{delivery_price} с</Text>
                </View>
                <View style={[ordering.boxes]}>
                    <Text style={ordering.text}>{strings.cart.to_pay}</Text>
                    <Text style={ordering.text}>{total + delivery_price} с</Text>
                </View>

                <Text style={ordering.productListTitle}>{strings.cart.payment_methods}</Text>

                <NativeBaseProvider>
                    <Radio.Group
                        style={ordering.radioBtns}
                        name="deliveryOptions"
                        // accessibilityLabel="Delivery options"
                        value={paymentMethodsValue}
                        defaultValue={paymentMethodsValue}
                        onChange={(value) => {
                            setPaymentMethodsValue(value)
                        }}
                    >
                        <Radio
                            style={ordering.radioBtn}
                            value={1}
                            my={1}
                        >
                            <Text style={ordering.radioText}>{strings.cart.in_cash}</Text>
                        </Radio>
                        <Radio
                            style={ordering.radioBtn}
                            value={2}
                            my={1}
                        >
                            <Text style={ordering.radioText}>
                                {strings.cart.online_payment}
                            </Text>

                        </Radio>
                    </Radio.Group>
                </NativeBaseProvider>

                {paymentMethodsValue === 2 && <View style={{marginBottom: 34, marginTop: 30}}>
                    {cards.map(({type, number}) =>  <View style={ordering.paymentCardWrap}>
                        <View style={ordering.paymentIcon}>
                            <VisaIcon/>
                        </View>
                        <View>
                            <Text style={ordering.cardName}>{type}</Text>
                            <Text style={ordering.cardNumber}>{number}</Text>
                        </View>

                    </View>)}
                </View>}

                {paymentMethodsValue === 2 &&
                <TouchableOpacity onPress={handleSubmit(submit)} style={{...cartStyle.btn}} activeOpacity={0.8}>
                    <Text style={cartStyle.btnText}>{strings.cart.add_card}</Text>
                </TouchableOpacity>}


                <TouchableOpacity onPress={handleSubmit(submit)} style={{...cartStyle.btn, marginTop: 20}}
                                  activeOpacity={0.8}>
                    <Text style={cartStyle.btnText}>{strings.cart.checkout}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Ordering
