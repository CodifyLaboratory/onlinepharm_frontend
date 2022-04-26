import React, { useState, useEffect, useMemo } from 'react'
import { Text, StyleSheet, ScrollView } from 'react-native'
import { getBannerById, getAllBasket, getFavoritesProducts } from '../../api'
import MedicineCard from '../../components/MedicineCard'
import { strings } from '../../localization'
import { useSelector, useDispatch } from 'react-redux'
import { loadCart, setMedicineFavorite } from '../../store/actions'
import Loader from '../../components/Loader'

var replacedStr = /-/gi

const MyComponent = ({ route, navigation }) => {
    const { favorites_medicine, cart } = useSelector((state) => state.data)

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [bannerData, setBannerData] = useState({})
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        setLoading(true)
        getBannerById(route.params)
            .then((res) => setBannerData(res))
            .catch((e) => console.log(e))
            .finally(() => setLoading(false))
    }, [])

    useEffect(() => {
        getAllFavorites()
        getBasket()
    }, [changed])

    const isSelected = (id) => {
        return favorites_medicine?.find((item) => item.medication.id === id)
    }

    const findBasketProduct = (id) => {
        return cart?.find((item) => item.medication.id === id)
    }

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

    if (loading) return <Loader />

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>{bannerData?.title}</Text>
            <Text style={styles.date}>
                {strings.main.from}{' '}
                {bannerData?.start_date?.replace(replacedStr, '.')}{' '}
                {strings.main.to}{' '}
                {bannerData?.end_date?.replace(replacedStr, '.')}
            </Text>
            <Text style={styles.description}>{bannerData?.description}</Text>

            {bannerData?.medications?.map((item) => {
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
        </ScrollView>
    )
}

export default MyComponent

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 20,
        color: '#1F8BA7',
        marginBottom: 24,
        fontFamily: 'Poppins-Regular',
        lineHeight: 30,
    },
    date: {
        color: '#999999',
        fontSize: 14,
        marginBottom: 16,
        fontFamily: 'Poppins-Regular',
        lineHeight: 21,
    },
    description: {
        color: '#4B4747',
        fontSize: 16,
        marginBottom: 24,
        fontFamily: 'Poppins-Regular',
        lineHeight: 24,
    },
})
