import React, {useState, useMemo, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {news} from './../styles/news'
import axios from "axios";
import NewsCard from "../components/NewsCard";


export default function News({navigation}) {

  const [category, setCategory] = useState(1)
  const [categoryDataId, setCategoryDataId] = useState([])
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    axios
      .get('http://164.90.192.245/news/')
      .then(res => setNewsItems(res.data))
    axios
      .get('http://164.90.192.245/news-categories/')
      .then(res => setCategoryDataId(res.data))
  }, [])

  const changeCategory =(id) => {
    setCategory(id)
  }

  const newsList = useMemo(
    () =>
      newsItems
        .filter((item) => item.category.id === category)
        .map((item) => (
            <NewsCard navigation={navigation} data={item} key={item.id}/>
          )
        )
    ,[newsItems, category]
  )


  const categoryList = useMemo(
    () =>
      categoryDataId.map((item) => (
        <TouchableOpacity
          onPress={()=> changeCategory(item.id)}
          activeOpacity={0.5}
          key={item.id}
          style={category == item.id ? news.newsItemActive :news.newsItem}
        >
          <Text style={
            category == item.id ?
              news.newsNavTextActive
              :
              news.newsNavText
          }>{item.title}</Text>
        </TouchableOpacity>
      ))
    ,[categoryDataId, category]
  )

  return (

    <SafeAreaView style={{backgroundColor: '#E6EFF9',flex: 1,}}>
      <View style={news.newsInner}>

        <View style={{height: 31}}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {categoryList}
          </ScrollView>
        </View>

        <ScrollView style={{backgroundColor: '#E6EFF9', height: '100%', marginTop: 24}}>
          <View style={news.container}>
            {
              newsList
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}