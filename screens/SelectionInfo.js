import React, { useState, useEffect, useMemo } from 'react'
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'
import Api from './../API/index'
import MedicineCard from './../components/MedicineCard'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import { setFavorite, setMedicineFavorite, loadCart } from '../store/actions'
import { getAllBasket } from '../api'

const MyComponent = ({ navigation, route }) => {
    const [selectionData, setSelectionData] = useState(null)
    const [changed, setChanged] = useState(false)

    let id = route.params

    const [userData, setUserData] = useState()

    const { cart, favorites_medicine } = useSelector((state) => state.data)

    const dispatch = useDispatch()

    const loadData = async () => {
        try {
            let data = await AsyncStorage.getItem('userData')
            if (data !== null) {
                setUserData(JSON.parse(data))
            }
        } catch (err) {
            console.log(err)
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

    useEffect(() => {
        getBasket()
        loadData()
        Api.getData(`selections/${id}`)
            .then((res) => setSelectionData(res.data))
            .catch((e) => console.log(e))

        Api.getData(`favorite-medications/`, userData?.access)
            .then((res) => dispatch(setMedicineFavorite(res.data)))
            .catch((e) => console.log(e.data))
    }, [changed, dispatch])

    const isSelected = (id) => {
        return favorites_medicine?.find((item) => item.medication.id === id)
    }

    const findBasketProduct = (id) => {
        return cart?.find((item) => item.medication.id === id)
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
                            setChanged={(e) => setChanged(e)}
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
