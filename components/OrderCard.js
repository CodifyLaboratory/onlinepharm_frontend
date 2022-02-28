import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { orderCard } from '../styles/components/orderCard'

const OrderCard = ({navigation, data, status}) => {

   const {pharmacy_profile} = data

   console.log('status', status)

   const statusColor = (id) => {
       return {
           1: <Text>{string}</Text>
       }
   }


    return (
        <TouchableOpacity onPress={()=>navigation.push('OrderDetails')} style={orderCard.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{uri: pharmacy_profile?.logo}} style={orderCard.image} />

                <View>
                    <Text style={orderCard.title}>{pharmacy_profile?.title}</Text>
                    <Text style={orderCard.status}>{status?.title}</Text>
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
