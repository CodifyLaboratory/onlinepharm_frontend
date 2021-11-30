import React, { useState, useEffect, useMemo } from 'react';
import { View, Image, Text, ScrollView, StyleSheet } from 'react-native'
import Api from './../API/index'
import MedicineCard from './../components/MedicineCard'
import AsyncStorage from "@react-native-async-storage/async-storage";

const MyComponent = ({navigation, route}) => {

  const [selectionData, setSelectionData] = useState({})
  const [favoriteMedicine, setFavoriteMedicine] = useState([])

  let id = route.params
  const [userData, setUserData] = useState();

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
    Api.getData(`selections/${id}`)
      .then(res => setSelectionData(res.data))
      .catch(e => console.log(e))

    Api.getData(`favorite-medications/`, userData?.access)
      .then(res => setFavoriteMedicine(res.data))
      .catch(e => console.log(e.data))

  }, [])

  // console.log(favoriteMedicine, '111')


  const medicationList = useMemo(() => (
    selectionData?.medications?.map((medicine) => {
      const isFavorite = favoriteMedicine?.some(item => item?.medication?.id === medicine?.id);

      return <MedicineCard key={medicine.id} data={medicine} navigation={navigation} isFavorite={isFavorite} />
      }
    )
  ), [selectionData]);

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
  }
})
