import { StyleSheet } from 'react-native'
import { Colors } from '../../constants/colors'

export const orderCard = StyleSheet.create({
    container: {
        height: 102,
        width: '100%',
        borderRadius: 10,
        backgroundColor: Colors.white,
        elevation: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 14,
        justifyContent: 'space-between',
        paddingRight: 14,
    },
    imageContainer: {},
    image: {
        width: 70,
        height: 70,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.gray_light,
        marginRight: 12,
    },
    title: {
        margin: 4,
        fontFamily: 'SF-Pro-Medium',
        color: Colors.primary,
        fontSize: 13,
        lineHeight: 16,
    },
    status: {
        margin: 4,
        fontFamily: 'SF-Pro-Medium',
        color: 'green',
        fontSize: 13,
        lineHeight: 16,
    },
    price: {
        marginBottom: 4,
        fontFamily: 'SF-Pro-Medium',
        color: Colors.gray,
        fontSize: 15,
        lineHeight: 20,
        textAlign: 'right',
    },
    date: {
        marginTop: 4,
        fontFamily: 'SF-Pro-Regular',
        color: Colors.gray_medium,
        fontSize: 13,
        lineHeight: 16,
    },
})
