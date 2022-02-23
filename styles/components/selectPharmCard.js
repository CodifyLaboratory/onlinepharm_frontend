import {StyleSheet} from 'react-native'

export const selectPharmCard = StyleSheet.create({
    container: {
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
    farmAdress: {
        color: '#1F8BA7',
        fontSize: 11,
        marginBottom: 10,
        width: 90,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 14.3
    },
    farmLocation: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})