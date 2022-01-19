import React, {useState, useEffect} from 'react'
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import {cart} from '../styles/cart'
import MedicineCard from '../components/MedicineCard'
import NoCart from './../assets/noCart.svg'
import Trash from './../assets/icons/trash.svg'

import ClearCart from "../components/modals/ClearCart";
import {deleteAllBasket, getAllBasket, getFavoritesProducts} from "../api";
import {loadCart} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";

const Cart = ({navigation}) => {

    const [favorites, setFavorites] = useState(null)
    const [visibleModal, setVisible] = useState(false)
    const [changed, setChanged] = useState(false)

    const dispatch = useDispatch()

    const cartItems = useSelector(state => state.data.cart)

    const sumTotal = arr =>
        arr.reduce((sum, { all_price, count }) => sum + all_price * count, 0)

    const total = sumTotal(cartItems)

    useEffect(() => {
        getAllFavorites()
        getBasket()
    }, [changed])

    const getBasket = async () => {
        try {
            const res = await getAllBasket()
            await dispatch(loadCart(res))
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
        return favorites?.find(item => (item.medication.id === id))
    }

    const findBasketProduct = (id) => {
        return cartItems?.find(item => item.medication.id === id)
    }

    return (
        <View style={cart.container}>
            <ScrollView>
                <SafeAreaView style={cart.productList}>
                    {cartItems.length ? (
                        <TouchableOpacity
                            style={cart.clearBtn}
                            onPress={() => setVisible(true)}
                        >
                            <Trash/>
                            <Text style={cart.clearBtnText}>Очистить корзину</Text>
                        </TouchableOpacity>
                    ) : null}
                    {cartItems.length ? (
                        cartItems.map((item) => {
                            const selected = isSelected(item?.medication.id)
                            const basketObj = findBasketProduct(item?.medication.id)
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
                        <View style={cart.emptyCart}>
                            <Text style={cart.emptyCartText}>
                                Корзина пуста
                            </Text>
                            <NoCart/>
                        </View>
                    )}
                </SafeAreaView>
            </ScrollView>
        <View style={cart.bottomButton}>
            {cartItems.length
                ? <View style={cart.total}><Text>Итого</Text><Text>от {total} с</Text></View>
                : null }
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(cartItems.length ? 'Ordering' : 'Main')
                }}
                style={cart.btn}
                activeOpacity={0.8}
            >
                <Text style={cart.btnText}>{cartItems.length ? 'Оформить заказ' : 'На главную'}</Text>
            </TouchableOpacity>
        </View>

            <ClearCart visible={visibleModal} setVisible={(e) => setVisible(e)} handleChange={_clear}/>
        </View>
    )
}

export default Cart
