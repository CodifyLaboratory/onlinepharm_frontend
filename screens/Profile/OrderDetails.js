import React, { useState, useEffect } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'

import MedicineCard from '../../components/MedicineCard'

import Loader from '../../components/Loader'
import { Colors } from '../../constants/colors'
import { getFavoritesProducts, getAllBasket } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { setMedicineFavorite, loadCart } from '../../store/actions'
import OrderCard from '../../components/OrderCard'
import { orderCard } from '../../styles/components/orderCard'
import { orderDetails } from '../../styles/orderDetails'

function OrderDetails({ navigation }) {
    
    const { favorites_medicine, cart } = useSelector((state) => state.data)

    const dispatch = useDispatch()
    const [changed, setChanged] = useState(false)

    // useEffect(() => {
    //     getAllFavorites()
    //     getBasket()
    // }, [changed])

   
    // const isSelected = (id) => {
    //     return favorites_medicine?.find((item) => item.medication.id === id)
    // }


    // if (!favorites_medicine) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                <View style={orderDetails.cardContainer}>
                    <View>
                          <Text style={orderDetails.orderDate}>Заказ создан 30.12.2021 15:40:03</Text>
                    <Text style={orderDetails.status}>Доставлен</Text>
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
                 <View style={orderDetails.productRow}>
                      <Text style={orderDetails.medicineName}>Эритромицин</Text>
                 <View style={{flexDirection: 'row'}}>
                     <Text style={{...orderDetails.pcs, marginRight: 20}}>1 шт</Text>
                     <Text style={orderDetails.price}>205 c</Text>
                 </View>
                 </View>

                 <View style={orderDetails.productRow}>
                      <Text style={orderDetails.medicineName}>Эритромицин</Text>
                 <View style={{flexDirection: 'row'}}>
                     <Text style={{...orderDetails.pcs, marginRight: 20}}>12 шт</Text>
                     <Text style={orderDetails.price}>205 c</Text>
                 </View>
                 </View>
                
             </View>

             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Стоимость заказа</Text>
                 <Text style={orderDetails.price}>1783 с</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Доставка</Text>
                 <Text style={orderDetails.name}>1783 с</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>К оплате</Text>
                 <Text style={orderDetails.name}>1783 с</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Тип доставки</Text>
                 <Text style={orderDetails.name}>Доставка</Text>
             </View>
             <View style={orderDetails.row}>
                 <Text style={orderDetails.name}>Способо оплаты</Text>
                 <Text style={orderDetails.name}>Наличными при получении</Text>
             </View>
             
            </View>
        </ScrollView>
    )
}

export default OrderDetails
