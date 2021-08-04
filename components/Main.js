
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Main({ navigation }) {
  const goToProfile = () => {
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>главная</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={goToProfile}
      >
          <Text>go to profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
  container: {
    flex: 1,
    alignItems: "center",
    padding: 40,
  },
  button: {
    borderRadius: 20,
    backgroundColor: "red",
    color: "#fff",
    padding: 10,
  },
});
