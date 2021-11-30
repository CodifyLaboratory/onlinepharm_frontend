import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TouchableWithoutFeedback
} from 'react-native';
import Api from '../API';
import Carousel from 'react-native-snap-carousel';
import Banner from '../assets/main/baner.svg';
import BannerCard from '../components/BannerCard';
import PopularMedicine from '../components/PopularMedicine'

import {main} from "../styles/main";
import { categories } from '../styles/categories';

function Categories({ navigation, route }) {
  const id = route.params
  const [ bannerData, setBannerData ] = useState([]);
  const [ popularData, setPopularData ] = useState([]);
  const [ subCategory, setSubCategory ] = useState([]);

  useEffect(() => {
    Api.getData('banners/')
      .then(res => setBannerData(res.data));
    Api.getData('popular-medications/')
      .then(res => setPopularData(res.data));
    Api.getData('subcategories/')
      .then(res => setSubCategory(res.data));
  }, []);

  const bannerList = useMemo(
    () => (
      bannerData.map((item) => <BannerCard data={item} key={item.id} navigation={navigation}/>)
    ), [ bannerData ]);


  function symptomsItem() {
    return (
      <View style={categories.symptomsSliderElem}>
        <Image style={{ width: 36, height: 36 }} source={require('../assets/main/symptomsLogo.png')}/>
        <Text style={{ color: '#1F8BA7', fontSize: 11, lineHeight: 13, marginTop: 11, }}>Головная боль</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: '#E6EFF9' }}>
      <SafeAreaView style={categories.container}>
        <View style={main.banner}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {bannerList}
          </ScrollView>
        </View>
        <View style={categories.pillsContainer}>
          {
            subCategory?.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={categories.pillsListElem}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('CategoriesMedicines', item)}>
                <Text style={categories.pillsListElemText}>{item.title}</Text>
              </TouchableOpacity>
            ))
          }


        </View>


        <View style={categories.popular}>
          <Text style={{ marginBottom: 24 }}>Популярные</Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            {
              popularData.map((item) => (
                <PopularMedicine navigation={navigation} key={item.id} data={item} />
              ))
            }

          </ScrollView>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Categories;