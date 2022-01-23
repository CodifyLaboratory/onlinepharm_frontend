import React, { useEffect, useState } from 'react'
import FarmsCard from '../components/FarmsCard'
import { View, ScrollView, Text } from 'react-native'
import { myFarms } from '../styles/components/myFarms'
import { getFavorites } from '../api'
import Loader from '../components/Loader'
import {useSelector} from "react-redux";

function MyFarms({ navigation }) {
    const { favorites_pharmacy } = useSelector(state => state.data)
    const [data, setData] = useState(null)


    // useEffect(() => {
    //     getMyPharmacy()
    // }, [])
    //
    // const getMyPharmacy = async () => {
    //     try {
    //         const res = await getFavorites()
    //
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    if (!favorites_pharmacy) return <Loader />

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#E6EFF9' }}>
            <View style={myFarms.container}>
                {favorites_pharmacy &&
                favorites_pharmacy.map((item) => (
                        <FarmsCard
                            key={item.id}
                            navigation={navigation}
                            data={item.pharmacy}
                        />
                    ))}
            </View>
        </ScrollView>
    )
}

export default MyFarms
