import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

import MedicineCard from '../../components/MedicineCard'

import Loader from '../../components/Loader'
import { Colors } from '../../constants/colors'
import {getFavoritesProducts, getAllBasket, getOrdersById} from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { setMedicineFavorite, loadCart } from '../../store/actions'
import OrderCard from '../../components/OrderCard'
import { orderCard } from '../../styles/components/orderCard'
import { orderDetails } from '../../styles/orderDetails'
import moment from "moment";

function OrderDetails({ navigation, route }) {

    const { id } = route.params

    const dispatch = useDispatch()
    const [changed, setChanged] = useState(false)
    const [order, setOrder] = useState(null)

    const {order_status, created_date, order_medications} = order

     useEffect(()=>{
         getOrderDetails().then(r => setOrder(r))
     }, [])

    // const isSelected = (id) => {
    //     return favorites_medicine?.find((item) => item.medication.id === id)
    // }

    // if (!favorites_medicine) return <Loader />

    const getOrderDetails = async () => {
        try {
          const res = await getOrdersById(id)

            return res
        } catch (e) {
            console.log('e++', e)
        } finally {

        }
    }

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                <View style={orderDetails.cardContainer}>
                    <View>
                          <Text style={orderDetails.orderDate}>Заказ создан {moment(created_date).format('')}</Text>
                    <Text style={orderDetails.status}>{order_status?.title}</Text>
                    </View>

                </View>

                <View style={{...orderDetails.cardContainer, flexDirection: 'row'}}>
                    <Image style={orderDetails.image} />
                    <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 8}}>
                    <Text style={orderDetails.where}>Где: </Text>
                    <Text style={orderDetails.pharmName}>Фармамир</Text>
                    </View>
                    <Text style={orderDetails.address}>ул.Советская 233 9 мкрн д.10</Text>
                    </View>
                </View>

             <View style={{...orderDetails.cardContainer, paddingBottom: 8}}>
                 {order_medications?.map(item => <View style={orderDetails.productRow}>
                     <Text style={orderDetails.medicineName}>{item.medication.title}</Text>
                     <View style={{flexDirection: 'row'}}>
                         <Text style={{...orderDetails.pcs, marginRight: 20}}>1 шт</Text>
                         <Text style={orderDetails.price}>{item.medication.price} c</Text>
                     </View>
                 </View>)}
             </View>

             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Стоимость заказа</Text>
                 <Text style={orderDetails.price}>{order?.total_price} с</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Доставка</Text>
                 <Text style={orderDetails.name}>{order?.delivery_price} с</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>К оплате</Text>
                 <Text style={orderDetails.name}>{order?.total_price + order?.delivery_price} с</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Тип доставки</Text>
                 <Text style={orderDetails.name}>Доставка</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Способо оплаты</Text>
                 <Text style={orderDetails.name}>{order?.payment_method}</Text>
             </View>

            </View>
        </ScrollView>
    )
}

export default OrderDetails
