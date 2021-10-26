import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { style } from 'styled-system';
import Arrow from './../assets/icons/arrow.svg'



export default function Faq({title, data}) {
const [faqStatus, setFaqStatus] = useState(false)

  return (
    <TouchableOpacity 
    style={styles.container} 
    activeOpacity={0.6}
    onPress={() => setFaqStatus(!faqStatus)}
    >
      <View style={faqStatus ? styles.infoOpened : styles.infoClosed}> 
        <Text style={styles.infoTitle}>{title}</Text>
        <Arrow />
      </View> 
      {
        faqStatus ?
        <View>
          <Text>
            {data}
          </Text>
        </View>
        : null
      } 
      
    </TouchableOpacity>
  );

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ECEEEF',
    borderRadius: 10,
    marginBottom: 8
  },
  infoOpened: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  infoClosed: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  infoTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  openStar: {
    transform: [{ rotate: 180 }]
  }
})
