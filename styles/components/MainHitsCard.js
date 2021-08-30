import React from 'react';
import {main} from "../main";
import {Image, Text, TouchableOpacity, View} from "react-native";

const MainHitsCard = () => {
  return (
    <View style={main.hitsItem}>
      <View style={main.hitsDiscount}>
        <Text style={main.hitsDiscountText}>50% скидка</Text>
      </View>
      <Image style={main.hitsImage} source={require('../../assets/main/hitsLogo.png')}/>
      <Text style={main.hitsName}>Азитромицин Вертекс</Text>
      <View style={main.hitsPrices}>
        <Text style={main.hitsOldPrice}>50с</Text>
        <Text style={main.hitsPrice}>25с</Text>
      </View>
      <TouchableOpacity style={main.hitsBtn} activeOpacity={0.8}>
        <Text style={main.hitsBtnText}>Добавить в корзину</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MainHitsCard;