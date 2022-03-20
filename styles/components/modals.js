import {StyleSheet} from "react-native";
import {Colors} from "../../constants/colors";

export const styles = StyleSheet.create({
    leave_btn_wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: 32
    },
    btn_cancel: {
        width: 128,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.light,
        padding: 13,
        borderRadius: 20,
        margin: 8,
    },
    btn_cancel_text: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        height: 20
    },
    btn_leave: {
        width: 128,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4BCCED',
        padding: 13,
        borderRadius: 20,
        margin: 8,
    },
    btn_leave_text: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 9,
        height: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        width: 340,
        height: 249,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        color: Colors.gray,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 32,
    },
    modalViewClose: {
        marginTop: 20,
        transform: [{ translateX: 145 }, { translateY: -60 }],
    },
})
