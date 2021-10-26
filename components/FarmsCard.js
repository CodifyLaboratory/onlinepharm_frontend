import React, { useState } from 'react';
import { farms } from '../styles/farms';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const FarmsCard = ({ navigation, data }) => {
  const [favorite, setFavorite] = useState(false)
  const changeFavorite = () => setFavorite(!favorite)


  return (
    <View
      style={farms.farmCard}
    >
      <Image style={farms.farmImg} source={{ uri: data?.pharmacy_profile?.logo }}/>
      <View style={{ marginLeft: 16 }}>
        <Text style={farms.farmName}>{data?.pharmacy_profile?.title}</Text>
        <Text style={farms.farmAdress}>{data?.location?.address}</Text>
        <Text style={farms.farmClose}>4 км от вас</Text>
      </View>
      <View style={{alignItems: 'space-between', height: '100%'}}>
        <TouchableOpacity onPress={changeFavorite}>
          <Image
            style={farms.farmImage}
            source={
              favorite ?
                require('./../assets/icons/fullHeart.png')
                :
              require('./../assets/icons/emptyHeart.png')
            } />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={farms.farmFind}
          onPress={() => navigation.navigate('FarmInfo', data.id)}
        >
          <Text style={farms.farmFindText}>Подробнее</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

export default FarmsCard;