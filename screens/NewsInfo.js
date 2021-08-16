import React from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Platform} from "react-native";

import {newsInfo} from '../styles/newsInfo'

function NewsInfo() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView>
        <View style={newsInfo.container}>
          <Text style={newsInfo.title}>Скидка 20% на Гептрал</Text>
          <Text style={newsInfo.date}>с 15 до 21 апреля</Text>
          <View style={newsInfo.preview}>
            <Image style={newsInfo.previewImg} source={require('../assets/newsItem/Preview.png')}/>
          </View>
          <Text style={newsInfo.text} >Лекарственные препараты:</Text>
          <Text style={newsInfo.destiny}>Влияющие на функцию печени</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default NewsInfo;