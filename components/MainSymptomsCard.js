import React from 'react';
import {main} from "../styles/main";
import {Image, Text, View, TouchableOpacity} from "react-native";

const MainSymptomsCard = ({data, navigation}) => {
  return (
    <TouchableOpacity style={main.symptomsSliderElem} onPress={() => navigation.navigate('SelectionInfo', data.id)}>
      <Image style={{width: 36, height: 36}} source={{ uri: data.image }}/>
      <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13, marginTop: 11,}}>{data.title}</Text>
    </TouchableOpacity>
  );
};

export default MainSymptomsCard;