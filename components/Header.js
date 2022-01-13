import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationActions as navigation } from 'react-navigation'

const HeaderBackButton = ({ title }) => {
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('News')}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}
        >
            <Image
                style={header_button.icon}
                source={require('../assets/header/header_arrow.png')}
            />
            <Text style={header_button.text}>Назад</Text>
        </TouchableOpacity>
    )
}
export default HeaderBackButton

export const header_button = StyleSheet.create({
    text: {
        color: '#999999',
        fontSize: 15,
    },
    icon: {
        marginLeft: 16,
        marginRight: 6,
    },
})
