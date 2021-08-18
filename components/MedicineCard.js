import React from 'react';
import {View, TouchableOpacity, Image, Text} from 'react-native';
import {myMedicine} from "../styles/components/myMedicine";

function MedicineCard({navigation}) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={myMedicine.medicineCard} >
      <Image style={myMedicine.img} source={require('./../assets/medicine/medicineLogo.png')}/>
      <View>
        <Text style={myMedicine.name}>Масло черного тмина</Text>
        <Text style={myMedicine.desc}>Лекарственные препараты:</Text>
          <Text style={myMedicine.category}>Масло</Text>
      </View>
      <TouchableOpacity activeOpacity={0.6} style={myMedicine.find}>
        <Text style={myMedicine.findText}>Подробнее</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

export default MedicineCard;