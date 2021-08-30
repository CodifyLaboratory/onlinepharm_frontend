import React, {useEffect, useMemo, useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import FarmCard from '../components/FarmCard';
import {farm} from "../styles/farm";
import axios from "axios";

function Farm({navigation, route}) {
  const [branchData, setBranchData] = useState([])

  useEffect(()=> {
    axios
      .get(`http://164.90.192.245/pharmacies/${route.params}`)
      .then(res => setBranchData(res.data))
  }, [])

  console.log(branchData)

  const branchList = useMemo(() => (
    branchData?.branches?.map((item) => (
        <FarmCard navigation={navigation} key={item.id} data={item} />
      ))

  ), [branchData])

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={farm.container}>
        {/*<FarmCard navigation={navigation}/>*/}
        {branchList}
      </View>
    </ScrollView>
  );
}

export default Farm;
