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

const LeaveReview = ({ route, navigation }) => {
  const [formData, setFormData] = useState({
    star: null,
    text: null,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [userData, setUserData] = useState(null);
  const id = route.params.id;

  useEffect(() => {
    loadData();

  }, []);

  const loadData = async () => {
    try {
      let data = await AsyncStorage.getItem("userData");
      if (data !== null) {
        setUserData(JSON.parse(data));
      }
    } catch (err) {
      console.log(err);
    }
  };



  const handleChange = (str) => {
    setFormData({ ...formData, text: str });
  };

  const handleSubmit = () => {
    Api.postData(`pharmacy-feedbacks/create/${id}/`, formData, userData?.access)
      .then((res) => {
        if (res.status === 201) {
          setModalVisible(true);
          setTimeout(() => {
            navigation.navigate("FarmInfo", id);
          }, 5000);
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ alignItems: "center", marginTop: 36, marginBottom: 30 }}>
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

      <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
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
    width: 320,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4BCCED",
    padding: 13,
    borderRadius: 20,
  },
  btnText: {
    color: "#ffffff",
    fontSize: 17,
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
