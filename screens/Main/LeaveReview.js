import React, { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Modal,
    Keyboard,
} from 'react-native'

import Stars from 'react-native-stars'
import Success from '../../assets/icons/success.svg'
import Close from '../../assets/icons/close.svg'
import {createFeedback, createMedicationFeedback} from '../../api'
import {strings} from "../../localization";

const LeaveReview = ({ route, navigation }) => {
    const [formData, setFormData] = useState({
        star: 1,
        text: null,
    })


    const [modalVisible, setModalVisible] = useState(false)

    const id = route.params.id
    const type = route.params.type

    const is_medication = type === 'medication'

    const isValid = formData.star && formData.text
    const handleChange = (str) => {
        setFormData({ ...formData, text: str })
    }

    const handleSubmit = async () => {
        const data = {
            star: formData.star,
            text: formData.text,
            pub_date: new Date().toISOString().slice(0, 10),
        }
        try {
            is_medication
                ? await createMedicationFeedback(id, data)
                : await createFeedback(id, data)
        } catch (e) {
            console.log(e)
        } finally {
            setModalVisible(true)
            setTimeout(() => {
                navigation.push((is_medication ? 'MedicineInfo' : 'FarmInfo'), is_medication ? {medId: id} : {pharmacy_id: id})
            }, 3000)
        }
    }

    return (

            <View style={styles.container}>
                    <View
                        onPress={Keyboard.dismiss}
                        style={{
                            minHeight: '100%',
                            flex: 1,
                            marginTop: 40,
                        }}
                    >

                        <Stars
                            half={false}
                            default={1}
                            update={(val) => {
                                setFormData({ ...formData, star: val })
                            }}
                            spacing={24}
                            starSize={40}
                            count={5}
                            fullStar={require('../../assets/icons/fullStar.png')}
                            emptyStar={require('../../assets/icons/emptyStar.png')}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder={strings.main.write_review}
                            multiline
                            numberOfLines={4}
                            onChangeText={handleChange}
                        />
                    </View>


                    <TouchableOpacity
                        disabled={!isValid}
                        style={{
                            ...styles.btn,
                            backgroundColor: !isValid ? '#CCCCCC' : '#4BCCED',
                        }}
                        onPress={() => handleSubmit()}
                    >
                        <Text style={styles.btnText}>{strings.main.send_feedback}</Text>
                    </TouchableOpacity>

                <View style={styles.centeredView}>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            setModalVisible(!modalVisible)
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <TouchableOpacity
                                    style={styles.modalViewClose}
                                    onPress={() => {
                                        setModalVisible(!modalVisible)
                                        navigation.navigate(is_medication ? 'MedicineInfo' : 'FarmInfo', id)
                                    }}
                                >
                                    <Close />
                                </TouchableOpacity>
                                <Success />
                                <Text style={styles.modalText}>
                                    {strings.main.feedback_sent}
                                </Text>
                            </View>
                        </View>
                    </Modal>
                </View>
            </View>
    )
}

export default LeaveReview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        position: 'relative'
    },
    wrapper: {
      flexDirection: 'column',
      justifyContent: 'space-between',
        backgroundColor: 'red',
        flex: 1,
        height: '100%'
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingBottom: 0,
        lineHeight: 24,
        fontSize: 16,
        marginTop: 20
    },
    btn: {
        width: '100%',
        backgroundColor: '#4BCCED',
        padding: 13,
        borderRadius: 20,
        position: 'absolute',
        bottom: 16,
        alignSelf: 'center',
    },
    disabled_btn: {
        backgroundColor: '#CCCCCC',
    },
    btnText: {
        color: '#ffffff',
        fontSize: 17,
        alignSelf: 'center',
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 20
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
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
        color: '#4B4747',
        fontSize: 15,
        marginTop: 18,
        fontFamily: 'SF-Pro-Regular',
        lineHeight: 17
    },
    modalViewClose: {
        transform: [{ translateX: 145 }, { translateY: -60 }],
    },
})
