import React, {useState, useEffect} from "react";
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
  const [newsItems, setNewsItems] = useState([])

  useEffect(() => {
    axios
      .get('http://164.90.192.245/news/')
      .then(res => setNewsItems(res.data))
  }, [])

  console.log(newsItems);


  function NewsItem() {
    return (
      <View style={news.newsNav}>
        <TouchableOpacity>
          <Text style={news.newsNavText}>Акции</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={news.newsNavText}>Скидки</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={news.newsNavText}>Новинки</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={news.newsNavText}>Предложения</Text>
        </TouchableOpacity>
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
            marginRight: 85,
          }}
          activeSlideAlignment={'start'}
          enableSnap={false}
        />
        <ScrollView style={{backgroundColor: '#E6EFF9', height: '100%'}}>
          <View style={news.container}>
            {
              newsItems.map((item, id) => (
                <NewsCard navigation={navigation} data={item} key={item.id}/>
                )
              )
            }
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}