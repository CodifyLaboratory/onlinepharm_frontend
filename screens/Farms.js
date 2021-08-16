import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Touchable } from 'react-native-web';
import {farms} from "../styles/farms";


const Farms = ({navigation}) => {

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={farms.container}>

        <TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>
            <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
            <View>
              <Text style={farms.farmName}>Аптека 103</Text>
              <Text style={farms.farmCount}>Кол-во аптек: 8</Text>
              <Text style={farms.farmClose}>Аптеки рядом с вами</Text>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>
              <Text style={farms.farmFindText}>Найти</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farms.farmName}>Аптека 103</Text>
            <Text style={farms.farmCount}>Кол-во аптек: 8</Text>
            <Text style={farms.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>
            <Text style={farms.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farms.farmName}>Аптека 103</Text>
            <Text style={farms.farmCount}>Кол-во аптек: 8</Text>
            <Text style={farms.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>
            <Text style={farms.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farms.farmName}>Аптека 103</Text>
            <Text style={farms.farmCount}>Кол-во аптек: 8</Text>
            <Text style={farms.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>
            <Text style={farms.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farms.farmName}>Аптека 103</Text>
            <Text style={farms.farmCount}>Кол-во аптек: 8</Text>
            <Text style={farms.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>
            <Text style={farms.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farms.farmName}>Аптека 103</Text>
            <Text style={farms.farmCount}>Кол-во аптек: 8</Text>
            <Text style={farms.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>
            <Text style={farms.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

export default Farms;

