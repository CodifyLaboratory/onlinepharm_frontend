import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { orderCard } from '../styles/components/orderCard'

const OrderCard = ({navigation}) => {
    return (
        <TouchableOpacity onPress={()=>navigation.push('OrderDetails')} style={orderCard.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={orderCard.image} />

                <View>
                    <Text style={orderCard.title}>Фармамир</Text>
                    <Text style={orderCard.status}>Доставлен</Text>
                </View>
            </View>
            <View>
                <Text style={orderCard.price}>1740 с</Text>
                <Text style={orderCard.date}>30.12.2021</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OrderCard
