import React, {useEffect, useState} from 'react'
import {ScrollView, View} from 'react-native'

import Loader from '../../components/Loader'
import {Colors} from '../../constants/colors'
import {getOrders} from '../../api'
import OrderCard from '../../components/OrderCard'
import EmptyList from "../../components/ListEmpty";

function MyOrders({ navigation }) {

    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState(null)

    const getMyOrders = async () => {
        setLoading(true)
        try {
            return await getOrders()
        } catch(e) {
           throw new Error(e)
        } finally {
            setLoading(false)
        }
    }


    useEffect(()=>{
        getMyOrders().then(res => setOrders(res))
    }, [])



    if (loading) return <Loader />

    if(!orders?.length) return <EmptyList />

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                {orders?.map(item => <OrderCard status={item?.order_status} data={item} navigation={navigation} />)}
            </View>
        </ScrollView>
    )
}

export default MyOrders
