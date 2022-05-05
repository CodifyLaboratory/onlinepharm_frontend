import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const orderDetails = StyleSheet.create({
    cardContainer: {
         width: '100%',
         borderRadius: 10,
         backgroundColor: Colors.white,
         elevation: 1,
         padding: 16,
         marginBottom: 24,
        // flexDirection: 'row'
    },
    dateContainer: {
        
    },
    pharmContainer: {

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.gray_light,
        marginRight: 12,
    },
    orderDate: {
        fontFamily: 'SF-Pro-Medium',
        fontSize: 16,
        lineHeight: 19,
        color: Colors.primary,
        marginBottom: 8
    },
    status: {
        fontFamily: 'SF-Pro-Medium',
        fontSize: 13,
        lineHeight: 16,
        color: 'green',
    },
    where: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 11,
        lineHeight: 13,
        color: Colors.gray_light,
        marginRight: 4
    },
    pharmName: {
        fontFamily: 'SF-Pro-Medium',
        fontSize: 13,
        lineHeight: 16,
        color: Colors.primary,
        width: '70%',
    },
    address: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 13,
        lineHeight: 16,
        color: Colors.primary,
        display: 'flex',
        width: '70%'
    },
    medicineName: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 15,
        lineHeight: 18,
        color: Colors.gray,
        width: '60%'
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        marginBottom: 12
    },
    pcs: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 15,
        lineHeight: 18,
        color: Colors.gray,
        // width: '20%'
    },
    price: {
        fontFamily: 'SF-Pro-Medium',
        fontSize: 15,
        lineHeight: 18,
        color: Colors.gray,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    name: {
        fontFamily: 'SF-Pro-Medium',
        fontSize: 15,
        lineHeight: 18
    }
})