import {Modal, Text, TouchableOpacity, View} from "react-native";
import {styles} from "../../styles/components/modals";
import Close from "../../assets/icons/close.svg";
import Success from "../../assets/icons/success.svg";
import {strings} from "../../localization";
import React from "react";


const SuccessModalComponent = ({visible, setVisible, handleChange, text }) => {
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.modalViewClose}
                            onPress={() => {
                                setVisible(!visible)
                            }}
                        >
                            <Close />
                        </TouchableOpacity>
                        <Success />
                        <Text style={styles.modalText}>
                            {text}
                        </Text>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuccessModalComponent
