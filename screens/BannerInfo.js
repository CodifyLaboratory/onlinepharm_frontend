import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Api from './../API/index'
import MedicineCard from './../components/MedicineCard'

var replacedStr = /-/gi;


const MyComponent = ({route}) => {
  const [bannerData, setBannerData] = useState({})

  useEffect(() => {
    Api.getData(`banners/${route.params}`)
      .then(res => setBannerData(res.data))
      .catch(e => console.log(e))
  }, [])

  console.log(bannerData);

  const medicationList = useMemo(() => (
    bannerData?.medications?.map((item) => (
      <MedicineCard key={item.id} />
    ))
  ), [bannerData]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{bannerData?.title}</Text>
      <Text style={styles.date}>
        с {bannerData?.start_date?.replace(replacedStr, '.')} по {bannerData?.end_date?.replace(replacedStr, '.')}
      </Text>
      <Text style={styles.description}>{bannerData?.description}</Text>

      {medicationList}
    </ScrollView>
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  title: {
    fontSize: 20,
    color: '#1F8BA7',
    marginBottom: 24
  },
  date: {
    color: '#999999',
    fontSize: 14,
    marginBottom: 16,
  },
  description: {
    color: '#4B4747',
    fontSize: 16,
    marginBottom: 24
  }
})