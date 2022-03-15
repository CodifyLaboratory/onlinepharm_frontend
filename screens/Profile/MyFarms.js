import React, { useEffect, useState } from 'react'
import FarmsCard from '../../components/FarmsCard'
import { View, ScrollView } from 'react-native'
import { myFarms } from '../../styles/components/myFarms'
import Loader from '../../components/Loader'
import {useSelector} from "react-redux";
import {Colors} from "../../constants/colors";
import EmptyList from "../../components/ListEmpty";

function MyFarms({ navigation }) {
    const { favorites_pharmacy } = useSelector(state => state.data)

    if (!favorites_pharmacy) return <Loader />

    if(!favorites_pharmacy.length) return <EmptyList />

    return (
        <ScrollView style={{ flex: 1, backgroundColor: Colors.background }}>
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
