import React, { useState } from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { cart } from '../styles/cart';
import CartItem from '../components/CartItem';
import NoCart from './../assets/noCart.svg'
import Trash from './../assets/icons/trash.svg'

const Cart = ({ navigation }) => {

  const [ cartItems, setCartItems ] = useState([
    {
      id: 1,
      name: 'Aktan'
    },
    {
      id: 2,
      name: 'Nigora'
    },
    {
      id: 3,
      name: 'Bakir'
    },
    {
      id: 4,
      name: 'Bakir'
    },
    {
      id: 5,
      name: 'Bakir'
    }
  ]);

  return (
    <View style={cart.container}>
      {
        cartItems.length ?
          <TouchableOpacity style={cart.clearBtn} onPress={() => setCartItems([])}>
            <Trash />
            <Text style={cart.clearBtnText}>Очистить корзину</Text>
          </TouchableOpacity>
          : null
      }
      <ScrollView>
        <SafeAreaView>

          {
            cartItems.length ?
            cartItems.map((item) => (
            <CartItem key={item.id} data={item} />
            ))
              :
              <View style={cart.emptyCart}>
                <Text style={cart.emptyCartText}>Корзина пуста</Text>
                <NoCart />
              </View>
          }
        </SafeAreaView>
      </ScrollView>

      {
        cartItems.length ?
          <View style={cart.result}>
            <Text>Итого</Text>
            <Text>от 1330 с</Text>
          </View>
          : null
      }

      <TouchableOpacity
        onPress={() => {
          navigation.push('Ordering');
        }}
        style={cart.btn}
        activeOpacity={0.8}
      >
        <Text style={cart.btnText}>Оформить заказ</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;