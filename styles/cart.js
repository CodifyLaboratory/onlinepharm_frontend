import {StyleSheet, Platform} from 'react-native'
import {Colors} from "../constants/colors";

export const cartStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // paddingTop: Platform.OS == 'android' ? 0 : 0,
        // paddingLeft: 16,
        // paddingRight: 16,
        paddingBottom: 90,
    },
    productList: {
        paddingBottom: 50,
        // paddingLeft: 16,
        // paddingRight: 16,
        paddingHorizontal: 16,
        flex: 1,
    },
    orderDelivery: {
        fontSize: 12,
        lineHeight: 14,
        color: Colors.gray,
        fontFamily: 'SF-Pro-Medium',
        marginLeft: 6
    },

    total: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 34,
    },
    total_text: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Medium',
        fontStyle: 'normal',
        lineHeight: 18
    },
    bottomButton: {
        position: "absolute",
        width: '100%',
        bottom: 0,
        // paddingLeft: 16,
        // paddingRight: 16,
        backgroundColor: Colors.white,
        alignSelf: 'center',
        paddingTop: 10,
        paddingHorizontal: 16
    },
    btn: {
        backgroundColor: '#4BCCED',
        borderRadius: 27,
        alignItems: 'center',
        paddingVertical: 14,
        marginBottom: 10,
        width: '100%',
    },
    btnText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
        fontStyle: 'normal',
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 20
    },
    emptyCart: {
        marginTop: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyCartText: {
        color: '#4B4747',
        fontSize: 20,
        marginBottom: 70,
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 24
    },
    clearBtn: {
        height: 23,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 33,
        marginTop: 20
    },
    clearBtnText: {
        color: '#4B4747',
        fontSize: 14,
        marginLeft: 9,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 17
    },
    result: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
})
