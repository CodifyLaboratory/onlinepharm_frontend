import React, { useState, useEffect } from 'react'
import {ScrollView, SafeAreaView, Text} from 'react-native'
import { categoriesMedicines } from '../../styles/categoriesMedicines'
import MedicineCard from '../../components/MedicineCard'
import Api from '../../API'
import Loader from '../../components/Loader'

import { useSelector, useDispatch } from 'react-redux'

import {getFavoritesProducts, getAllBasket, getAllMedication} from '../../api'

import {
    loadCart,
    setMedicineFavorite,
} from '../../store/actions'
import {Colors} from "../../constants/colors";

function CategoriesMedicines({ navigation, route }) {
    const category = route.params

    const [medicines, setMedicines] = useState(null)
    const [changed, setChanged] = useState(false)

    const dispatch = useDispatch()

    const state = useSelector((state) => state.data)

    useEffect(() => {
        navigation.setParams({title_category: category.title})
        getAllFavorites().then((r) => r)
        getBasket().then((r) => r)
            getAllMedication().then((res) => setMedicines(res))
    }, [changed, dispatch])

    const getAllFavorites = async () => {
        try {
            const res = await getFavoritesProducts()
            dispatch(setMedicineFavorite(res))
        } catch (e) {
            console.log(e)
        }
    }

    const getBasket = async () => {
        try {
            const res = await getAllBasket()
            dispatch(loadCart(res))
        } catch (e) {
            throw new Error(e)
        }
    }

    const isSelected = (id) => {
        return state.favorites_medicine?.find(
            (item) => item.medication.id === id
        )
    }

    const findBasketProduct = (id) => {
        return state.cart?.find((item) => item.medication.id === id)
    }

    if (!medicines) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: Colors.white }}>
            <SafeAreaView style={categoriesMedicines.container}>
                {medicines
                    .filter((el) => {
                        if (category.id === el.category) {
                            return el
                        }
                    })
                    .map((item) => {
                        const selected = isSelected(item.id)
                        const basketObj = findBasketProduct(item.id)
                        return (
                            <MedicineCard
                                basketObj={basketObj}
                                isSelected={selected}
                                key={item.id}
                                data={item}
                                navigation={navigation}
                                setChanged={(e) => setChanged(e)}
                                changed={changed}
                            />
                        )
                    })}
            </SafeAreaView>
        </ScrollView>
    )
}

export default CategoriesMedicines