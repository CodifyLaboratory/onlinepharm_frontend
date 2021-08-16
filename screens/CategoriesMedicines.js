import React, { useState } from 'react';
import { View, TouchableOpacity, Image, ScrollView, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
import Banner from '../assets/main/baner.svg';
import Carousel from 'react-native-snap-carousel';
import {categoriesMedicines} from "../styles/categoriesMedicines";



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
      <View style={categoriesMedicines.banner}>
        <View>
          <Banner/>
        </View>
      </View>
    );
  }

  return (
    <ScrollView style={{ backgroundColor: '#E6EFF9' }}>
      <SafeAreaView style={categoriesMedicines.container}>
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

        <View style={categoriesMedicines.medicineContainer}>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} style={categoriesMedicines.medicineCard}>
            <Image style={categoriesMedicines.medicineImage} source={require('./../assets/farms/medicineLogo.png')} />
            <Text style={categoriesMedicines.medicineName}>Капсикам</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default CategoriesMedicines;
