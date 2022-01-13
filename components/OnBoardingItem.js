import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    useWindowDimensions,
    TouchableOpacity,
} from 'react-native'

const OnBoardingItem = ({ item, index }) => {
    const { width } = useWindowDimensions()

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={styles.image} />
            <View>
                <Text style={index === 3 ? styles.lastTitle : styles.title}>
                    {item.title}
                </Text>
            </View>
        </View>
    )
}

export default OnBoardingItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        flex: 0.7,
        justifyContent: 'center',
        marginBottom: 100,
        width: 264,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 18,
        textAlign: 'center',
        color: '#4B4747',
        marginBottom: -30,
        width: 340,
    },
    lastTitle: {
        fontSize: 18,
        textAlign: 'center',
        color: '#4B4747',
        marginBottom: -30,
        width: 243,
    },
    btn: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 23,
        backgroundColor: '#1F8BA7',
    },
})
