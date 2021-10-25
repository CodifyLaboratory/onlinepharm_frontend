import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
import {categoriesMedicines} from "../styles/categoriesMedicines";
import MedicineCard from './../components/MedicineCard'



function CategoriesMedicines() {
  const [ slideElem, setSlideElem ] = useState([]);

  return (
    <ScrollView style={{ backgroundColor: '#E6EFF9' }}>
      <SafeAreaView style={categoriesMedicines.container}>
        <MedicineCard />
      </SafeAreaView>
    </ScrollView>
  );
}

export default CategoriesMedicines;
