import React from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'

export default function Main({navigation}) {
    const goToProfile = ()=> {
        navigation.navigate('Profile')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>главная</Text>
            <Button onPress={goToProfile} title="go to profile" />
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "red"
    },
    container: {
        flex: 1,
        alignItems: "center",
        padding: 40
    },
    btn: {
        backgroundColor: 'red',
        padding: 10
    }
})
