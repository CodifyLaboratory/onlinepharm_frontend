import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Profile( {navigation} ) {
    const goBack = () => {
        navigation.goBack()
    }
    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <Button title="go back" onPress={goBack} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 40
    }
})
