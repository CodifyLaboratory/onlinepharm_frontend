import {StyleSheet, Platform} from 'react-native'

export const profile = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingLeft: 37,
        paddingRight: 37,
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginTop: Platform.OS == 'android' ? 75 : 0,
    },
    profileAvatar: {
        width: 88,
        height: 88,
        borderRadius: 50,
    },
    profileName: {
        fontSize: 18,
        lineHeight: 27,
        marginTop: 16,
        marginBottom: 8,
        color: '#1A1717',
    },
    profileNumber: {
        fontSize: 12,
        lineHeight: 18,
        color: '#4B4747',
    },
    profileLinks: {
        width: 302,
        backgroundColor: '#fff',
        borderRadius: 18,
        marginTop: 45,
    },
    profileLink: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        justifyContent: 'space-between',
        height: 48,
        paddingLeft: 24,
        paddingRight: 34,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
    },
    profileLinkInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileLinkText: {
        fontSize: 16,
        marginLeft: 14,
    },
})
