import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Location from './../assets/farms/location.svg'

import {farm} from "../styles/farm";

function Farm({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={farm.container}>

        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.85} style={farm.farmCard} onPress={()=> navigation.navigate('FarmInfo') }>
          <Image style={farm.farmImg} source={require('./../assets/farms/farmLogo.png')}/>
          <View>
            <Text style={farm.farmName}>Фармамир 9мкр</Text>
            <Text style={farm.farmCount}>ул.Советская 233 9 мкрн д.10</Text>
            <View style={farm.farmLocation}>
              <Location style={{marginRight: 8}} />
              <Text style={farm.farmClose}>4 КМ от вас</Text>
            </View>
          </View>
          <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
            <Text style={farm.farmFindText}>Открыть</Text>
          </TouchableOpacity>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

export default Farm;
