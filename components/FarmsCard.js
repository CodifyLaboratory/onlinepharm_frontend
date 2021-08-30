import React from 'react';
import {farms} from "../styles/farms";
import {Image, Text, TouchableOpacity, View} from "react-native";

const FarmsCard = ({navigation, data}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={farms.farmCard}
      onPress={()=> navigation.navigate('Farm', data.id) }
    >
      <Image style={farms.farmImg} source={{uri: data.logo}}/>
      <View>
        <Text style={farms.farmName}>{data.title}</Text>
        <Text style={farms.farmCount}>Кол-во аптек: {data.branch_number}</Text>
        <Text style={farms.farmClose}>Аптеки рядом с вами</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>
        <Text style={farms.farmFindText}>Найти</Text>
      </TouchableOpacity>

    </TouchableOpacity>
  );
};

export default FarmsCard;