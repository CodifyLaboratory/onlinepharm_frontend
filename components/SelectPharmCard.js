import React, { useEffect, useState } from 'react'
import { farms } from '../styles/farms'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { createPharmFavorite, deletePharmFavorite, getFavorites } from '../api'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthorization, setPharmacyFavorite } from '../store/actions'
import { strings } from '../localization'
import { selectPharmCard } from '../styles/components/selectPharmCard'
import ArrowTop from '../assets/icons/arrow_top.svg'
import { ordering } from '../styles/ordering'
import { Colors } from '../constants/colors'

const SelectPharmCard = ({ navigation, data, key }) => {
    const dispatch = useDispatch()

    const { basket_medications, store_medications } = data

    const { is_guest, favorites_pharmacy } = useSelector((state) => state.data)

    const [isChecked, setChecked] = useState(null)

    const [showList, setShow] = useState(false)

    useEffect(() => {
        getAllFavorites().then((r) => r)
    }, [isChecked])

    const getAllFavorites = async () => {
        try {
            const res = await getFavorites()
            dispatch(setPharmacyFavorite(res))
            setChecked(isSelected())
        } catch (e) {
            console.log(e)
        }
    }

    const isSelected = () => {
        return favorites_pharmacy.some(
            (item) => item.pharmacy.id === data.location.user
        )
    }

    const findId = favorites_pharmacy.find(
        (item) => item.pharmacy.id === data.location.user
    )

    const handleChange = async () => {
        if (is_guest) dispatch(setAuthorization(false))
        if (isChecked) {
            await deletePharmFavorite(findId.id)
            setChecked(false)
        } else {
            await createPharmFavorite(data.id)
            setChecked(true)
        }
    }

    const sumTotalAll = (basket, store) => {
        const findPosition = (id) =>
            store.find((item) => item.medication.id === id)
        return basket
            //// change price of medication depending on the price in the pharmacy
            ? basket.reduce((sum, { medication, count }) => sum + findPosition(medication.id).price * count, 0)
            : 0
    }

    const countTotal = (arr) => {
        return arr ? arr.reduce((sum, { count }) => count + sum, 0) : 0
    }

    const filteredBasket = () => {
        return basket_medications.filter((item) =>
            store_medications.some(
                (s) => item.medication.id === s.medication.id
            )
        )
    }

    const basket = filteredBasket()

    const reducedBasket = basket.reduce((res, obj) => {
        const {medication, price} = store_medications.find((item) => item.medication.id === obj.medication.id)
        if (medication) {
            res.push({...obj, medication: medication, price: price})
        }
        return res
    }, [])


    const totalPrice = sumTotalAll(basket, store_medications)

    const totalMedications = countTotal(basket)

    return (
        <View style={selectPharmCard.container}>
            <View style={selectPharmCard.content}>
                <View style={selectPharmCard.columnCenter}>
                    <View>
                        <Image
                            style={selectPharmCard.farmImg}
                            source={{ uri: data?.logo }}
                        />
                    </View>

                    <TouchableOpacity
                        onPress={() => setShow(!showList)}
                        style={{
                            transform: [
                                { rotate: !showList ? '180deg' : '0deg' },
                            ],
                            height: 30,
                            width: 30,
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 4,
                        }}
                    >
                        <ArrowTop />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginLeft: 16,
                        justifyContent: 'space-between',
                        paddingBottom: 5,
                    }}
                >
                    <View>
                        <Text style={selectPharmCard.farmName}>
                            {data?.title}
                        </Text>
                        <Text style={selectPharmCard.farmAddress}>
                            {data?.location?.address}
                        </Text>
                    </View>

                    <View style={selectPharmCard.farmLocation}>
                        <Text style={selectPharmCard.stockStatus}>
                            {basket?.length} из {basket_medications?.length}{' '}
                            {strings.cart.in_stock.toLowerCase()}
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}
                >
                    <TouchableOpacity onPress={() => handleChange()}>
                        <Image
                            style={farms.farmImage}
                            source={
                                isSelected()
                                    ? require('./../assets/icons/fullHeart.png')
                                    : require('./../assets/icons/emptyHeart.png')
                            }
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={farms.farmFind}
                        onPress={() =>
                            navigation.push('Ordering', {
                                basket: reducedBasket,
                                id: data?.id,
                            })
                        }
                    >
                        <Text style={farms.farmFindText}>
                            {strings.cart.choose}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {showList && (
                <View style={selectPharmCard.productList}>
                    {basket_medications?.map((item) => {
                        const inStock = store_medications?.find(
                            (med) =>
                                med?.medication?.id === item?.medication?.id
                        )
                        return (
                            <View style={ordering.productRow}>
                                <Text
                                    style={{
                                        ...ordering.listCount,
                                        width: '70%',
                                        color: inStock
                                            ? Colors.gray
                                            : Colors.red,
                                    }}
                                >
                                    {item?.medication?.title}
                                </Text>
                                <View style={ordering.productRowPrice}>
                                    {!inStock ? (
                                        <Text
                                            style={selectPharmCard.notAvailable}
                                        >
                                            Нет в наличии
                                        </Text>
                                    ) : (
                                        <>
                                            <Text style={ordering.listCount}>
                                                {item?.count} {strings.main.pcs}
                                            </Text>
                                            <Text style={ordering.listPrice}>
                                                {inStock?.price} c
                                            </Text>
                                        </>
                                    )}
                                </View>
                            </View>
                        )
                    })}
                    <View style={selectPharmCard.totalRow}>
                        <Text style={selectPharmCard.total}>
                            {strings.cart.total}
                        </Text>
                        <View style={ordering.productRowPrice}>
                            <Text style={ordering.listCount}>
                                {totalMedications} {strings.main.pcs}
                            </Text>
                            <Text style={selectPharmCard.total}>
                                {totalPrice} с
                            </Text>
                        </View>
                    </View>
                </View>
            )}
        </View>
    )
}

export default SelectPharmCard
