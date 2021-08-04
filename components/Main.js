
import React, {useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Carousel from 'react-native-snap-carousel';
import {useScrollToTop} from "@react-navigation/native";





export default function Main({ navigation }) {
  const [slideElem, setSlideElem] = useState([
    {
      text: 1,
    },
    {
      text: 2,
    }
  ])

  function _renderItem ({item, index}){
    return (
      <View style={styles.banner}>
        <Image source={require('../assets/main/baner.png')} />
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Carousel
        layout={'default'}
        inactiveSlideScale={1}
        windowSize={1}
        data={slideElem}
        renderItem={_renderItem}
        sliderWidth={360}
        itemWidth={343}
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
    alignItems: 'center'
  },
  button: {
    borderRadius: 20,
    backgroundColor: "red",
    color: "#fff",
    padding: 10,
  },
  banner: {
    borderRadius: 20,
  },
});
