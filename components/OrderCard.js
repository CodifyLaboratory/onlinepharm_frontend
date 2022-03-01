import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { orderCard } from '../styles/components/orderCard'
import moment from "moment";

const OrderCard = ({navigation, data, status}) => {

   const {pharmacy, total_price, created_date, id} = data


   const statusColor = {
           1: '#4BCCED',
           2: '#FFC90A',
           3: '#883BC5',
           4: '#4B8819',
           5: '#F44336',
   }


    return (
        <TouchableOpacity onPress={()=>navigation.push('OrderDetails', {id})} style={orderCard.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={{uri: pharmacy?.pharmacy_profile?.logo}} style={orderCard.image} />

                <View>
                    <Text style={orderCard.title}>{pharmacy?.pharmacy_profile?.title}</Text>
                    <Text style={{...orderCard.status, color: statusColor[status?.id]}}>{status?.title}</Text>
                </View>
            </View>
            <View>
                <Text style={orderCard.price}>{total_price} с</Text>
                <Text style={orderCard.date}>{moment(created_date).format('DD.MM.YYYY')}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default OrderCard
