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


export default function News({navigation}) {

  const [slideElem, setSlideElem] = useState([
    {
      text: 1,
    }
  ]);


  function NewsItem() {
    return (
      <View style={styles.newsNav}>
        <TouchableOpacity>
          <Text style={styles.newsNavText}>Акции</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.newsNavText}>Скидки</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.newsNavText}>Новинки</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.newsNavText}>Предложения</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (

    <SafeAreaView style={{backgroundColor: '#E6EFF9'}}>
      <View style={styles.newsInner}>
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
          <View style={styles.container}>
            <TouchableOpacity onPress={() => {
              navigation.push('NewsInfo')
            }} style={styles.farmCard}>
              <View style={styles.farmCardInfo}>
                <View style={styles.nameFarm}>
                  <Text style={styles.title}>Аптека:</Text>
                  <Text style={styles.farmName}>Неман</Text>
                </View>
                <Text style={styles.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={styles.farmDate}>31 марта</Text>
                <TouchableOpacity style={styles.farmCardBtn}>
                  <Text style={styles.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.farmCard}>
              <View style={styles.farmCardInfo}>
                <View style={styles.nameFarm}>
                  <Text style={styles.title}>Аптека:</Text>
                  <Text style={styles.farmName}>Неман</Text>
                </View>
                <Text style={styles.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={styles.farmDate}>31 марта</Text>
                <TouchableOpacity style={styles.farmCardBtn}>
                  <Text style={styles.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.farmCard}>
              <View style={styles.farmCardInfo}>
                <View style={styles.nameFarm}>
                  <Text style={styles.title}>Аптека:</Text>
                  <Text style={styles.farmName}>Неман</Text>
                </View>
                <Text style={styles.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={styles.farmDate}>31 марта</Text>
                <TouchableOpacity style={styles.farmCardBtn}>
                  <Text style={styles.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.farmCard}>
              <View style={styles.farmCardInfo}>
                <View style={styles.nameFarm}>
                  <Text style={styles.title}>Аптека:</Text>
                  <Text style={styles.farmName}>Неман</Text>
                </View>
                <Text style={styles.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={styles.farmDate}>31 марта</Text>
                <TouchableOpacity style={styles.farmCardBtn}>
                  <Text style={styles.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.farmCard}>
              <View style={styles.farmCardInfo}>
                <View style={styles.nameFarm}>
                  <Text style={styles.title}>Аптека:</Text>
                  <Text style={styles.farmName}>Неман</Text>
                </View>
                <Text style={styles.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={styles.farmDate}>31 марта</Text>
                <TouchableOpacity style={styles.farmCardBtn}>
                  <Text style={styles.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.farmCard}>
              <View style={styles.farmCardInfo}>
                <View style={styles.nameFarm}>
                  <Text style={styles.title}>Аптека:</Text>
                  <Text style={styles.farmName}>Неман</Text>
                </View>
                <Text style={styles.farmDesc}>В день пожилых людей Скидка 15% на весь товар</Text>
                <Text style={styles.farmDate}>31 марта</Text>
                <TouchableOpacity style={styles.farmCardBtn}>
                  <Text style={styles.farmCardBtnText}>Подробнее</Text>
                </TouchableOpacity>
              </View>
              <Image style={styles.farmCardImage} source={require('../assets/news/cardLogo.png')}/>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    paddingBottom: 40,
  },
  newsInner: {
    paddingTop: Platform.OS === 'ios' ? 10 : 0,
  },
  newsNav: {
    flexDirection: 'row',
    paddingLeft: 16,
    marginBottom: 24,
    paddingTop: Platform.OS == 'android' ? 45 : 0,
    marginLeft: Platform.OS == 'android' ? 20 : 0
  },
  newsNavText: {
    fontSize: 18,
    marginRight: Platform.OS == 'android' ? 20 : 40,
    color: '#999999'
  },
  farmCard: {
    width: 343,
    borderRadius: 20,
    flexDirection: 'row',
    backgroundColor: '#1F8BA7',
    marginBottom: 16,
  },
  farmCardInfo: {
    width: 203,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 8,
    paddingRight: 16,
  },
  nameFarm: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  title: {
    fontSize: 11,
    color: '#F3F3F3',
    marginRight: 4,
  },
  farmName: {
    fontSize: 11,
    fontWeight: '500',
    color: '#fff'
  },
  farmDesc: {
    fontSize: 13,
    lineHeight: 16,
    color: '#fff',
    marginBottom: 8,
  },
  farmDate: {
    fontSize: 11,
    fontWeight: '500',
    color: '#F3F3F3',
    marginBottom: 25,
  },
  farmCardBtn: {
    backgroundColor: '#FFD60A',
    borderRadius: 8,
    width: 82,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    marginLeft: 45,
  },
  farmCardBtnText: {
    fontSize: 11,
    color: '#4B4747',
  },
  farmCardImage: {
    width: 140,
    height: 150,
  }
});