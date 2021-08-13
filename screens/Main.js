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
      <View style={styles.banner}>
        <View>
          <Banner/>
        </View>
      </View>
    );
  }

  function farmItem() {
    return (
      <View style={styles.farmSliderElem}>
        <Image style={{width: 118, height: 90}} source={require('../assets/main/farmLogo.png')}/>
        <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13}}>Новая аптека</Text>
      </View>
    );
  }

  function symptomsItem() {
    return (
      <View style={styles.symptomsSliderElem}>
        <Image style={{width: 36, height: 36}} source={require('../assets/main/symptomsLogo.png')}/>
        <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13, marginTop: 11,}}>Головная боль</Text>
      </View>
    );
  }

  function hitsItem() {
    return (
      <View style={styles.hitsItem}>
        <View style={styles.hitsDiscount}>
          <Text style={styles.hitsDiscountText}>50% скидка</Text>
        </View>
        <Image style={styles.hitsImage} source={require('../assets/main/hitsLogo.png')}/>
        <Text style={styles.hitsName}>Азитромицин Вертекс</Text>
        <View style={styles.hitsPrices}>
          <Text style={styles.hitsOldPrice}>50с</Text>
          <Text style={styles.hitsPrice}>25с</Text>
        </View>
        <TouchableOpacity style={styles.hitsBtn}>
          <Text style={styles.hitsBtnText}>Добавить в корзину</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.header}>
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
            <View style={styles.headerRight}>
              <TouchableOpacity style={styles.cart}>
                <View style={styles.cartNumber}>
                  <Text style={styles.cartNumberText}>1</Text>
                </View>
                <CartHeader/>
              </TouchableOpacity>
              <TouchableOpacity style={styles.search}>
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
            <View style={styles.title}>
              <Text>Аптеки</Text>
              <TouchableWithoutFeedback onPress={() => navigation.push('Farms')}>
                <Text>Смотреть все</Text>
              </TouchableWithoutFeedback>
            </View>

            <Carousel
              layout={'default'}
              inactiveSlideScale={1}
              windowSize={1}
              data={slideElem}
              renderItem={farmItem}
              sliderWidth={420}
              itemWidth={118}
              slideStyle={{
                marginRight: 30,
              }}
              activeSlideAlignment={'start'}
              // autoplay={true}
              // autoplayDelay={1000}
              // autoplayInterval={1000}
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
              // autoplay={true}
              // autoplayDelay={1000}
              // autoplayInterval={1000}
            />
          </View>

          <View style={styles.title}>
            <Text>Категории</Text>
            <TouchableWithoutFeedback onPress={() => alert('heh zdarova')}>
              <Text>Смотреть все</Text>
            </TouchableWithoutFeedback>
          </View>

          <View style={styles.categories}>
            <TouchableOpacity style={styles.categoriesItem} activeOpacity={0.8} onPress={()=> navigation.push('Categories')}>
              <ImageBackground style={{ width: 75, height: 75, alignItems: 'center', justifyContent: 'center' }}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={styles.categoriesItemText}>Лекарственные препараты</Text>
            </TouchableOpacity>
            <View style={styles.categoriesItem}>
              <ImageBackground style={{width: 75, height: 75, alignItems: 'center', justifyContent: 'center'}}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={styles.categoriesItemText}>Лекарственные препараты</Text>
            </View>
            <View style={styles.categoriesItem}>
              <ImageBackground style={{width: 75, height: 75, alignItems: 'center', justifyContent: 'center'}}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={styles.categoriesItemText}>Лекарственные препараты</Text>
            </View>
            <View style={styles.categoriesItem}>
              <ImageBackground style={{width: 75, height: 75, alignItems: 'center', justifyContent: 'center'}}
                               source={require('../assets/main/categoriisCircle.png')}>
                <Image source={require('../assets/main/categoriesLogo.png')}/>
              </ImageBackground>
              <Text style={styles.categoriesItemText}>Лекарственные препараты</Text>
            </View>
          </View>

          <View style={styles.title}>
            <Text>Горящие товары</Text>
            <TouchableWithoutFeedback onPress={() => alert('heh zdarova')}>
              <Text>Смотреть все</Text>
            </TouchableWithoutFeedback>
          </View>

          <Carousel
            layout={'default'}
            inactiveSlideScale={1}
            windowSize={1}
            data={slideElem}
            renderItem={hitsItem}
            sliderWidth={420}
            itemWidth={120}
            slideStyle={{
              marginRight: 20,
            }}
            activeSlideAlignment={'start'}
          />
        </View>
        <View style={styles.appInfo}>
          <Logo style={{marginBottom: 16}}/>
          <Text style={styles.appInfoText}>MyMed— знак качества, который обеспечивает высокое качество, безопасность
            лекарств и оптимальные цены</Text>
          <Text style={styles.appInfoText}>Это значит, что покупатели могут получить отличное обслуживание в аптеке и
            приобрести качественные лекарства по доступным ценам.
            Вы можете быть уверены в профессионализме аптек, входящих в союз MyMed</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: Platform.OS == 'android' ? 40 : 0
  },
  banner: {
    borderRadius: 20,
    marginLeft: -45,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingTop: 8,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cart: {
    marginLeft: 30,
  },
  cartNumber: {
    width: 13,
    height: 13,
    borderRadius: 50,
    backgroundColor: '#4BCCED',
    position: 'absolute',
    top: -10,
    right: -5,
  },
  cartNumberText: {
    color: '#fff',
    fontSize: 7,
    textAlign: 'center',
    lineHeight: 13,
  },
  search: {
    marginLeft: 20,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 19
  },
  farmSliderElem: {
    margin: 0,
    width: 132,
    height: 132,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
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
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  categoriesItem: {
    width: '48%',
    height: 131,
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingTop: 12,
    paddingBottom: 8,
    paddingLeft: 22,
    paddingRight: 22,
    alignItems: 'center',
    marginBottom: 16,
  },
  categoriesImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  categoriesItemText: {
    textAlign: 'center',
    marginTop: 4,
    color: '#1F8BA7',
    fontSize: 13,
    lineHeight: 15,
  },
  hitsItem: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 16,
  },
  hitsDiscount: {
    backgroundColor: '#21B727',
    opacity: 0.7,
    borderRadius: 5,
    paddingLeft: 7,
    paddingRight: 7,
    paddingTop: 1,
    paddingBottom: 1,
    width: 69,
  },
  hitsDiscountText: {
    color: '#fff',
    fontSize: 9,
  },
  hitsImage: {
    width: 120,
    height: 70,
    marginLeft: -10,
    marginBottom: 4,
  },
  hitsName: {
    fontSize: 11,
  },
  hitsPrices: {
    flexDirection: 'row',
    marginTop: 4,
    marginBottom: 8,
  },
  hitsOldPrice: {
    fontSize: 11,
    color: '#999999',
    textDecorationLine: 'line-through'
  },
  hitsPrice: {
    fontSize: 11,
    color: '#1F8BA7',
    marginLeft: 16,
  },
  hitsBtn: {
    backgroundColor: '#4BCCED',
    borderRadius: 10,
  },
  hitsBtnText: {
    fontSize: 9,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 8,
    paddingBottom: 8,
  },
  appInfo: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 5,
    marginTop: 10
  },
  appInfoText: {
    fontSize: 15,
    lineHeight: 17,
    marginBottom: 24,
  }
});
