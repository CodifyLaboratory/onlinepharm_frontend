import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Text, Image, TouchableOpacity,Pressable } from 'react-native';
import MapView, { Marker, CalloutSubview, Callout } from 'react-native-maps';
import MarkerSvg from './../assets/marker2.svg'
import PhoneSvg from './../assets/phoneIcon.svg'
import ClockIcon from './../assets/clockIcon.svg'

const CustomMarker = ({item, navigation}) => {
  const [descStatus, setDescStatus] = useState(true)

  const changeStatus = () => setDescStatus(!descStatus)

  return (
    <Marker
      coordinate={{
        latitude: item?.location?.latitude,
        longitude: item?.location?.longitude,
      }}
      // onPress={changeStatus}
      style={styles.marker}
      key={item.id}
    >
      {
        descStatus ?
          <View style={styles.description}>
            <View style={styles.box}>
              <MarkerSvg />
              <Text style={styles.text}>{item?.location?.address}</Text>
            </View>
            <View style={styles.box}>
              <PhoneSvg />
              <Text style={styles.text}>+996 755 65 43 57</Text>
            </View>

            <View style={styles.box}>
              <ClockIcon />
              <Text style={styles.text}>Сегодня 08:00 - 18:00</Text>
            </View>

            <Pressable
              style={styles.btn}
              onPress={() => {
                navigation.navigate('FarmInfo', item?.pharmacy_profile?.id)
              }}
            >
              <Text style={styles.textBtn}>Подробнее</Text>
            </Pressable>

          </View>
          :
          <Image source={require('./../assets/marker.png')} style={{height: 35, width:35 }} />
      }
    </Marker>
  );
};

export default CustomMarker;

const styles = StyleSheet.create({
  marker: {
    height: 130,
    zIndex: 1,
  },
  description: {
    width: 200,
    height: 100,
    backgroundColor: '#1F8BA7',
    borderRadius: 10,
    padding: 6,
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 9,
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    marginLeft: 10,
  },
  btn: {
    marginLeft: 8,
    alignItems: 'center',
    justifyContent: 'center',
    width: 90,
    height: 20,
    position: 'relative',
    zIndex: 99,
  },
  textBtn: {
    color: '#ffffff',
    fontSize: 11,
    marginTop: -5
  }
})