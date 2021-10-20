import React from 'react';
import {news} from "../styles/news";
import {Image, Text, TouchableOpacity, View} from "react-native";
import NewsIcon from './../assets/icons/newsFarmIcon.svg'

const NewsCard = ({navigation, data}) => {
  var re = /-/gi;
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsInfo', data)
    }} style={news.farmCard}
                      activeOpacity={0.85}
                      key={data.id}
    >
      <View style={news.farmCardInfo}>
        <View style={news.nameFarm}>
          <NewsIcon />
          <Text style={news.farmName}>{data.pharmacy.title}</Text>
        </View>
        <Text style={news.farmDesc}>{data.title}</Text>
        <Text style={news.farmDate}>с {data.start_date.replace(re, '.')} по {data.end_date.replace(re, '.')}</Text>
        <TouchableOpacity style={news.farmCardBtn}>
          <Text style={news.farmCardBtnText}>Подробнее</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={news.farmCardImage}
        source={
          data.image ?
            {uri: data.image}
            :
          require('../assets/news/cardLogo.png')
        }

      />
    </TouchableOpacity>
  );
};

export default NewsCard;