import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
import Banner from '../assets/main/baner.svg';
import Carousel from 'react-native-snap-carousel';


function CategoriesMedicines() {
  const [ slideElem, setSlideElem ] = useState([
    {
      text: 1,
    },
    {
      text: 2,
    },
    {
      text: 3,
    },
    {
      text: 3,
    }
  ]);

  function _renderItem({ item, index }) {
    return (
      <View style={styles.banner}>
        <View>
          <Banner/>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: '#E6EFF9' }}>
      <SafeAreaView style={styles.container}>
        <Carousel
          layout={'default'}
          inactiveSlideScale={1}
          windowSize={1}
          data={slideElem}
          renderItem={_renderItem}
          sliderWidth={430}
          itemWidth={343}
          slideStyle={{
            marginRight: 20,
          }}
        />

        <View style={styles.medicineContainer}>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={styles.medicineCard}>
            <Image style={styles.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={styles.medicineName}>Капсикам</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default CategoriesMedicines;

const styles = StyleSheet.create({
  text: {
    color: 'red',
  },
  container: {
    backgroundColor: '#E6EFF9',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: Platform.OS == 'android' ? 21 : 0
  },
  banner: {
    borderRadius: 20,
    marginLeft: -45,
  },
  medicineContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'center'
  },
  medicineCard: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 9,
    marginRight: 5,
    marginLeft: 5,
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
  medicineImage:  {
    width: 70,
    height: 44
  },
  medicineName: {
    fontSize: 9,
    color: '#1A1717',
    fontWeight: 'bold'
  }

});