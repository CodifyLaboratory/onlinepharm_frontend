import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import {Colors} from "../constants/colors";
import {strings} from "../localization";

var replacedStr = /-/gi

function BannerCard({ data, navigation }) {

    const { image, title, start_date, end_date, id } = data.item

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.date}>
                    {strings.main.from} {start_date?.replace(replacedStr, '.')} {strings.main.to}{' '}
                    {end_date?.replace(replacedStr, '.')}
                </Text>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={() => navigation.navigate('BannerInfo', id)}
                >
                    <Text style={styles.btnTitle}>{strings.main.more}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.right}>
                <Image source={{ uri: image }} style={styles.image} />
            </View>
        </View>
    )
}

export default BannerCard

const styles = StyleSheet.create({
    container: {
        width: 343,
        height: 150,
        flexDirection: 'row',
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 1,
        // },
        // shadowOpacity: 0.22,
        // shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 20,
        marginRight: 16,
        marginTop: 2,
        marginBottom: 2,
        marginLeft: 16,
    },
    left: {
        backgroundColor: '#1D578C',
        flex: 1.1,
        padding: 16,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
    },
    title: {
        fontSize: 14,
        color: Colors.white,
        lineHeight: 21,
        marginBottom: 16,
        height: 42,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
    },
    date: {
        fontSize: 11,
        color: Colors.gray_light,
        marginBottom: 16,
        fontFamily: 'Poppins-Regular'
    },
    btn: {
        backgroundColor: '#4BCCED',
        borderRadius: 8,
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '20%',
        paddingTop: 2,
        height: 25
    },
    btnTitle: {
        color: '#ffffff',
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
        fontSize: 11
    },
    right: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        flex: 0.8,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
    image: {
        maxWidth: 124,
        width: '100%',
        height: 76,
        resizeMode: 'contain',
    },
})
