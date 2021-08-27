import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Platform} from "react-native";

import {newsInfo} from '../styles/newsInfo'
import axios from "axios";

function NewsInfo({route}) {

  let data = route.params

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView>
        <View style={newsInfo.container}>
          <Text style={newsInfo.title}>{data.title}</Text>
          <Text style={newsInfo.date}>с 15 до 21 апреля</Text>
          <View style={newsInfo.preview}>
            <Image
              style={newsInfo.previewImg}
              source={
                data.medication.image ?
                  {uri: data.medication.image}
                  :
                require('../assets/newsItem/Preview.png')
              }

            />
          </View>
          <Text style={newsInfo.text} >{data.medication.category.category.title}:</Text>
          <Text style={newsInfo.destiny}>{data.medication.category.title}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default NewsInfo;