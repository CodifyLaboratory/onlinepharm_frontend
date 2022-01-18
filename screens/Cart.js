import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import { cart } from '../styles/cart'
import MedicineCard from '../components/MedicineCard'
import NoCart from './../assets/noCart.svg'
import Trash from './../assets/icons/trash.svg'
import Api from '../API'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Cart = ({navigation}) => {

    const [cartItems, setCartItems] = useState([])
    const [userData, setUserData] = useState(null)

    const loadData = async () => {
        try {
            let data = await AsyncStorage.getItem('userData')
            if (data !== null) {
                setUserData(JSON.parse(data))
            } else {
                /// hot fix
               navigation.navigate('Profile')
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadData()
        Api.getData('basket-medications/', userData?.access)
            .then((res) => setCartItems(res.data))
            .catch((e) => console.log(e))
    }, [userData?.access])

    return (
        <View style={cart.container}>
            {cartItems.length ? (
                <TouchableOpacity
                    style={cart.clearBtn}
                    onPress={() => setCartItems([])}
                >
                    <Trash />
                    <Text style={cart.clearBtnText}>Очистить корзину</Text>
                </TouchableOpacity>
            ) : null}
            <ScrollView>
                <SafeAreaView>
                    {cartItems.length ? (
                        cartItems.map((item) => (
                            <MedicineCard
                                navigation={navigation}
                                key={item.id}
                                data={item.medication}
                                type="inBusket"
                            />
                        ))
                    ) : (
                        <View style={cart.emptyCart}>
                            <Text style={cart.emptyCartText}>
                                Корзина пуста
                            </Text>
                            <NoCart />
                        </View>
                    )}
                </SafeAreaView>
            </ScrollView>

            {cartItems.length ? (
                <View style={cart.result}>
                    <Text>Итого</Text>
                    <Text>от 1 с</Text>
                </View>
            ) : null}

            <TouchableOpacity
                onPress={() => {
                    navigation.push('Ordering')
                }}
                style={cart.btn}
                activeOpacity={0.8}
            >
                <Text style={cart.btnText}>Оформить заказ</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Cart
