import {StyleSheet} from "react-native";
import {Colors} from "../constants/colors";

const recoveryPassword = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: Colors.white
    },
    info_text: {
        textAlign: 'center',
        marginTop: 50,
        fontFamily: 'SF-Pro-Regular',
        fontSize: 14,
        lineHeight: 17,
        color: Colors.gray
    },
    btn: {
        position: 'absolute',
        bottom: 24,
        backgroundColor: '#1F8BA7',
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderRadius: 23,
        alignSelf: 'center'

    },
    enter_code: {
        position: 'absolute',
        top: -25,
        fontFamily: 'SF-Pro-Medium',
        fontSize: 14,
        lineHeight: 17,
        // color: Colors.gray_light
    },
    input: {
        width: '100%',
        // padding: 17,
        paddingBottom: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#BCBCBC',
        marginBottom: 30,
        fontSize: 15,
    },
    timer: {
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: 'SF-Pro-Medium',
        fontSize: 16,
        lineHeight: 22,
        color: Colors.gray_light,
    },
    timerText: {
        fontFamily: 'SF-Pro-Medium',
        fontSize: 16,
        lineHeight: 22,
        color: Colors.gray_light,
        position: 'absolute',
        marginLeft: 23,
    },
    group_buttons: {
        position: 'absolute',
        bottom: 24,
        width: '100%',
        alignSelf: 'center'
    },
    group_button_next: {
        bottom: 16,
        backgroundColor: '#1F8BA7',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 23,
        alignSelf: 'center',
        height: 44

    },
    group_button_resend: {
        backgroundColor: Colors.background,
        padding: 10,
        width: '100%',
        alignItems: 'center',
        borderRadius: 23,
        alignSelf: 'center',
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    resendText: {
        fontFamily: 'SF-Pro-Medium',
        lineHeight: 21,
        fontSize: 17,
        color: Colors.gray_light
    }
})

export default recoveryPassword
