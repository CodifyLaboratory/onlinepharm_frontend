import { Platform, StyleSheet } from 'react-native'
import {Colors} from "../constants/colors";

export const search = StyleSheet.create({
    container: {
        // alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: Platform.OS == 'android' ? 20 : 20,
        height: '100%',
    },
    nothing_wrap: {
        paddingLeft: 20
    },
    nothing_text: {
        fontSize: 15,
        fontWeight: 'normal',
        marginBottom: 10,
        color: Colors.gray_medium
        // fontFamily: 'SF Pro Display'
    },
    nothing_text_secondary: {
        fontSize: 12,
        fontWeight: 'normal',
        marginBottom: 10,
        color: Colors.gray_medium
        // fontFamily: 'SF Pro Display'
    },
    input: {
        width: '85%',
        borderWidth: 1,
        borderColor: '#999999',
        height: 40,
        paddingLeft: 20,
        paddingRight: 10,
        borderRadius: 9,
    },
    back_button_wrap: {
        width: '15%',
        position: 'absolute',
        right: -7,
        top: 9
    },
    backBtn: {
      fontSize: 16,
      fontWeight: 'normal',
      color: Colors.gray_medium
    },
    searchLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    searchLogoText: {
        fontSize: 18,
        marginTop: 45,
        color: '#999999',
    },
    searchItem: {
        marginBottom: 16,
    },
    itemText: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22,
        color: '#1F8BA7',
    },
    searchBlock: {
        marginLeft: 37,
    },
})
