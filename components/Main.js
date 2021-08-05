import React, {useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity, Image} from "react-native";
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
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
  },
  container: {
    flex: 1,
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
  }
});
