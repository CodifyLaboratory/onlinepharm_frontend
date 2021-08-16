import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {cart} from "../styles/cart";

const Cart = () => {
    return (
        <View style={cart.container}>
            <Text>Корзина</Text>
        </View>
    );
}

export default Cart;