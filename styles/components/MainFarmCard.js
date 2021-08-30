import React from 'react';
import {Image, Text, View} from "react-native";
import {main} from "../main";

const MainFarmCard = () => {
  return (
    <View style={main.farmSliderElem}>
      <Image style={{width: 118, height: 90}} source={require('../../assets/main/farmLogo.png')}/>
      <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13}}>Новая аптека</Text>
    </View>
  );
};

export default MainFarmCard;