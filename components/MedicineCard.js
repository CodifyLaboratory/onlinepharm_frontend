import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { myMedicine } from '../styles/components/myMedicine';
import CartWhite from './../assets/icons/cartWhiteSmall.svg';

function MedicineCard({ navigation }) {

  const [favorite, setFavorite] = useState(false)

  const changeFavorite = () => {
    setFavorite(!favorite);
    console.log(favorite);
  }

  return (
    <View activeOpacity={0.85} style={myMedicine.medicineCard}>
      <Image style={myMedicine.img} source={require('./../assets/medicine/medicineLogo.png')}/>
      <View>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={myMedicine.name}>Масло черного тмина</Text>
            <Text style={myMedicine.category}>Цена от: <Text style={myMedicine.price}>200c</Text> </Text>
          </View>
          <TouchableOpacity onPress={changeFavorite}>
            <Image
              style={myMedicine.heart}
              source={
                favorite ?
                  require('./../assets/icons/fullHeart.png')
                  :
                  require('./../assets/icons/emptyHeart.png')
              }
            />
          </TouchableOpacity>

        </View>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity activeOpacity={0.6} style={myMedicine.find}>
            <Text style={myMedicine.findText}>Подробнее</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.6} style={myMedicine.favorite}>
            <Text style={myMedicine.favoriteText}>В корзину</Text>
            <CartWhite/>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

export default MedicineCard;