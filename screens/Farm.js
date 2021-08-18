import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FarmCard from '../components/FarmCard';
import {farm} from "../styles/farm";

function Farm({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={farm.container}>
        <FarmCard navigation={navigation}/>
        <FarmCard navigation={navigation}/>
        <FarmCard navigation={navigation}/>
        <FarmCard navigation={navigation}/>
        <FarmCard navigation={navigation}/>
      </View>
    </ScrollView>
  );
}

export default Farm;
