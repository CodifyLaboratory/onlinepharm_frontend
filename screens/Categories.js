import React, { useState } from 'react';
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
import Carousel from 'react-native-snap-carousel';
import Banner from '../assets/main/baner.svg';

import {categories} from "../styles/categories";

function Categories({ navigation }) {
  const [ slideElem, setSlideElem ] = useState([
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 3,
    }
  ]);

  function _renderItem({ item, index }) {
    return (
      <View style={categories.banner}>
        <View>
          <Banner/>
        </View>
      </View>
    );
  }

  function symptomsItem() {
    return (
      <View style={categories.symptomsSliderElem}>
        <Image style={{ width: 36, height: 36 }} source={require('../assets/main/symptomsLogo.png')}/>
        <Text style={{ color: '#1F8BA7', fontSize: 11, lineHeight: 13, marginTop: 11, }}>Головная боль</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <SafeAreaView style={categories.container}>
        <Carousel
          layout={'default'}
          inactiveSlideScale={1}
          windowSize={1}
          data={slideElem}
          renderItem={_renderItem}
          sliderWidth={430}
          itemWidth={343}
          slideStyle={{
            marginRight: 20,
          }}
        />

        <View style={categories.title}>
          <Text>Симптомы</Text>
          <TouchableWithoutFeedback onPress={() => alert('heh zdarova')}>
            <Text>Смотреть все</Text>
          </TouchableWithoutFeedback>
        </View>

        <Carousel
          layout={'default'}
          inactiveSlideScale={1}
          windowSize={1}
          data={slideElem}
          renderItem={symptomsItem}
          sliderWidth={420}
          itemWidth={90}
          slideStyle={{
            marginRight: 25,
          }}
          activeSlideAlignment={'start'}
        />

        <View style={categories.pillsContainer}>
          <Text style={{marginBottom: 16}}>Препараты:</Text>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8} onPress={()=> navigation.push('CategoriesMedicines')}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={categories.pillsListElem} activeOpacity={0.8}>
            <Text style={categories.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Categories;