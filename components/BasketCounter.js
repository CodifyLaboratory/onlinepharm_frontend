import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { cartItem } from '../styles/components/cartItem'
import CountDecrement from '../assets/cart/counter_d.svg'
import { strings } from '../localization'
import CountIncrement from '../assets/cart/counter_i.svg'
import { myMedicine } from '../styles/components/myMedicine'
import { Colors } from '../constants/colors'

const BasketCounter = ({
    basketObj,
    _decrement,
    _create,
    _increment,
    setVisible,
    data,
    customStyle
}) => {
    return basketObj?.count ? (
        <View style={{...cartItem.counter, ...customStyle}}>
            <TouchableOpacity
                style={cartItem.btn}
                onPress={() =>
                    basketObj.count <= 1 ? setVisible(true) : _decrement()
                }
                activeOpacity={0.7}
            >
                <CountDecrement />
            </TouchableOpacity>

            <Text style={cartItem.counterText}>
                {basketObj?.count} {strings.main.pcs}
            </Text>

            <TouchableOpacity
                style={cartItem.btn}
                onPress={_increment}
                activeOpacity={0.7}
            >
                <CountIncrement />
            </TouchableOpacity>
        </View>
    ) : (
        <TouchableOpacity
            activeOpacity={0.6}
            style={{
                ...myMedicine.favorite,
                ...customStyle,
                backgroundColor: !data?.available
                    ? Colors.gray_secondary
                    : Colors.light,
            }}
            onPress={_create}
            disabled={!data?.available}
        >
            <Text style={myMedicine.favoriteText}>
                {data?.available
                    ? strings.main.add_to_cart
                    : strings.product.out_of_stock}
            </Text>
        </TouchableOpacity>
    )
}

export default BasketCounter
