import { StyleSheet } from 'react-native'

export const myMedicine = StyleSheet.create({
    container: {
        backgroundColor: '#E6EFF9',
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 16,
    },
    basketIcon: {
        position: 'absolute',
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        left: 10
    },
    medicineCard: {
        width: '100%',
        // height: 120,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        marginBottom: 16,
        shadowColor: '#000',
        paddingTop: 16,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
        padding: 16
    },
    img: {
        height: 70,
        width: 70,
        borderRadius: 20,
        // borderWidth: 1,
        // borderColor: '#F3F3F3',
    },
    name: {
        color: '#1F8BA7',
        fontSize: 13,
        fontWeight: '500',
        marginBottom: 6,
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 16,
        maxWidth: 150
    },
    category: {
        color: '#999999',
        fontSize: 14,
        marginBottom: 20,
        fontFamily: 'SF-Pro-Light',
        lineHeight: 17
    },
    price: {
        color: '#1F8BA7',
        fontWeight: '600',
        fontFamily: 'SF-Pro-SemiBold'
    },
    kg_symbol: {
    },
    find: {
        backgroundColor: '#FFFF',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        height: 27,
        borderWidth: 1,
        borderColor: '#4BCCED',
        justifyContent: 'center',
        marginRight: 13,
    },
    findText: {
        color: '#4BCCED',
        fontFamily: 'SF-Pro-Medium',
        fontSize: 14,
        lineHeight: 17
    },
    favorite: {
        backgroundColor: '#4BCCED',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        height: 27,
        flexDirection: 'row',
        width: 119,
    },
    favoriteText: {
        color: '#ffffff',
    },
    heart: {
        width: 21,
        height: 18,
    },
})
