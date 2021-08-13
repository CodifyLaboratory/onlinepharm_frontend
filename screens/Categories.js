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
      <View style={styles.banner}>
        <View>
          <Banner/>
        </View>
      </View>
    );
  }

  function symptomsItem() {
    return (
      <View style={styles.symptomsSliderElem}>
        <Image style={{ width: 36, height: 36 }} source={require('../assets/main/symptomsLogo.png')}/>
        <Text style={{ color: '#1F8BA7', fontSize: 11, lineHeight: 13, marginTop: 11, }}>Головная боль</Text>
      </View>
    );
  }

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <SafeAreaView style={styles.container}>
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

        <View style={styles.title}>
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

        <View style={styles.pillsContainer}>
          <Text style={{marginBottom: 16}}>Препараты:</Text>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8} onPress={()=> navigation.push('CategoriesMedicines')}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.pillsListElem} activeOpacity={0.8}>
            <Text style={styles.pillsListElemText}>Антибактериальные(Антибиотики)</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default Categories;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    backgroundColor: '#E6EFF9',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: Platform.OS == 'android' ? 21 : 0
  },
  banner: {
    borderRadius: 20,
    marginLeft: -45,
  },
  symptomsSliderElem: {
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 7,
    paddingRight: 7,
    alignItems: 'center'
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 19
  },
  pillsContainer: {
    marginTop: 16,
  },
  pillsListElem: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  pillsListElemText: {
    color: '#1F8BA7',
    fontSize: 13,
  }
});