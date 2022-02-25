import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'

import MedicineCard from '../../components/MedicineCard'

import Loader from '../../components/Loader'
import { Colors } from '../../constants/colors'
import { getFavoritesProducts, getAllBasket } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { setMedicineFavorite, loadCart } from '../../store/actions'
import OrderCard from '../../components/OrderCard'

function MyOrders({ navigation }) {
    
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
                
                       <OrderCard navigation={navigation} />
             
            </View>
        </ScrollView>
    )
}

export default MyOrders
