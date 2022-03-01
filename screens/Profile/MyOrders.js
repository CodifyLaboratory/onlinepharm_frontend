import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'

import MedicineCard from '../../components/MedicineCard'

import Loader from '../../components/Loader'
import { Colors } from '../../constants/colors'
import { getFavoritesProducts, getAllBasket, getOrders } from '../../api'
import { useDispatch, useSelector } from 'react-redux'
import { setMedicineFavorite, loadCart } from '../../store/actions'
import OrderCard from '../../components/OrderCard'

function MyOrders({ navigation }) {

    const { favorites_medicine, cart } = useSelector((state) => state.data)

    const dispatch = useDispatch()
    const [changed, setChanged] = useState(false)
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState(null)

    const getMyOrders = async () => {
        setLoading(true)
        try {
           const res = await getOrders()
           return res
        } catch(e) {
           throw new Error(e)
        } finally {
            setLoading(false)
        }
    }


    useEffect(()=>{
        getMyOrders().then(res => setOrders(res))
    }, [])


    // const isSelected = (id) => {
    //     return favorites_medicine?.find((item) => item.medication.id === id)
    // }



    if (loading) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                {orders?.map(item => <OrderCard status={item?.order_status} data={item} navigation={navigation} />)}



            </View>
        </ScrollView>
    )
}

export default MyOrders
