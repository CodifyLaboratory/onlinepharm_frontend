import React, {useEffect, useMemo, useState} from 'react';
import { View, ScrollView } from 'react-native';
import {farms} from "../styles/farms";
import axios from "axios";
import FarmsCard from "../components/FarmsCard";


const Farms = ({navigation}) => {

  const [pharmacies, setPharmacies] = useState([])

  useEffect(() => {
    axios
      .get('http://164.90.192.245/pharmacies/')
      .then(res => setPharmacies(res.data))
  }, [])

  console.log(pharmacies)

  const farmsList = useMemo(
    () =>
    pharmacies
    .map((item) => (
      <FarmsCard
        key={item.id}
        navigation={navigation}
        data={item}
      />
      )
    )
    ,[pharmacies]
)

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={farms.container}>

        {farmsList}


        {/*<TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>*/}
        {/*  <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>*/}
        {/*  <View>*/}
        {/*    <Text style={farms.farmName}>Аптека 103</Text>*/}
        {/*    <Text style={farms.farmCount}>Кол-во аптек: 8</Text>*/}
        {/*    <Text style={farms.farmClose}>Аптеки рядом с вами</Text>*/}
        {/*  </View>*/}
        {/*  <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>*/}
        {/*    <Text style={farms.farmFindText}>Найти</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>*/}
        {/*  <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>*/}
        {/*  <View>*/}
        {/*    <Text style={farms.farmName}>Аптека 103</Text>*/}
        {/*    <Text style={farms.farmCount}>Кол-во аптек: 8</Text>*/}
        {/*    <Text style={farms.farmClose}>Аптеки рядом с вами</Text>*/}
        {/*  </View>*/}
        {/*  <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>*/}
        {/*    <Text style={farms.farmFindText}>Найти</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>*/}
        {/*  <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>*/}
        {/*  <View>*/}
        {/*    <Text style={farms.farmName}>Аптека 103</Text>*/}
        {/*    <Text style={farms.farmCount}>Кол-во аптек: 8</Text>*/}
        {/*    <Text style={farms.farmClose}>Аптеки рядом с вами</Text>*/}
        {/*  </View>*/}
        {/*  <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>*/}
        {/*    <Text style={farms.farmFindText}>Найти</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>*/}
        {/*  <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>*/}
        {/*  <View>*/}
        {/*    <Text style={farms.farmName}>Аптека 103</Text>*/}
        {/*    <Text style={farms.farmCount}>Кол-во аптек: 8</Text>*/}
        {/*    <Text style={farms.farmClose}>Аптеки рядом с вами</Text>*/}
        {/*  </View>*/}
        {/*  <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>*/}
        {/*    <Text style={farms.farmFindText}>Найти</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*</TouchableOpacity>*/}
        {/*<TouchableOpacity activeOpacity={0.85} style={farms.farmCard} onPress={()=> navigation.navigate('Farm') }>*/}
        {/*  <Image style={farms.farmImg} source={require('./../assets/farms/farmLogo.png')}/>*/}
        {/*  <View>*/}
        {/*    <Text style={farms.farmName}>Аптека 103</Text>*/}
        {/*    <Text style={farms.farmCount}>Кол-во аптек: 8</Text>*/}
        {/*    <Text style={farms.farmClose}>Аптеки рядом с вами</Text>*/}
        {/*  </View>*/}
        {/*  <TouchableOpacity activeOpacity={0.6} style={farms.farmFind}>*/}
        {/*    <Text style={farms.farmFindText}>Найти</Text>*/}
        {/*  </TouchableOpacity>*/}
        {/*</TouchableOpacity>*/}

      </View>
    </ScrollView>
  );
};

export default Farms;

