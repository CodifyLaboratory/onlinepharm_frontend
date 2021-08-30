import React from 'react';
import {main} from "../main";
import {Image, Text, View} from "react-native";

const MainSymptomsCard = () => {
  return (
    <View style={main.symptomsSliderElem}>
      <Image style={{width: 36, height: 36}} source={require('../../assets/main/symptomsLogo.png')}/>
      <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13, marginTop: 11,}}>Головная боль</Text>
    </View>
  );
};

export default MainSymptomsCard;