import React from "react";
import {View, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity} from "react-native";
import {cart} from "../styles/cart";
import CartItem from "../components/CartItem";

const Cart = ({navigation}) => {
  return (
    <View style={cart.container}>
      <ScrollView>
        <SafeAreaView>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </SafeAreaView>
      </ScrollView>
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
  );
}

export default Cart;