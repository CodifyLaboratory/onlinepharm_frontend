import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';


const BrandCard = ({navigation, data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.imageBox}>
          <Image style={styles.image} source={{uri: data?.logo}} />
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.name}>{data?.title}</Text>
        <Text style={styles.count}>Количество аптек: <Text style={styles.number}> {data?.pharmacy_count}</Text> </Text>
        <TouchableOpacity
          style={styles.see}
          onPress={() => navigation.navigate('Farms')}
        >
          <Text style={styles.seeText}>Смотреть все</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BrandCard;


const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 110,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    marginBottom: 16,
  },
  left: {
    marginRight: 22,
    flex: .2
  },
  right: {
    flex: .8
  },
  imageBox: {
    width: 72,
    height: 72,
    borderWidth: 1,
    borderColor: '#F3F3F3',
    borderRadius: 20,
  },
  image: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
  },
  name: {
    fontSize: 15,
    color: '#1F8BA7',
    marginBottom: 6
  },
  count: {
    color: '#999999',
    fontSize: 11,
    marginBottom: 20,
  },
  number: {
    fontSize: 13,
    color: '#4B4747'
  },
  see: {
    width: '100%',
    alignItems: 'flex-end'
  },
  seeText: {
    color: '#1F8BA7',
    fontSize: 12,
    textDecorationLine: 'underline',
    paddingBottom: 2,
  }
})