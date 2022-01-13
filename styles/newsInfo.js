import { StyleSheet } from 'react-native'

export const newsInfo = StyleSheet.create({
    container: {
        paddingRight: 16,
        paddingLeft: 16,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#26374B',
        marginBottom: 8,
        marginTop: 6,
    },
    date: {
        fontSize: 15,
        fontWeight: '500',
        color: '#26374B',
        marginBottom: 14,
    },
    text: {
        fontSize: 17,
        fontWeight: '500',
        color: '#7D8793',
        marginBottom: 4,
        marginTop: 20,
    },
    destiny: {
        fontSize: 17,
        fontWeight: '500',
        color: '#1F8BA7',
    },
    preview: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        borderWidth: 1,
        borderColor: '#ECEEEF',
        borderRadius: 13,
    },

    previewImg: {
        width: 343,
        height: 210,
    },
})
