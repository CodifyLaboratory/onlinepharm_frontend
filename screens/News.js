import React, {useState, useMemo, useEffect} from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
  Image
} from "react-native";
import Carousel from "react-native-snap-carousel";
import {news} from './../styles/news'
import axios from "axios";
import NewsCard from "../components/NewsCard";


export default function News({navigation}) {

  const [slideElem, setSlideElem] = useState([
    {
      text: 1,
    }
  ]);
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

  // console.log(categoryDataId);

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


  function NewsItem() {
    return (
      <View style={news.newsNav}>
        {categoryList}
      </View>
    );
  }

  return (

    <SafeAreaView style={{backgroundColor: '#E6EFF9',flex: 1,}}>
      <View style={news.newsInner}>
        <Carousel
          layout={'default'}
          inactiveSlideScale={1}
          windowSize={1}
          data={slideElem}
          renderItem={NewsItem}
          sliderWidth={420}
          itemWidth={420}
          slideStyle={{
            marginRight: categoryDataId.length < 6 ? categoryDataId.length * 20 : categoryDataId.length * 30,
          }}
          activeSlideAlignment={'center'}
          enableSnap={false}
        />

        <ScrollView style={{backgroundColor: '#E6EFF9', height: '100%'}}>
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