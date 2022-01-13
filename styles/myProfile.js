import { StyleSheet, Platform } from 'react-native'

export const myProfile = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 22,
        paddingRight: 22,
        justifyContent: 'center',
        paddingTop: 20,
    },
    profileAvatar: {
        width: 120,
        height: 120,
        borderRadius: 50,
        marginBottom: 32,
        resizeMode: 'cover',
    },
    input: {
        borderBottomWidth: 0,
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 5,
        paddingLeft: 16,
        paddingRight: 23,
    },
    label: {
        fontSize: 14,
        fontWeight: 'normal',
        marginBottom: 6,
        color: '#35364F',
        opacity: 0.6,
    },
})
