import React, { useEffect, useState } from 'react'
import FarmsCard from '../components/FarmsCard'
import { View, ScrollView, Text } from 'react-native'
import { myFarms } from '../styles/components/myFarms'
import { getFavorites } from '../api'
import Loader from '../components/Loader'

function MyFarms({ navigation }) {
    const [data, setData] = useState(null)

    useEffect(() => {
        getMyPharmacy()
    }, [])

    const getMyPharmacy = async () => {
        try {
            const res = await getFavorites()
            setData(res)
            console.log('RES', res)
        } catch (e) {
            console.log(e)
        }
    }

    if (!data) return <Loader />

    return (
        <ScrollView style={{ flex: 1, backgroundColor: '#E6EFF9' }}>
            <View style={myFarms.container}>
                {data &&
                    data.map((item) => (
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
