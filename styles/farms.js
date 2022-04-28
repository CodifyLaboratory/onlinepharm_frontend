import { StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

export const farms = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        alignItems: 'center',
        borderRadius: 10,
        paddingTop: 30,
        paddingBottom: 16,
        paddingHorizontal: 16,
    },
    type: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 24,
    },
    typeElem: {
        width: 150,
        alignItems: 'center',
        paddingBottom: 7,
    },
    typeElemActive: {
        width: 150,
        alignItems: 'center',
        paddingBottom: 7,
        borderBottomWidth: 2,
        borderBottomColor: '#FFC90A',
    },
    typeText: {
        color: '#999999',
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        lineHeight: 27
    },
    typeTextActive: {
        color: '#1F8BA7',
        fontSize: 18,
        fontFamily: 'Poppins-Medium',
        lineHeight: 27
    },
    farmCard: {
        width: '100%',
        height: 135,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
    picker_container: {
        width: '100%',
        borderWidth: 1,
        // borderRadius: 5,
        // height: 42,
        marginBottom: 24,
        borderColor: Colors.white,
        elevation: 2,
    },
    picker_icon: {
        position: 'absolute',
        bottom: 15,
        right: 10,
        zIndex: 2,
    },
    farmImg: {
        height: 70,
        width: 70,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#F3F3F3',
        resizeMode: 'cover',
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
    farmAdress: {
        color: '#1F8BA7',
        fontSize: 11,
        marginBottom: 10,
        width: 90,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 14.3
    },
    farmClose: {
        color: '#999',
        fontSize: 13,
    },
    farmImage: {
        width: 21,
        height: 18,
        marginTop: 7,
        marginRight: 3,
        marginBottom: 52,
    },
    farmFind: {
        backgroundColor: '#4BCCED',
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 8,
        // height: 27
    },
    farmFindText: {
        color: '#fff',
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 17
    },
    customDropdown: {
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 1,

    }
})
