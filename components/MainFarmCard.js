import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import {main} from "../styles/main";

const MainFarmCard = ({navigation, data}) => {
  return (
    <TouchableOpacity
      style={main.farmSliderElem}
      activeOpacity={0.7}
      onPress={()=> navigation.navigate('Farms', data.id) }
    >
      <Image
        style={{
          width: 118,
          height: 90,
          marginTop: 7,
          marginBottom: 7,
          resizeMode: 'contain'
        }}
        source={
          data.logo ?
            {uri: data.logo}
            :
          require('../assets/main/farmLogo.png')

        }/>
      <Text style={{color: '#1F8BA7', fontSize: 11, lineHeight: 13}}>{data.title}</Text>
    </TouchableOpacity>
  );
};

export default MainFarmCard;