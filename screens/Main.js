import React, {useState} from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image, Platform, ImageBackground, ScrollView,
  SafeAreaView
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Banner from '../assets/main/baner.svg';
import Logo from '../assets/header/logo.svg';
import Arrow from '../assets/header/arrow.svg';
import SelectDropdown from 'react-native-select-dropdown';
import CartHeader from '../assets/header/Cart.svg';
import SearchHeader from '../assets/header/search.svg';

import {main} from "../styles/main";
import MainFarmCard from "../styles/components/MainFarmCard";
import MainSymptomsCard from "../styles/components/MainSymptomsCard";
import MainHitsCard from "../styles/components/MainHitsCard";

export default function Main({navigation}) {
  const [slideElem, setSlideElem] = useState([
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

  const countries = ['Бишкек', 'Ош', 'Кант', 'Токмок'];


  function _renderItem({item, index}) {
    return (
      <View style={main.banner}>
        <View>
          <Banner/>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView>
        <View style={main.container}>
          <View style={main.header}>
            <Logo/>
            <SelectDropdown
              data={countries}
              defaultValueByIndex={0}
              buttonTextStyle={{
                color: '#1F8BA7',
                fontSize: 17,
              }}
              renderDropdownIcon={() => {
                return (
                  <Arrow/>
                );
              }}
              buttonStyle={{
                width: 130,
                backgroundColor: 'transparent'
              }}
              rowStyle={{
                borderBottomWidth: 0,
                textAlign: 'center'
              }}
              rowTextStyle={{
                color: '#1F8BA7',
                fontSize: 17,
              }}
              dropdownStyle={{
                borderRadius: 10,
                marginTop: Platform.OS == 'ios' ? -10 : -50,
              }}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
            <View style={main.headerRight}>
              <TouchableOpacity style={main.cart}>
                <View style={main.cartNumber}>
                  <Text style={main.cartNumberText}>1</Text>
                </View>
                <CartHeader/>
              </TouchableOpacity>
              <TouchableOpacity style={main.search}>
                <SearchHeader/>
              </TouchableOpacity>
            </View>
          </View>

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

          <View>
            <View style={main.title}>
              <Text>Аптеки</Text>
              <TouchableWithoutFeedback onPress={() => navigation.push('Farms')}>
                <Text>Смотреть все</Text>
              </TouchableWithoutFeedback>
            </View>

            <View style={{height: 132}}>
              <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
                <MainFarmCard/>
                <MainFarmCard/>
                <MainFarmCard/>
                <MainFarmCard/>
                <MainFarmCard/>
                <MainFarmCard/>
                <MainFarmCard/>
              </ScrollView>
            </View>

            <View style={main.title}>
              <Text>Симптомы</Text>
              <TouchableWithoutFeedback onPress={() => alert('heh zdarova')}>
                <Text>Смотреть все</Text>
              </TouchableWithoutFeedback>
            </View>

            <View style={{height: 100, }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <MainSymptomsCard/>
                <MainSymptomsCard/>
                <MainSymptomsCard/>
                <MainSymptomsCard/>
                <MainSymptomsCard/>
              </ScrollView>
            </View>

          </View>

          <View style={main.title}>
            <Text>Категории</Text>
            <TouchableWithoutFeedback onPress={() => alert('heh zdarova')}>
              <Text>Смотреть все</Text>
            </TouchableWithoutFeedback>
          </View>

          <View style={main.categories}>
            <TouchableOpacity style={main.categoriesItem} activeOpacity={0.8} onPress={()=> navigation.push('Categories')}>
              <ImageBackground style={{ width: 75, height: 75, alignItems: 'center', justifyContent: 'center' }}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={main.categoriesItemText}>Лекарственные препараты</Text>
            </TouchableOpacity>
            <View style={main.categoriesItem}>
              <ImageBackground style={{width: 75, height: 75, alignItems: 'center', justifyContent: 'center'}}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={main.categoriesItemText}>Лекарственные препараты</Text>
            </View>
            <View style={main.categoriesItem}>
              <ImageBackground style={{width: 75, height: 75, alignItems: 'center', justifyContent: 'center'}}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={main.categoriesItemText}>Лекарственные препараты</Text>
            </View>
            <View style={main.categoriesItem}>
              <ImageBackground style={{width: 75, height: 75, alignItems: 'center', justifyContent: 'center'}}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={main.categoriesItemText}>Лекарственные препараты</Text>
            </View>
          </View>

          <View style={main.title}>
            <Text>Горящие товары</Text>
            <TouchableWithoutFeedback onPress={() => alert('heh zdarova')}>
              <Text>Смотреть все</Text>
            </TouchableWithoutFeedback>
          </View>

          <View style={{height: 190, }}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <MainHitsCard/>
              <MainHitsCard/>
              <MainHitsCard/>
              <MainHitsCard/>
              <MainHitsCard/>
            </ScrollView>
          </View>

        </View>
        <View style={main.appInfo}>
          <Logo style={{marginBottom: 16}}/>
          <Text style={main.appInfoText}>MyMed— знак качества, который обеспечивает высокое качество, безопасность
            лекарств и оптимальные цены</Text>
          <Text style={main.appInfoText}>Это значит, что покупатели могут получить отличное обслуживание в аптеке и
            приобрести качественные лекарства по доступным ценам.
            Вы можете быть уверены в профессионализме аптек, входящих в союз MyMed</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
