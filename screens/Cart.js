import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Cart = () => {
    return (
        <View style={styles.container}>
            <Text>Корзина</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Cart;