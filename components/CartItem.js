import React from 'react';
import {View, Text, Image, TouchableOpacity} from "react-native";

import Minus from '../assets/cart/minus.svg'
import Plus from '../assets/cart/plus.svg'

import {cartItem} from "../styles/components/cartItem";

function CartItem(props) {
  return (

      <View style={cartItem.card}>
        <View style={cartItem.left}>
        <View style={cartItem.img}>
          <Image style={{width: 50, height: 36}} source={require('../assets/cart/logo.png')}/>
        </View>
        <View style={cartItem.descBox}>
          <Text style={cartItem.title}>Тримол</Text>
          <Text style={cartItem.desc}>Антибиотики</Text>
        </View>
    </View>
        <View style={cartItem.right}>
          <View style={cartItem.counter}>
            <TouchableOpacity style={cartItem.counterBtn} activeOpacity={0.5}>
              <Minus/>
            </TouchableOpacity>
            <Text style={cartItem.counterText}>2</Text>
            <TouchableOpacity style={cartItem.counterBtn} activeOpacity={0.5}>
              <Plus/>
            </TouchableOpacity>
          </View>
          <Text style={cartItem.priceText}>Стоимость:</Text>
          <Text style={cartItem.price}>от 335 с</Text>
        </View>
    </View>
  );
}

export default CartItem;