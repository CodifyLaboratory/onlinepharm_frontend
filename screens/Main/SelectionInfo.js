import React, { useState, useEffect, useMemo } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

import MedicineCard from '../../components/MedicineCard'

import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import { setMedicineFavorite, loadCart } from '../../store/actions'
import {getAllBasket, getFavoritesProducts, getSelectionsById} from '../../api'

const MyComponent = ({ navigation, route }) => {
    const [selectionData, setSelectionData] = useState(null)
    const [changed, setChanged] = useState(false)

    let id = route.params

    const { cart, favorites_medicine } = useSelector((state) => state.data)

    const dispatch = useDispatch()

    useEffect(() => {
        getAllBasket().then((r)=>dispatch(loadCart(r)))
        getSelectionsById(id).then((r) => setSelectionData(r))
        getFavoritesProducts().then((r)=>dispatch(setMedicineFavorite(r)))
    }, [changed, dispatch])

    const isSelected = (id) => {
        return favorites_medicine?.find((item) => item.medication.id === id)
    }

    const findBasketProduct = (id) => {
        return cart?.find((item) => item?.medication?.id === id)
    }

    if (!selectionData) return <Loader />

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{selectionData?.title}</Text>
            <View style={styles.box}>
                {selectionData?.medications?.map((item) => {
                    const selected = isSelected(item?.id)
                    const basketObj = findBasketProduct(item?.id)
                    return (
                        <MedicineCard
                            basketObj={basketObj}
                            isSelected={selected}
                            key={item.id}
                            data={item}
                            navigation={navigation}
                            setChanged={setChanged}
                            changed={changed}
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default MyComponent

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        color: '#1F8BA7',
        fontSize: 20,
        marginTop: 16,
        marginBottom: 24,
    },
})
