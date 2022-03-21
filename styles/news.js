import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

export const news = StyleSheet.create({
    container: {
        paddingLeft: Platform.OS === 'ios' ? 16 : 8,
        alignItems: 'center',
        paddingBottom: 40,
        backgroundColor: Colors.background,
    },
    newsInner: {
        paddingTop: Platform.OS === 'ios' ? 10 : 10,
        backgroundColor: Colors.background,
    },
    newsItem: {
        marginRight: 20,
        marginLeft: 20,
        paddingBottom: 8,
    },
    newsItemActive: {
        marginRight: 20,
        marginLeft: 20,
        borderBottomWidth: 3,
        borderBottomColor: Colors.yellow,
        paddingBottom: 8,
    },
    newsNavText: {
        fontSize: 18,
        color: '#999999',
        fontStyle: 'normal',
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 21
    },
    newsNavTextActive: {
        fontSize: 18,
        color: Colors.primary,
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 21
    },
    farmCard: {
        flex: 1,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#1F8BA7',
        marginBottom: 16,
        marginRight: 16,
        marginLeft: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    farmCardInfo: {
        flex: 0.5,
        paddingTop: 16,
        paddingLeft: 16,
        paddingBottom: 8,
        paddingRight: 16,
    },
    nameFarm: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    title: {
        fontSize: 11,
        color: '#F3F3F3',
        marginRight: 4,
    },
    farmName: {
        fontSize: 11,
        fontWeight: '500',
        color: '#fff',
        fontStyle: 'normal',
        fontFamily: 'SF-Pro-Medium',
        marginLeft: 5
    },
    farmDesc: {
        fontSize: 13,
        lineHeight: 16,
        color: '#fff',
        marginBottom: 8,
        width: 171,
        fontStyle: 'normal',
        fontFamily: 'SF-Pro-Regular'
    },
    farmDate: {
        fontSize: 11,
        fontWeight: '500',
        color: '#CCCCCC',
        marginBottom: 20,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular'
    },
    farmCardBtn: {
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 8,
        width: 101,
        paddingTop: 4,
        paddingBottom: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 45,
    },
    farmCardBtnText: {
        fontSize: 11,
        color: Colors.white,
        lineHeight: 15,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular'
    },
    farmCardImage: {
        flex: 0.5,
        width: 140,
        height: '100%',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
    },
})
