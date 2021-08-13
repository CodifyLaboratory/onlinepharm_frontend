import React from 'react';
import {View, Text, ScrollView, SafeAreaView, Image, StyleSheet, Platform} from "react-native";

function NewsInfo() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>Скидка 20% на Гептрал</Text>
          <Text style={styles.date}>с 15 до 21 апреля</Text>
          <View style={styles.preview}>
            <Image style={styles.previewImg} source={require('../assets/newsItem/Preview.png')}/>
          </View>
          <Text style={styles.text} >Лекарственные препараты:</Text>
          <Text style={styles.destiny}>Влияющие на функцию печени</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 16,
    paddingLeft: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#26374B',
    marginBottom: 8,
    marginTop: 6,
  },
  date: {
    fontSize: 15,
    fontWeight: '500',
    color: '#26374B',
    marginBottom: 14,
  },
  text: {
    fontSize: 17,
    fontWeight: '500',
    color: '#7D8793',
    marginBottom: 4,
    marginTop: 20,
  },
  destiny: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1F8BA7',
  }
});

export default NewsInfo;