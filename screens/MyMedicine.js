import React from 'react';
import {View, Text, ScrollView} from "react-native";
import MedicineCard from "../components/MedicineCard";

function MyMedicine(props) {
  return (
    <ScrollView style={{backgroundColor: '#e6eff9'}}>
      <View style={{paddingHorizontal: 16, marginTop: 25 }}>
        <MedicineCard/>
        <MedicineCard/>
      </View>
    </ScrollView>
  );
}

export default MyMedicine;