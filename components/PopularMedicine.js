import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Stars from 'react-native-stars'
import { Colors } from '../constants/colors'
import CountDecrement from '../assets/cart/counter_d.svg'
import CountIncrement from '../assets/cart/counter_i.svg'
import {addToBasket, deleteFromBasket, updateBasket} from "../api";
import {setAuthorization} from "../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {strings} from "../localization";

const PopularMedicine = ({ data, navigation, basketObj, setChanged, changed }) => {

    const dispatch = useDispatch()

    const { is_guest } = useSelector(state => state.data)


    async function _increment() {
        await updateBasket(basketObj.id, basketObj.count + 1)
        setChanged(!changed)
    }

    async function _decrement() {
        await updateBasket(basketObj.id, basketObj.count - 1)
        setChanged(!changed)
    }

    async function _create() {
        if(is_guest) dispatch(setAuthorization(false))
        await addToBasket(data.id, 1)
        setChanged(!changed)
    }
    async function _delete() {
        await deleteFromBasket(basketObj.id)
        setChanged(!changed)
    }

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image style={styles.image} source={{ uri: data?.image }} />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.title}>{data?.title}</Text>
                <View
                    style={{
                        alignItems: 'flex-start',
                        marginLeft: -5,
                        marginBottom: 8,
                    }}
                >
                    <Stars
                        display={data?.middle_star}
                        spacing={8}
                        count={5}
                        starSize={15}
                        fullStar={require('./../assets/icons/fullStar.png')}
                        emptyStar={require('./../assets/icons/emptyStar.png')}
                    />
                </View>
                <Text style={styles.price}>
                    {strings.cart.price}: <Text style={styles.soms}>{data?.price} c</Text>
                </Text>

                <TouchableOpacity
                    style={styles.detailsBtn}
                    onPress={() => {
                        navigation.navigate('MedicineInfo', {medId: data.id})
                    }}
                >
                    <Text style={styles.detailsBtnText}>{strings.main.more}</Text>
                </TouchableOpacity>
                {!basketObj ? (
                    <TouchableOpacity

                        onPress={_create}
                        style={styles.cartBtn}
                    >
                        <Text style={styles.cartBtnText}>{strings.main.add_to_cart}</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.counter_btn_wrap}>
                        <TouchableOpacity onPress={basketObj.count === 1 ? _delete : _decrement}>
                            <CountDecrement />
                        </TouchableOpacity>
                        <View>
                            <Text>{basketObj.count} {strings.main.pcs}</Text>
                        </View>
                        <TouchableOpacity onPress={_increment}>
                            <CountIncrement />
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </View>
    )
}

export default PopularMedicine

const styles = StyleSheet.create({
    counter_btn_wrap: {
        width: 140,
        height: 27,
        backgroundColor: Colors.background,
        borderRadius: 14,
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },
    counter_btn: {
        width: 27,
        height: 27,
        backgroundColor: Colors.light,
        borderRadius: 27,
    },
    container: {
        width: 167,
        height: 280,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 9,
        display: 'flex',
        alignItems: 'center',
    },
    top: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    bottom: {
        flex: 0.6,
        padding: 8,
    },
    title: {
        fontSize: 14,
        color: '#4B4747',
        marginBottom: 10,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 21
    },
    price: {
        color: '#999999',
        fontSize: 14,
        marginBottom: 16,
        fontFamily: 'SF-Pro-Light',
        lineHeight: 16
    },
    soms: {
        color: '#1F8BA7',
        fontSize: 14,
        marginLeft: 6,
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 16
    },
    detailsBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 140,
        borderWidth: 1,
        borderColor: '#4BCCED',
        borderRadius: 8,
        marginBottom: 8,
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 16
    },
    detailsBtnText: {
        color: '#4BCCED',
        fontSize: 14,
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 16
    },
    cartBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        width: 140,
        borderRadius: 8,
        backgroundColor: '#4BCCED',
    },
    cartBtnText: {
        color: '#ffffff',
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 16
    },
})
