import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {farmInfo} from "../styles/farmInfo";


function FarmInfo({navigation}) {
  return (
    <ScrollView>

      <View style={farmInfo.container}>
        <Image height={46} width={205} style={farmInfo.logo} source={require('./../assets/farms/FarmInfoLogo.png')}/>
        <Text style={farmInfo.date}>График работы:</Text>
        <Text style={farmInfo.time}>Круглосуточно 24/7</Text>
        <Text style={farmInfo.date}>Контакты:</Text>
        <Text style={farmInfo.contacts}>+996 555 323 145</Text>
        <Text style={farmInfo.contacts}>+996 700 122 478</Text>
        <Text style={farmInfo.date}>Адрес:</Text>
        <Text style={farmInfo.time} onPress={() => navigation.navigate('Map')}>ул.Советская 233 / 9 мкрн д.10</Text>
      </View>

    </ScrollView>
  );
}

export default FarmInfo;

const styles = StyleSheet.create({

})