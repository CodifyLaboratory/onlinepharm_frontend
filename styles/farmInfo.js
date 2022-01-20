import { StyleSheet } from 'react-native'
import {Colors} from "../constants/colors";

export const farmInfo = StyleSheet.create({
    withFeedback: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        lineHeight: 27,
        color: Colors.gray,
        marginBottom: 26
    },
    withoutFeedback: {
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        fontStyle: 'normal',
        lineHeight: 27,
        color: Colors.gray_light,
        marginBottom: 26
    },
    container: {
        paddingTop: 20,
        paddingLeft: 16,
        paddingRight: 16,
    },
    logo: {
        marginBottom: 31,
        marginRight: 24,
        resizeMode: 'contain',
        width: 61,
        height: 61
    },
    title: {
        fontSize: 20,
        color: '#4B4747',
        marginTop: -34,
        fontFamily: 'Poppins-Regular',
        lineHeight: 30
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
        fontFamily: 'Poppins-Medium',
        lineHeight: 24
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
        height: 46
    },
    reviewBtnText: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 20
    },
    reviewsElem: {
        flexDirection: 'row',
        paddingTop: 16,
        paddingBottom: 14,
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
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 14
    },
    reviewsElemText: {
        width: 272,
        color: '#4B4747',
        marginBottom: 16,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 16,
        fontSize: 13
    },
})
