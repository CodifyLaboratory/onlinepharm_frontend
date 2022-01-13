import { StyleSheet, Platform } from 'react-native'

export const cart = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS == 'android' ? 30 : 0,
        padding: 16,
    },
    btn: {
        marginHorizontal: 16,
        backgroundColor: '#4BCCED',
        borderRadius: 27,
        alignItems: 'center',
        paddingVertical: 14,
    },
    btnText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: '600',
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
    },
    clearBtn: {
        height: 23,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 17,
    },
    clearBtnText: {
        color: '#4B4747',
        fontSize: 14,
        marginLeft: 9,
    },
    result: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
})
