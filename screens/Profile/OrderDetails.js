import React, {useEffect, useState} from 'react'
import {Image, ScrollView, Text, View} from 'react-native'

import Loader from '../../components/Loader'
import {Colors} from '../../constants/colors'
import {getOrdersById} from '../../api'
import {orderDetails} from '../../styles/orderDetails'
import moment from 'moment'
import 'moment/locale/ru'

import {strings} from '../../localization'


function OrderDetails({ route }) {

    const statusColor = {
        1: '#4BCCED',
        2: '#FFC90A',
        3: '#883BC5',
        4: '#4B8819',
        5: '#F44336',
    }


    const { id } = route.params

    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(false)

    const { order_status, created_date, created_time, order_medications, pharmacy } = order

    useEffect(() => {
        getOrderDetails().then((r) => setOrder(r))
    }, [])

    const getOrderDetails = async () => {
        setLoading(true)
        try {
            return await getOrdersById(id)
        } catch (e) {
            throw new Error(e)
        } finally {
            setLoading(false)
        }
    }

    if(loading) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                <View style={orderDetails.cardContainer}>
                    <View>
                        <Text style={orderDetails.orderDate}>
                            {strings.product.order_has_created} {moment(created_date).format('DD MM YYYY')} {created_time?.slice(0, 8)}
                        </Text>
                        <Text style={{...orderDetails.status, color: statusColor[order_status?.id]}}>
                            {order_status?.title}
                        </Text>
                    </View>
                </View>

                <View
                    style={{
                        ...orderDetails.cardContainer,
                        flexDirection: 'row',
                    }}
                >
                    <Image source={{uri: pharmacy?.pharmacy_profile?.logo}} style={orderDetails.image} />
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 8,
                            }}
                        >
                            <Text style={orderDetails.where}>{strings.product.where}: </Text>
                            <Text style={orderDetails.pharmName}>{order?.pharmacy?.pharmacy_profile?.title}</Text>
                        </View>
                        <Text style={orderDetails.address}>
                            {order?.pharmacy?.location?.address}
                        </Text>
                    </View>
                </View>

                <View
                    style={{ ...orderDetails.cardContainer, paddingBottom: 8 }}
                >
                    {order_medications?.map((item) => (
                        <View style={orderDetails.productRow}>
                            <Text style={orderDetails.medicineName}>
                                {item.medication.title}
                            </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginRight: 8, width: '25%'}}>
                                <Text
                                    style={{
                                        ...orderDetails.pcs,
                                        marginRight: 20,
                                    }}
                                >
                                    {item?.count} {strings.main.pcs}
                                </Text>
                                <Text style={orderDetails.price}>
                                    {item.medication.price} c
                                </Text>
                            </View>
                        </View>
                    ))}
                </View>

                <View style={orderDetails.row}>
                    <Text style={orderDetails.name}>{strings.product.order_cost}</Text>
                    <Text style={orderDetails.price}>
                        {order?.total_price} с
                    </Text>
                </View>
                <View style={orderDetails.row}>
                    <Text style={orderDetails.name}>{strings.cart.delivery}</Text>
                    <Text style={orderDetails.name}>
                        {order?.delivery_price} с
                    </Text>
                </View>
                <View style={orderDetails.row}>
                    <Text style={orderDetails.name}>{strings.cart.to_pay}</Text>
                    <Text style={orderDetails.name}>
                        {order?.total_price + order?.delivery_price} с
                    </Text>
                </View>
                <View style={orderDetails.row}>
                    <Text style={orderDetails.name}>{strings.cart.delivery_type}</Text>
                    <Text style={orderDetails.name}>{strings.cart.delivery}</Text>
                </View>
                <View style={orderDetails.row}>
                    <Text style={orderDetails.name}>{strings.cart.payment_methods}</Text>
                    <Text style={orderDetails.name}>
                        {/*{order?.payment_method}*/}
                        {strings.cart.cash_payment}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default OrderDetails
