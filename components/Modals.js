import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Modal, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Close from "../assets/icons/close.svg";
import {Colors} from "../constants/colors";
import {styles} from "../styles/components/modals";
import {strings} from "../localization";

const DeleteProductModal = ({visible, setVisible, handleChange }) => {

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
                        <Text style={styles.modalText}>
                            {strings.cart.remove_item}
                        </Text>
                        <View style={styles.leave_btn_wrap}>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={styles.btn_cancel}
                            >
                                <Text style={styles.btn_cancel_text}>
                                    {strings.modals.cancel}
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=> {
                                    handleChange('delete')
                                    setVisible(false)
                                }}
                                style={styles.btn_leave}
                            >
                                <Text style={styles.btn_leave_text}>{strings.modals.delete}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
export default DeleteProductModal

