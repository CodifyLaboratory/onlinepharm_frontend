import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Stars from 'react-native-stars'
import { Colors } from '../constants/colors'
import CountDecrement from '../assets/cart/counter_d.svg'
import CountIncrement from '../assets/cart/counter_i.svg'

const PopularMedicine = ({ data, navigation }) => {
    const [count, setCount] = useState(0)

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
                    Цена от: <Text style={styles.soms}>{data?.price} c</Text>
                </Text>

                <TouchableOpacity
                    style={styles.detailsBtn}
                    onPress={() => {
                        navigation.navigate('MedicineInfo', data.id)
                    }}
                >
                    <Text style={styles.detailsBtnText}>Подробнее</Text>
                </TouchableOpacity>
                {!count ? (
                    <TouchableOpacity
                        onPress={() => setCount(1)}
                        style={styles.cartBtn}
                    >
                        <Text style={styles.cartBtnText}>В корзину</Text>
                    </TouchableOpacity>
                ) : (
                    <View style={styles.counter_btn_wrap}>
                        <TouchableOpacity>
                            <CountDecrement />
                        </TouchableOpacity>
                        <View>
                            <Text>1 шт</Text>
                        </View>
                        <TouchableOpacity>
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
    },
    price: {
        color: '#999999',
        fontSize: 14,
        marginBottom: 16,
    },
    soms: {
        color: '#1F8BA7',
        fontSize: 14,
        marginLeft: 6,
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
    },
    detailsBtnText: {
        color: '#4BCCED',
        fontSize: 14,
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
    },
})
