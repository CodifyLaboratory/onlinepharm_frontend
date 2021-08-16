import React, {useState} from "react";
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


export default function News({navigation}) {

  const [slideElem, setSlideElem] = useState([
    {
      text: 1,
    }
  ]);


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

    <SafeAreaView style={{backgroundColor: '#E6EFF9'}}>
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
            marginRight: 20,
          }}
          activeSlideAlignment={'start'}
          enableSnap={false}
          // autoplay={true}
          // autoplayDelay={1000}
          // autoplayInterval={1000}
        />
        <ScrollView style={{backgroundColor: '#E6EFF9'}}>
          <View style={news.container}>
            <TouchableOpacity onPress={() => {
              navigation.push('NewsInfo')
            }} style={news.farmCard}>
              <View style={news.farmCardInfo}>
                <View style={news.nameFarm}>
                  <Text style={news.title}>Аптека:</Text>
                  <Text style={news.farmName}>Неман</Text>
                </View>
                <Text style={news.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={news.farmDate}>31 марта</Text>
                <TouchableOpacity style={news.farmCardBtn}>
                  <Text style={news.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={news.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={news.farmCard}>
              <View style={news.farmCardInfo}>
                <View style={news.nameFarm}>
                  <Text style={news.title}>Аптека:</Text>
                  <Text style={news.farmName}>Неман</Text>
                </View>
                <Text style={news.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={news.farmDate}>31 марта</Text>
                <TouchableOpacity style={news.farmCardBtn}>
                  <Text style={news.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={news.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={news.farmCard}>
              <View style={news.farmCardInfo}>
                <View style={news.nameFarm}>
                  <Text style={news.title}>Аптека:</Text>
                  <Text style={news.farmName}>Неман</Text>
                </View>
                <Text style={news.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={news.farmDate}>31 марта</Text>
                <TouchableOpacity style={news.farmCardBtn}>
                  <Text style={news.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={news.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={news.farmCard}>
              <View style={news.farmCardInfo}>
                <View style={news.nameFarm}>
                  <Text style={news.title}>Аптека:</Text>
                  <Text style={news.farmName}>Неман</Text>
                </View>
                <Text style={news.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={news.farmDate}>31 марта</Text>
                <TouchableOpacity style={news.farmCardBtn}>
                  <Text style={news.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={news.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={news.farmCard}>
              <View style={news.farmCardInfo}>
                <View style={news.nameFarm}>
                  <Text style={news.title}>Аптека:</Text>
                  <Text style={news.farmName}>Неман</Text>
                </View>
                <Text style={news.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={news.farmDate}>31 марта</Text>
                <TouchableOpacity style={news.farmCardBtn}>
                  <Text style={news.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={news.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={news.farmCard}>
              <View style={news.farmCardInfo}>
                <View style={news.nameFarm}>
                  <Text style={news.title}>Аптека:</Text>
                  <Text style={news.farmName}>Неман</Text>
                </View>
                <Text style={news.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={news.farmDate}>31 марта</Text>
                <TouchableOpacity style={news.farmCardBtn}>
                  <Text style={news.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={news.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}