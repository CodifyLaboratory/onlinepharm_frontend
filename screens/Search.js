import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Platform} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import {Input} from 'react-native-elements';
import SearchImg from '../assets/search/search.svg'

const Search = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Input
          keyboardType='default'
          rightIcon={
            <Icon
              name='search'
              size={30}
              color='#1A1717'
            />
          }
          inputStyle={{fontSize: 15,}}
          inputContainerStyle={styles.input}
        />
        <View style={styles.searchLogo}>
          <SearchImg style/>
          <Text style={styles.searchLogoText}> Найдите желаемый продукт</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: Platform.OS == 'android' ? 60 : 0,
    height: '100%'
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#999999',
    height: 50,
    paddingLeft: 20,
    paddingRight: 15,
    borderRadius: 9,
  },
  searchLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  searchLogoText: {
    fontSize: 18,
    marginTop: 45,
    color: '#999999',
  }
});

export default Search;