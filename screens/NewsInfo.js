import React, {useEffect, useState, useMemo} from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Platform} from "react-native";
import Api from './../API/index'
import {newsInfo} from '../styles/newsInfo'
import MedicineCard from './../components/MedicineCard'

var replacedStr = /-/gi;

function NewsInfo({route}) {
  const [newsData, setNewsData] = useState({})
  let id = route.params

  useEffect(() => {
    Api.getData(`news/${id}`)
      .then(res => setNewsData(res.data))
      .catch(e => console.log(e))
  }, [])

  const medicationList = useMemo(() => (
    newsData?.medications?.map((item) => (
      <MedicineCard key={item.id} />
    ))
  ), [newsData]);

  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: newsData?.image}} />
      <Text style={styles.title}>{newsData?.title}</Text>
      <Text style={styles.date}>
        с {newsData?.start_date?.replace(replacedStr, '.')} по {newsData?.end_date?.replace(replacedStr, '.')}
      </Text>
      <Text style={styles.description}>{newsData?.description}</Text>
    </ScrollView>
  );
}

export default NewsInfo;

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  image: {
    width: 100,
    height: 61,
    marginBottom: 15
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