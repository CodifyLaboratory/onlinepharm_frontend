import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../constants/colors'

export const ordering = StyleSheet.create({
    container: {
        padding: 16,
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
        marginBottom: 16,
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
    },
    radioBtn: {
        marginRight: 26,
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
        alignItems: 'center'
    },
    mapSelectBtnText: {
        color: Colors.white,
        fontSize: 14,
        lineHeight: 24,
        fontFamily: 'SF-Pro-Regular'
    }
})
