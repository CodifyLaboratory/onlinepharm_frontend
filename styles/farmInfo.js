import { StyleSheet } from 'react-native'

export const farmInfo = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
    logo: {
        marginBottom: 31,
        marginRight: 24,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        color: '#4B4747',
        marginTop: -34,
    },
    date: {
        color: '#999999',
        fontSize: 15,
        marginBottom: 8,
    },
    time: {
        fontSize: 17,
        color: '#1F8BA7',
        marginLeft: 19,
    },
    contacts: {
        fontSize: 17,
        color: '#1F8BA7',
        marginBottom: 16,
    },
    starBox: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom: 30,
    },
    starCount: {
        fontSize: 15,
        color: '#4B4747',
        marginLeft: 14,
    },
    reviewsBox: {},
    reviewsTitle: {
        color: '#4B4747',
        fontSize: 18,
        marginBottom: 16,
    },
    reviewBtn: {
        backgroundColor: '#4BCCED',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 12,
        borderRadius: 27,
        marginBottom: 30,
    },
    reviewBtnText: {
        fontSize: 17,
        color: '#ffffff',
    },
    reviewsElem: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 10,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
    },
    reviewsElemImg: {
        width: 50,
        height: 50,
    },
    reviewsElemName: {
        fontSize: 11,
        color: '#1F8BA7',
        marginBottom: 8,
    },
    reviewsElemText: {
        width: 272,
        color: '#4B4747',
        marginBottom: 16,
    },
})
