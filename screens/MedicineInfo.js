import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import Api from "./../API/index";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Stars from "react-native-stars";
import Faq from "../components/Faq";

export default function MedicineInfo() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.imageBox}>
          <Image
            style={styles.image}
            source={require("./../assets/main/hitsLogo.png")}
          />
        </View>
        <Text style={styles.title}>Азитромицин(Вертекс) антибиотик</Text>
        <Text style={styles.price}>
          Цена от: <Text style={styles.soms}>200с</Text>
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Stars
            half={false}
            default={1}
            update={(val) => {
              setFormData({ ...formData, star: val });
            }}
            spacing={4}
            starSize={14}
            count={5}
            fullStar={require("./../assets/icons/fullStar.png")}
            emptyStar={require("./../assets/icons/emptyStar.png")}
          />
          <Text style={styles.reviewsCount}>3 отзыва</Text>
        </View>
        <Text style={styles.blockTitle}>Описание</Text>
        <View style={styles.description}>
          <View style={styles.descriptionElem}>
            <Text style={styles.descriptionElemTitle}>Производитель</Text>
            <Text style={styles.descriptionElemDesc}>
              Кооперасьон Фармасетик Ламбакта
            </Text>
          </View>
        </View>
        <Text style={styles.blockTitle}>Инструкция по применению</Text>
        <Faq />
        <Faq />
        <Faq />
        <Faq />
        <Faq />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  imageBox: {
    width: "100%",
    height: 210,
    borderWidth: 1.5,
    borderColor: "#ECEEEF",
    borderRadius: 13,
    marginBottom: 22,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    color: "#4B4747",
    marginBottom: 25,
  },
  price: {
    fontSize: 14,
    color: "#999999",
  },
  soms: {
    fontSize: 17,
    color: "#1F8BA7",
  },
  reviewsCount: {
    fontSize: 15,
    color: "#4B4747",
    marginLeft: 14,
  },
  blockTitle: {
    color: "#4B4747",
    fontSize: 15,
    marginTop: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  description: {},
  descriptionElem: {
    flexDirection: "row",
    marginBottom: 16,
  },
  descriptionElemTitle: {
    width: 126,
    color: "#999999",
  },
  descriptionElemDesc: {
    width: 200,
    color: "#4B4747",
  },
});
