import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View, Text, Image } from 'react-native';
import MapView, { Marker, CalloutSubview, Callout } from 'react-native-maps';
import MarkerSvg from './../assets/marker2.svg'
import PhoneSvg from './../assets/phoneIcon.svg'
import ClockIcon from './../assets/clockIcon.svg'


function Map() {
  const [descStatus, setDescStatus] = useState()
  const changeStatus = () => setDescStatus(!descStatus)
  return (
    <SafeAreaView>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        initialRegion={{
          latitude: 42.87337485103548,
          longitude:  74.58667559756323,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}

      >
        <Marker
          coordinate={{
            latitude: 42.87337485103548,
            longitude:  74.58667559756323,
          }}
          onPress={changeStatus}
          style={styles.marker}
        >
          {
            descStatus ?
              <View style={styles.description}>
                <View style={styles.box}>
                  <MarkerSvg />
                  <Text style={styles.text}>ул. 8 марта, 62</Text>
                </View>
                <View style={styles.box}>
                  <PhoneSvg />
                  <Text style={styles.text}>+996 755 65 43 57</Text>
                </View>
                <View style={styles.box}>
                  <ClockIcon />
                  <Text style={styles.text}>Сегодня 08:00 - 18:00</Text>
                </View>
              </View>
              :
              <Image source={require('./../assets/marker.png')} style={{height: 35, width:35 }} />
          }
        </Marker>
      </MapView>
    </SafeAreaView>
  )
}
export default Map;


const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 40,
  },
  description: {
    width: 200,
    height: 100,
    backgroundColor: '#1F8BA7',
    borderRadius: 10,
    // marginBottom: 20,
    padding: 12,
    zIndex: 12,
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
  }
})