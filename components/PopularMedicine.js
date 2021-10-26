import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Text} from 'react-native'
import Stars from 'react-native-stars';

const PopularMedicine = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image style={styles.image} source={{uri: data?.image}}/>
      </View>
      <View style={styles.bottom}>
        <Text style={styles.title}>{data?.title}</Text>
        <View style={{alignItems: 'flex-start', marginLeft: -5, marginBottom: 8}}>
          <Stars
            display={data?.middle_star}
            spacing={8}
            count={5}
            starSize={15}
            fullStar={require('./../assets/icons/fullStar.png')}
            emptyStar={require('./../assets/icons/emptyStar.png')}
          />
        </View>
        <Text style={styles.price}>Цена от: <Text style={styles.soms}>{data?.price} c</Text></Text>

        <TouchableOpacity style={styles.detailsBtn}>
          <Text style={styles.detailsBtnText}>Подробнее</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.cartBtn}>
          <Text style={styles.cartBtnText}>В корзину</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PopularMedicine;


const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 280,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginRight: 9
  },
  top: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  },
  bottom: {
    flex: 0.6,
    padding: 8
  },
  title: {
    fontSize: 14,
    color: '#4B4747',
    marginBottom: 10,
  },
  price: {
    color: '#999999',
    fontSize: 14,
    marginBottom: 16,
  },
  soms: {
    color: '#1F8BA7',
    fontSize: 14,
    marginLeft: 6,
  },
  detailsBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 140,
    borderWidth: 1,
    borderColor: '#4BCCED',
    borderRadius: 8,
    marginBottom: 8,
  },
  detailsBtnText: {
    color: '#4BCCED',
    fontSize: 14,
  },
  cartBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    width: 140,
    borderRadius: 8,
    backgroundColor: '#4BCCED'
  },
  cartBtnText: {
    color: '#ffffff'
  }
})
