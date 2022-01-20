import React from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native'
import {strings} from "../localization";

const BrandCard = ({ navigation, data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <View style={styles.imageBox}>
                    <Image style={styles.image} source={{ uri: data?.logo }} />
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.name}>{data?.title}</Text>
                <Text style={styles.count}>
                    {strings.main.pharmacy_count}:{' '}
                    <Text style={styles.number}> {data?.pharmacy_count}</Text>{' '}
                </Text>
                <TouchableOpacity
                    style={styles.see}
                    onPress={() => navigation.navigate('Farms', data.id)}
                >
                    <Text style={styles.seeText}>{strings.main.show_all}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default BrandCard

const styles = StyleSheet.create({
    container: {
        width: 340,
        height: 110,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        padding: 16,
        flexDirection: 'row',
        marginBottom: 16,
    },
    left: {
        marginRight: 22,
        flex: 0.2,
    },
    right: {
        flex: 0.8,
    },
    imageBox: {
        width: 72,
        height: 72,
        borderWidth: 1,
        borderColor: '#F3F3F3',
        borderRadius: 20,
    },
    image: {
        resizeMode: 'contain',
        width: 70,
        height: 70,
    },
    name: {
        fontSize: 15,
        color: '#1F8BA7',
        marginBottom: 6,
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 17
    },
    count: {
        color: '#999999',
        fontSize: 11,
        marginBottom: 20,
        fontFamily: 'Poppins-Regular',
        lineHeight: 16
    },
    number: {
        fontSize: 13,
        color: '#4B4747',
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 15.5
    },
    see: {
        width: '100%',
        alignItems: 'flex-end',
    },
    seeText: {
        color: '#1F8BA7',
        fontSize: 12,
        textDecorationLine: 'underline',
        paddingBottom: 2,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 14
    },
})
