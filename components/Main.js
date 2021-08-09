import React, {useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback, Image} from "react-native";
import Carousel from 'react-native-snap-carousel';
import Banner from '../assets/main/baner.svg'
import Logo from '../assets/header/logo.svg'
import Arrow from '../assets/header/arrow.svg'
import SelectDropdown from 'react-native-select-dropdown'
import CartHeader from '../assets/header/Cart.svg'
import SearchHeader from '../assets/header/search.svg'

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
  ])

  const countries = ["Бишкек", "Ош", "Кант", "Токмок"]


  function _renderItem({item, index}) {
    return (
      <View style={styles.banner}>
        <View>
          <Banner/>
        </View>
      </View>
    )
  }

  function farmItem() {
    return (
      <View style={styles.farmSliderElem}>
        <Image style={{width: 118, height: 90}} source={require('./../assets/main/farmLogo.png')} />
        <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13}}>Новая аптека</Text>
      </View>
    )
  }

  function symptomsItem() {
    return (
      <View style={styles.symptomsSliderElem}>
        <Image style={{width: 36, height: 36}} source={require('./../assets/main/symptomsLogo.png')} />
        <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13, marginTop: 11,}}>Головная боль</Text>
      </View>
    )
  }

  return (
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
            )
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
            marginTop: -10,
          }}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index)
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem
          }}
          rowTextForSelection={(item, index) => {
            return item
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
        // autoplay={true}
        // autoplayDelay={1000}
        // autoplayInterval={1000}
      />

      <View>
        <View style={styles.farmSlider}>
          <Text>Аптеки</Text>
          <TouchableWithoutFeedback onPress={()=> alert('heh zdarova')}>
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

        <View style={styles.farmSlider}>
          <Text>Симптомы</Text>
          <TouchableWithoutFeedback onPress={()=> alert('heh zdarova')}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
  container: {
    paddingRight: 16,
    paddingLeft: 16,
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
  cart : {
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
  farmSlider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16
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
    alignItems: "center"
  }
});
