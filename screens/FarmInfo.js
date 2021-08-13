import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';

function FarmInfo(props) {
  return (
    <ScrollView>

      <View style={styles.container}>
        <Image height={46} width={205} style={styles.logo} source={require('./../assets/farms/FarmInfoLogo.png')}/>
        <Text style={styles.date}>График работы:</Text>
        <Text style={styles.time}>Круглосуточно 24/7</Text>
        <Text style={styles.date}>Контакты:</Text>
        <Text style={styles.contacts}>+996 555 323 145</Text>
        <Text style={styles.contacts}>+996 700 122 478</Text>
        <Text style={styles.date}>Адрес:</Text>
        <Text style={styles.time}>ул.Советская 233 / 9 мкрн д.10</Text>
      </View>

    </ScrollView>
  );
}

export default FarmInfo;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingLeft:16,
    paddingRight: 16
  },
  logo: {
    marginBottom: 31
  },
  date: {
    color: "#999999",
    fontSize: 15,
    marginBottom: 8,
  },
  time: {
    fontSize: 17,
    color: '#1F8BA7',
    marginBottom: 24,
  },
  contacts: {
    fontSize: 17,
    color: '#1F8BA7',
    marginBottom: 16,
  }
})