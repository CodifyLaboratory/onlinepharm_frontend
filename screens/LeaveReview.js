import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Alert,
  Modal,
  Pressable,
} from "react-native";
import Api from "./../API/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stars from "react-native-stars";
import Success from "./../assets/icons/success.svg";
import Close from "./../assets/icons/close.svg";
import { createFeedback } from "../api";
import { bottom } from "styled-system";

const LeaveReview = ({ route, navigation }) => {
  const [formData, setFormData] = useState({
    star: null,
    text: null,
  });
  const [modalVisible, setModalVisible] = useState(false);

  const id = route.params.id;
  const isValid = formData.star || formData.text
  const handleChange = (str) => {
    setFormData({ ...formData, text: str });
  };

  const handleSubmit = async() => {
    const data  = {
      "star": formData.star,
      "text": formData.text,
      "pub_date": new Date().toISOString().slice(0, 10)
  }
  try {
   await createFeedback(id, data)
  } catch(e) {
    console.log(e)
  } finally {
    setModalVisible(true);
          setTimeout(() => {
            navigation.navigate("FarmInfo", id);
          }, 5000);
        }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 36, marginBottom: 100 }}>
        <Stars
          half={false}
          default={1}
          update={(val) => {
            setFormData({ ...formData, star: val });
          }}
          spacing={24}
          starSize={40}
          count={5}
          fullStar={require("./../assets/icons/fullStar.png")}
          emptyStar={require("./../assets/icons/emptyStar.png")}
        />
      </View>

      <TextInput
        style={styles.input}
        placeholder="Оставьте комментарий"
        multiline
        numberOfLines={4}
        onChangeText={handleChange}
      />

      <TouchableOpacity disabled={!isValid} style={{...styles.btn, backgroundColor: !isValid ? '#CCCCCC' : "#4BCCED"}} onPress={() => handleSubmit()}>
        <Text style={styles.btnText}>Отправить отзыв</Text>
      </TouchableOpacity>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={styles.modalViewClose}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate("FarmInfo", id);
                }}
              >
                <Close />
              </TouchableOpacity>
              <Success />
              <Text style={styles.modalText}>Ваш отзыв успешно отправлен</Text>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default LeaveReview;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
    paddingBottom: 16,
    lineHeight: 24,
    fontSize: 16,
    marginBottom: 300,
  },
  btn: {
    width: '100%',
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4BCCED",
    padding: 13,
    borderRadius: 20,
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center'
  },
  disabled_btn: {
    backgroundColor: "#CCCCCC"
  },
  btnText: {
    color: "#ffffff",
    fontSize: 17,
    alignSelf: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 16,
    width: 340,
    height: 249,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
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
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    color: "#4B4747",
    fontSize: 15,
    marginTop: 18,
  },
  modalViewClose: {
    transform: [{ translateX: 145 }, { translateY: -60 }],
  },
});
