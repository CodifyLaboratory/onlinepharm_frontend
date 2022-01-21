import React from 'react'
import {Modal, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../styles/components/modals";
import Close from "../../assets/icons/close.svg";
import {strings} from "../../localization";


const ClearCart = ({visible, setVisible, handleChange }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.modalViewClose}
                            onPress={() => {
                                setVisible(false)
                            }}
                        >
                            <Close />
                        </TouchableOpacity>
                        {/* <Success /> */}
                        <Text style={styles.modalText}>
                            {strings.modals.clear_basket}
                        </Text>
                        <View style={styles.leave_btn_wrap}>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={styles.btn_cancel}
                            >
                                <Text style={styles.btn_cancel_text}>
                                    {strings.modals.no}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=> handleChange()}
                                style={styles.btn_leave}
                            >
                                <Text style={styles.btn_leave_text}>{strings.modals.yes}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default ClearCart