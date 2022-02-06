import {StyleSheet, Platform, Dimensions} from 'react-native'

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
        borderRadius: 60,
    },
    avatar_camera: {
      position: 'absolute',
      bottom: 0,
      right: -20
    },
    input: {
        borderBottomWidth: 0,
        width: Dimensions.get('window').width - 32,
        backgroundColor: '#fff',
        borderRadius: 10,
        paddingVertical: 5,
        paddingLeft: 16,
        paddingRight: 23,
        height: 50
    },
    label: {
        fontSize: 14,
        fontWeight: 'normal',
        marginBottom: 6,
        color: '#35364F',
        opacity: 0.6,
    },
    phone_pen: {
        position: 'absolute',
        right: 25,
        top: 42,
        zIndex: 1
    }

})
