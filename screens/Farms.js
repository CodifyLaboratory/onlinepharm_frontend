import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TouchableWithoutFeedback } from 'react-native';
import { Touchable } from 'react-native-web';


const Farms = ({navigation}) => {

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={styles.container}>

        <TouchableOpacity activeOpacity={0.85} style={styles.farmCard} onPress={()=> navigation.navigate('Farm') }>
            <Image style={styles.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
            <View>
              <Text style={styles.farmName}>Аптека 103</Text>
              <Text style={styles.farmCount}>Кол-во аптек: 8</Text>
              <Text style={styles.farmClose}>Аптеки рядом с вами</Text>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={styles.farmFind}>
              <Text style={styles.farmFindText}>Найти</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={styles.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={styles.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={styles.farmName}>Аптека 103</Text>
            <Text style={styles.farmCount}>Кол-во аптек: 8</Text>
            <Text style={styles.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.farmFind}>
            <Text style={styles.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={styles.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={styles.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={styles.farmName}>Аптека 103</Text>
            <Text style={styles.farmCount}>Кол-во аптек: 8</Text>
            <Text style={styles.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.farmFind}>
            <Text style={styles.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={styles.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={styles.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={styles.farmName}>Аптека 103</Text>
            <Text style={styles.farmCount}>Кол-во аптек: 8</Text>
            <Text style={styles.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.farmFind}>
            <Text style={styles.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={styles.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={styles.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={styles.farmName}>Аптека 103</Text>
            <Text style={styles.farmCount}>Кол-во аптек: 8</Text>
            <Text style={styles.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.farmFind}>
            <Text style={styles.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={styles.farmCard} onPress={()=> navigation.navigate('Farm') }>
          <Image style={styles.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={styles.farmName}>Аптека 103</Text>
            <Text style={styles.farmCount}>Кол-во аптек: 8</Text>
            <Text style={styles.farmClose}>Аптеки рядом с вами</Text>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={styles.farmFind}>
            <Text style={styles.farmFindText}>Найти</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E6EFF9',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 30,
    paddingBottom: 16,
  },
  farmCard: {
    width: 327,
    height: 115,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  farmImg: {
    height: 70,
    width: 70,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F3F3F3',
  },
  farmName: {
    color: '#1F8BA7',
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 9,

  },
  farmCount: {
    color: '#999',
    fontSize: 11,
    marginBottom: 10
  },
  farmClose: {
    color: '#999',
    fontSize: 13,
  },
  farmFind: {
    backgroundColor: '#4BCCED',
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 8,
    marginBottom: -54
  },
  farmFindText: {
    color: '#fff',
  }
});


export default Farms;

