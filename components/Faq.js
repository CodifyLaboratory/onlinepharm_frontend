import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { style } from 'styled-system';
import Arrow from './../assets/icons/arrow.svg'



export default function Faq() {
const [faqStatus, setFaqStatus] = useState(false)

  return (
    <TouchableOpacity 
    style={styles.container} 
    activeOpacity={0.6}
    onPress={() => setFaqStatus(!faqStatus)}
    >
      <View style={faqStatus ? styles.infoOpened : styles.infoClosed}> 
        <Text style={styles.infoTitle}>Форма выпуска, упаковка и состав</Text>  
        <Arrow />
      </View> 
      {
        faqStatus ?
        <View>
          <Text>
            [гипромеллоза - 7.5 мг, гипролоза (гидроксипропилцеллюлоза) - 
            2.91 мг, тальк - 2.89 мг, титана диоксид - 1.63 мг, краситель
            железа оксид желтый (оксид желтый) - 0.07 мг] или [сухая смесь
            для пленочного покрытия, содержащая гипромеллозу - 50%, гипролозу
            (гидроксипропилцеллюлозу) - 19.4%, тальк - 19.26%, титана диоксид
            - 10.87%, краситель железа оксид желтый (оксид желтый) - 0.47%] - 15 мг.
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
