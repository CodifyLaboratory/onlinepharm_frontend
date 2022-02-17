import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../constants/colors'

export const ordering = StyleSheet.create({
    container: {
        padding: 16,
    },
    productRow: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    productListTitle: {
       fontSize: 17,
       fontFamily: 'SF-Pro-Medium',
       marginBottom: 20,
        marginTop: 40
    },
    radioText: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 18,
        marginLeft: 7
    },
    paymentCardWrap: {
      display: 'flex',
      width: '100%',
      height: 56,
      flexDirection: 'row',
      backgroundColor: Colors.background,
        alignItems: 'flex-start',
        paddingLeft: 8,
        borderRadius: 8,
        paddingTop: 4,
        marginBottom: 12
    },
    paymentIcon: {
        backgroundColor: Colors.white,
        width: 50,
        height: 48,
        borderRadius: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 8,
    },
    listPrice: {
        fontSize: 15,
        lineHeight: 18,
        fontFamily: 'SF-Pro-Medium'
    },
    cardName: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'SF-Pro-Regular',
        color: Colors.gray
    },
    cardNumber: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'SF-Pro-Regular',
        color: Colors.gray_medium,
        marginTop: 4
    },
    listCount: {
        fontSize: 15,
        lineHeight: 18,
        fontFamily: 'SF-Pro-Regular',
    },
    productList: {
        paddingLeft: 16,
        paddingBottom: 24
    },
    productRowPrice: {
        display: 'flex',
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between'
    },
    box: {
        width: '100%',
        backgroundColor: '#E6EFF9',
        padding: 8,
        borderRadius: 10,
    },
    boxText: {
        fontSize: 15,
        color: '#1F8BA7',
        fontWeight: '500',
    },
    boxBtn: {
        fontSize: 13,
        color: '#4BCCED',
        marginTop: 8,
    },
    title: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1A1717',
        marginBottom: 16,
        // marginTop: 24,
    },
    label: {
        color: '#999999',
        fontSize: 13,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        marginBottom: 16,
    },
    boxes: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    radioBtns: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    radioBtn: {
        marginRight: 5,
        marginLeft: 5,


    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
    },
    mapSelectBtn: {
        width: '100%',
        height: 40,
        backgroundColor: Colors.light,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    mapSelectBtnText: {
        color: Colors.white,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'SF-Pro-Regular'
    }
})
