import React from 'react';
import {news} from "../styles/news";
import {Image, Text, TouchableOpacity, View} from "react-native";

const NewsCard = ({navigation, data}) => {
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('NewsInfo', data)
    }} style={news.farmCard}
                      activeOpacity={0.85}
                      key={data.id}
    >
      <View style={news.farmCardInfo}>
        <View style={news.nameFarm}>
          <Text style={news.title}>Аптека:</Text>
          <Text style={news.farmName}>{data.pharmacy.title}</Text>
        </View>
        <Text style={news.farmDesc}>{data.title}</Text>
        <Text style={news.farmDate}>31 марта</Text>
        <TouchableOpacity style={news.farmCardBtn}>
          <Text style={news.farmCardBtnText}>Подробнее</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={news.farmCardImage}
        source={
          data.medication.image ?
            {uri: data.medication.image}
            :
          require('../assets/news/cardLogo.png')
        }

      />
    </TouchableOpacity>
  );
};

export default NewsCard;