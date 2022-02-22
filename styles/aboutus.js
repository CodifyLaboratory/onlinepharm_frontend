import {StyleSheet} from "react-native";
import {Colors} from "../constants/colors";

export const aboutUs = StyleSheet.create({
    container: {
        paddingLeft: 30,
        paddingRight: 30,
        flex: 1,
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 24
        // backgroundColor: Colors.white
    },
    bottomLinks: {
        width: '100%',
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingLeft: 18,
        paddingRight: 23,
        marginTop: 24
    },
    textLink: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 18,
        lineHeight: 21,
        color: Colors.gray
    },
    link: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingTop: 11,
      paddingBottom: 11,
      borderBottomWidth: 1,
      borderColor: '#E9E9E9',
      alignItems: 'center'
    },

    description: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 15,
        lineHeight: 17,
        color: Colors.gray,
        marginBottom: 40
    },
    button: {
        width: '100%',
        height: 46,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light,
        borderRadius: 20,
        marginBottom: 16,
        flexDirection: 'row'
    },
    buttonText: {
       fontFamily: 'SF-Pro-SemiBold',
        fontSize: 17,
        lineHeight: 20,
        color: Colors.white,
        marginLeft: 7
    },
    version: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 10,
        lineHeight: 12,
        color: Colors.gray,
        marginTop: 4,
        marginBottom: 24
    }
})
