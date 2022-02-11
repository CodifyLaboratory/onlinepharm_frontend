import React, { useState, useEffect } from 'react'
import { View, ScrollView } from 'react-native'

import MedicineCard from '../components/MedicineCard'

import Loader from '../components/Loader'
import { Colors } from '../constants/colors'
import { getFavoritesProducts, getAllBasket } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { setMedicineFavorite, loadCart } from '../store/actions'

function MyMedicine({ navigation }) {
    const { favorites_medicine, cart } = useSelector((state) => state.data)

    const dispatch = useDispatch()
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        getAllFavorites()
        getBasket()
    }, [changed])

    const getBasket = async () => {
        try {
            const res = await getAllBasket()
            dispatch(loadCart(res))
        } catch (e) {
            throw new Error(e)
        }
    }

    const getAllFavorites = async () => {
        try {
            const res = await getFavoritesProducts()
            dispatch(setMedicineFavorite(res))
        } catch (e) {
            console.log(e)
        }
    }

    const isSelected = (id) => {
        return favorites_medicine?.find((item) => item.medication.id === id)
    }

    const findBasketProduct = (id) => {
        return cart?.find((item) => item.medication.id === id)
    }

    if (!favorites_medicine) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={{ paddingHorizontal: 16, marginTop: 25 }}>
                {favorites_medicine?.map((item) => {
                    const selected = isSelected(item.medication.id)
                    const basketObj = findBasketProduct(item.medication.id)
                    return (
                        <MedicineCard
                            basketObj={basketObj}
                            isSelected={selected}
                            key={item.id}
                            data={item.medication}
                            navigation={navigation}
                            setChanged={(e) => setChanged(e)}
                            changed={changed}
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default MyMedicine
