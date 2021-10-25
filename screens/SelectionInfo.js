import React, { useState, useEffect, useMemo } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'
import Api from './../API/index'
import MedicineCard from './../components/MedicineCard'

const MyComponent = ({navigation, route}) => {

  const [selectionData, setSelectionData] = useState({})

  let id = route.params

  useEffect(() => {
    Api.getData(`selections/${id}`)
      .then(res => setSelectionData(res.data))
      .catch(e => console.log(e))
  }, [])

  const medicationList = useMemo(() => (
    selectionData?.medications?.map((item) => (
      <MedicineCard key={item.id} />
    ))
  ), [selectionData]);

  console.log(selectionData);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{selectionData?.title}</Text>
      <View style={styles.box}>
        {medicationList}
      </View>
    </ScrollView>
  );
};

export default MyComponent;


const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    color: '#1F8BA7',
    fontSize: 20,
    marginTop: 16,
    marginBottom: 24
  },
  box: {

  }
})
