import React, { useState, useEffect } from "react";
import {StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native'
import Api from "./../API/index";
import MedicineCard from "../components/MedicineCard";
import AsyncStorage from "@react-native-async-storage/async-storage";


function MyMedicine() {
  const [userData, setUserData] = useState(null);
  const [myMedicine, setMyMedicine] = useState(null);

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

  useEffect(() => {
    loadData()

    Api.getData(`basket-medications/`, userData?.access)
      .then(res => setMyMedicine(res.data))
      .catch(e => console.log(e))


  }, [userData?.access]);

  console.log(myMedicine)

  return (
    <ScrollView style={{backgroundColor: '#e6eff9'}}>
      <View style={{paddingHorizontal: 16, marginTop: 25 }}>
        {
          myMedicine?.map((item) => (
            <MedicineCard key={item.id} data={item.medication} type="s" isFavorite={true} />
          ))
        }
        {/*<MedicineCard/>*/}
        {/*<MedicineCard/>*/}

      </View>
    </ScrollView>
  );
}

export default MyMedicine;