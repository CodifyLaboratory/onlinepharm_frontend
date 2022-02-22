import {Dimensions, StyleSheet} from "react-native";
import {Colors} from "../constants/colors";


export const paymentMethods = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 24,

    },
    formCardContainer: {
        height: 207,
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 13,
        elevation: 1,
        paddingTop: 32,
        paddingLeft: 40
    },
    formCardLabel: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 12,
        lineHeight: 14,
        color: Colors.gray,
        marginBottom: 4
    },
    formCardInput: {
        width: 248,
        height: 37,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 43,
        color: Colors.primary,
        fontSize: 18,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 21,
    },
    formCardInputBottom: {
        width: 70,
        height: 29,
        borderColor: Colors.primary,
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 9,
        color: Colors.primary,
        fontSize: 18,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 21,
    },
    cardContainer: {
        display: 'flex',
        width: '100%',
        height: 56,
        flexDirection: 'row',
        backgroundColor: Colors.white,
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
    cardName: {
        fontSize: 16,
        lineHeight: 19,
        fontFamily: 'SF-Pro-Regular',
        color: Colors.gray,
        marginTop: 3,
    },
    cardNumber: {
        fontSize: 12,
        lineHeight: 14,
        fontFamily: 'SF-Pro-Regular',
        color: Colors.gray_medium,
        marginTop: 4
    },
    bottomButton: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        backgroundColor: Colors.white,
        bottom: 0,
        alignSelf: 'center',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10
    },
    close: {
        position: 'absolute',
        right: 0,
        alignSelf: 'center',
        padding: 22
    },
    errorText: {
        color: Colors.error,
        position: 'absolute',
        bottom: -20,
        width: 200
    },

})
