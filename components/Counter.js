import React from 'react'
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";

import DecrementIconXL from '../assets/cart/counter_d_xl.svg'
import IncrementIconXL from '../assets/cart/counter_i_xl.svg'

import {Colors} from "../constants/colors"
import {strings} from "../localization";

const Counter = ({data, increment, decrement}) => {
    return (
        <View style={styles.wrapper}>
            <TouchableOpacity disabled={data.count < 2} onPress={decrement} style={{opacity: data.count < 2 ? .4 : 1}}>
                <DecrementIconXL/>
            </TouchableOpacity>
            <Text style={styles.text}>{strings.main.in_cart} {data.count} {strings.main.pcs}</Text>
            <TouchableOpacity onPress={increment}>
                <IncrementIconXL/>
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
        wrapper: {
            display: "flex",
            width: '100%',
            height: 46,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: Colors.background,
            borderRadius: 30,
            marginTop: 10,
            marginBottom: 10,
        },
        text: {
            fontSize: 16,
            fontWeight: "normal",
            color: Colors.gray,
            fontFamily: 'SF-Pro-Regular',
            lineHeight: 20
        }
    }
)
