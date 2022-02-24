import {StyleSheet} from 'react-native'
import {Colors} from "../../constants/colors";

export const selectPharmCard = StyleSheet.create({
    container: {
        width: '100%',
        // height: 127,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'space-bete',
        borderRadius: 10,
        marginBottom: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    list_row: {
        display: 'flex',
        flexDirection: 'row'

    },
    columnCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: 'green',
        width: '100%'
    },
    productList: {
      width: '100%',
      marginTop: 24
    },
    stockStatus: {
        color: Colors.gray_medium
    },
    farmImg: {
        height: 70,
        width: 70,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F3F3F3',
        resizeMode: 'contain',
    },
    farmName: {
        color: '#1F8BA7',
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 8,
        width: 140,
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 15.5
    },
    farmAddress: {
        color: '#1F8BA7',
        fontSize: 11,
        // marginBottom: 10,
        width: 90,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 14.3,
        maxHeight: 47
    },
    farmLocation: {
        flexDirection: 'row',
    },
    notAvailable: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 15,
        lineHeight: 18,
        color: Colors.red
    },
    totalRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 12,
    },
    total: {
        fontFamily: 'SF-Pro-SemiBold',
        fontSize: 17,
        lineHeight: 20,
        color: Colors.gray
    }
})
