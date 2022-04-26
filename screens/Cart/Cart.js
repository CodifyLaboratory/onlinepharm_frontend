import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { cartStyle } from '../../styles/cart'
import MedicineCard from '../../components/MedicineCard'
import NoCart from '../../assets/noCart.svg'
import Trash from '../../assets/icons/trash.svg'
import Truck from '../../assets/cart/Delivery&Order.svg'

import ClearCart from '../../components/modals/ClearCart'
import { deleteAllBasket, getAllBasket, getFavoritesProducts } from '../../api'
import { loadCart, setAuthorization } from '../../store/actions'
import { useDispatch, useSelector } from 'react-redux'
import { strings } from '../../localization'
import { Colors } from '../../constants/colors'

const Cart = ({ navigation }) => {
    const [favorites, setFavorites] = useState(null)
    const [visibleModal, setVisible] = useState(false)
    const [changed, setChanged] = useState(false)

    const dispatch = useDispatch()

    const { cart = [], is_guest } = useSelector((state) => state.data)

    const sumTotal = (arr) =>
        arr
            ? arr.reduce(
                  (sum, { medication, count }) =>
                      sum + medication.price * count,
                  0
              )
            : 0

    const total = sumTotal(cart)

    useEffect(() => {
        is_guest && dispatch(setAuthorization(false))
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

    const _clear = async () => {
        try {
            await deleteAllBasket()
        } catch (e) {
            throw new Error(e)
        } finally {
            setVisible(false)
            setChanged(!changed)
        }
    }

    const getAllFavorites = async () => {
        try {
            const res = await getFavoritesProducts()
            setFavorites(res)
        } catch (e) {
            console.log(e)
        }
    }

    const isSelected = (id) => {
        return favorites?.find((item) => item.medication.id === id)
    }

    const findBasketProduct = (id) => {
        return cart?.find((item) => item.medication.id === id)
    }

    return (
        <View style={{ ...cartStyle.container }}>
            <ScrollView style={{ backgroundColor: Colors.white }}>
                <SafeAreaView style={cartStyle.productList}>
                    {cart.length ? (
                        <TouchableOpacity
                            style={cartStyle.clearBtn}
                            onPress={() => setVisible(true)}
                        >
                            <Trash />
                            <Text style={cartStyle.clearBtnText}>
                                {strings.cart.clear_basket}
                            </Text>
                        </TouchableOpacity>
                    ) : null}
                    {cart.length ? (
                        cart
                            .sort((a, b) => a.id - b.id)
                            .map((item) => {
                                const selected = isSelected(item?.medication.id)
                                const basketObj = findBasketProduct(
                                    item?.medication.id
                                )
                                return (
                                    <MedicineCard
                                        basketObj={basketObj}
                                        isSelected={selected}
                                        key={item.medication.id}
                                        data={item?.medication}
                                        navigation={navigation}
                                        setChanged={(e) => setChanged(e)}
                                        changed={changed}
                                        type={'cart'}
                                    />
                                )
                            })
                    ) : (
                        <View style={cartStyle.emptyCart}>
                            <Text style={cartStyle.emptyCartText}>
                                {strings.cart.empty_basket}
                            </Text>
                            <NoCart />
                        </View>
                    )}
                </SafeAreaView>
            </ScrollView>
            <View style={cartStyle.bottomButton}>
                {cart.length ? (
                    <View style={cartStyle.total}>
                        <Text style={cartStyle.total_text}>
                            {strings.cart.total}
                        </Text>
                        <Text style={cartStyle.total_text}>
                            {strings.main.from} {total} с
                        </Text>
                    </View>
                ) : null}

                {!cart.length ? (
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Main')
                            }}
                            style={{ ...cartStyle.btn }}
                            activeOpacity={0.8}
                        >
                            <Text style={cartStyle.btnText}>
                                {strings.cart.to_main}
                            </Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            paddingBottom: 24,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}
                        >
                            <Truck />
                            <Text style={cartStyle.orderDelivery}>
                                {strings.cart.to_order}
                            </Text>
                        </View>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.push('SelectPharmacy')
                            }}
                            style={{ ...cartStyle.btn, width: '70%' }}
                            activeOpacity={0.8}
                        >
                            <Text style={cartStyle.btnText}>
                                {cart.length
                                    ? strings.cart.checkout
                                    : strings.cart.to_main}
                            </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>

            <ClearCart
                visible={visibleModal}
                setVisible={(e) => setVisible(e)}
                handleChange={_clear}
            />
        </View>
    )
}

export default Cart
