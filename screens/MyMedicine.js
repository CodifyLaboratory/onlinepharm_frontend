import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'
import Api from './../API/index'
import MedicineCard from '../components/MedicineCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from "../components/Loader";
import {Colors} from "../constants/colors";
import {
    addToBasket,
    createProductFavorite,
    deleteProductFavorite,
    getAllBasket,
    getFavoritesProducts
} from "../api";

function MyMedicine({navigation}) {

    const [myMedicine, setMyMedicine] = useState(null)
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        getAllFavorites()
     }, [changed])

    const getAllFavorites = async () => {
        try {
            const res = await getFavoritesProducts()
            setMyMedicine(res)
        } catch (e) {
            console.log(e)
        }
    }

    // const isSelected = (id) => {
    //     return myMedicine?.find(item => (item.id === id))
    // }

    if(!myMedicine) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                {myMedicine?.map((item) => {
                        // const selected = isSelected(item.id)
                        return (
                            <MedicineCard 
                            isSelected={item} 
                            key={item.id} 
                            data={item.medication} 
                            navigation={navigation} 
                            setChanged={(e)=>setChanged(e)}
                            changed={changed}
                            />
                        )
                    } )}
            </View>
        </ScrollView>
    )
}

export default MyMedicine
