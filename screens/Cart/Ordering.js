import React, { useEffect, useState } from 'react'
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
import { useSelector } from "react-redux";
import {createOrder} from "../../api";
import SuccessModalComponent from '../../components/modals/successModal'
import MapModal from "../../components/modals/MapModal";

function Ordering({navigation, route}) {
    const [deliveryOptionsValue, setDeliveryOptionsValue] =
        React.useState('delivery')
    const [paymentMethodsValue, setPaymentMethodsValue] = React.useState(1)
    // const [currentCard, setCurrentCard] = useState(0)
    const [showModal, setShowModal] = useState(false)
    const [showMap, setShowMap] = useState(false)

    useEffect(()=> {

    }, [])


    const { basket, id } = route.params
    const delivery_price = 160

    const { user } = useSelector(state => state.data)

    const {control, handleSubmit, setError, formState: {errors}, setValue} = useForm({
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

    const submit = async (data) => {
        let form = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            pharmacy: id,
            comment: data.comment,
            payment_method: "Оплата наличными",
            address: data.address,
            apartment: data.apartment,
            entrance: data.entrance,
            total_price: total,
            delivery_price: delivery_price,
            order_medications: basket.map(item => ({medication: item.medication.id, count: item?.count}))
        }


       console.log('form', form)
        try {
            const res = await createOrder(form)
            if (res) {
                setShowModal(true)

                setTimeout(() => {
 navigation.navigate('Main')
                    setShowModal(false)
                }, 3000)
            }
        } catch (e) {
            throw new Error(e)
        } finally {

        }
    }

    const cards = [
        { type: 'Visa', id: 1, number: '5323232****2212'},
        { type: 'MasterCard', id: 2, number: '6623232****4422'}
    ]

    const sumTotal = (arr) =>
        arr ? arr.reduce((sum, {medication, count}) => sum + medication?.price * count, 0)
            : 0

    const total = sumTotal(basket)

    return (
        <ScrollView style={{backgroundColor: '#fff'}}>
            <View style={ordering.container}>
                <Text style={ordering.title}>{strings.cart.contact_details}</Text>
                <Text style={ordering.label}>{strings.auth.name}</Text>
                <Controller
                    control={control}
                    rules={{required: false}}
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
                    rules={{required: false}}
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
                    rules={{required: false}}
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
                    rules={{required: false}}
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
                            rules={{required: false}}
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
                            rules={{required: false}}
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

                <TouchableOpacity onPress={()=>setShowMap(true)} style={ordering.mapSelectBtn}>
                    <Text style={ordering.mapSelectBtnText}>{strings.cart.choose_on_map}</Text>
                </TouchableOpacity>


                <Text style={ordering.productListTitle}>{strings.cart.list_of_products}</Text>
                <View style={ordering.productList}>
                    {basket?.map(({medication, count}) => <View style={ordering.productRow}>
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
                        {/*<Radio*/}
                        {/*    style={ordering.radioBtn}*/}
                        {/*    value={2}*/}
                        {/*    my={1}*/}
                        {/*>*/}
                        {/*    <Text style={ordering.radioText}>*/}
                        {/*        {strings.cart.online_payment}*/}
                        {/*    </Text>*/}
                        {/*</Radio>*/}
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
            <SuccessModalComponent text={strings.cart.successfully_placed} visible={showModal} setVisible={(e)=>setShowModal(e)} />
            <MapModal setValue={(e)=>setValue('address', e)} visible={showMap} setShow={(e)=>setShowMap(e)}  />
        </ScrollView>
    )
}

export default Ordering
