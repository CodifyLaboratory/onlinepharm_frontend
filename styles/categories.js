import { Platform, StyleSheet } from 'react-native'
import { Colors } from '../constants/colors'

export const categories = StyleSheet.create({
    text: {
        color: 'red',
    },
    container: {
        backgroundColor: Colors.background,
        paddingTop: Platform.OS == 'android' ? 2 : 0,
    },
    banner: {
        borderRadius: 20,
        marginLeft: -45,
    },
    symptomsSliderElem: {
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 7,
        paddingRight: 7,
        alignItems: 'center',
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16,
        marginBottom: 19,
    },
    pillsContainer: {
        marginTop: 16,
        paddingRight: 16,
        paddingLeft: 16,
        marginBottom: 24,
        backgroundColor: Colors.background,
    },
    pillsListElem: {
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 8,
        height: 36,
        justifyContent: 'center',
        marginBottom: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    pillsListElemText: {
        color: '#1F8BA7',
        fontSize: 13,
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 17,
        height: 17
    },
    popular: {
        // paddingRight: 16,
        // paddingLeft: 16,
    },
    popular_text: {
        marginBottom: 20,
        marginLeft: 16,
        fontFamily: 'SF-Pro-Medium',
        fontSize: 15,
        lineHeight: 18,
        color: Colors.gray
    }
})
