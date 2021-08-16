import React from "react";
import {View, StyleSheet, Text, SafeAreaView, Platform} from "react-native";
import Icon from 'react-native-vector-icons/EvilIcons';
import {Input} from 'react-native-elements';
import SearchImg from '../assets/search/search.svg'
import {search} from "../styles/search";

const Search = () => {
  return (
    <SafeAreaView>
      <View style={search.container}>
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
          inputContainerStyle={search.input}
        />
        <View style={search.searchLogo}>
          <SearchImg style/>
          <Text style={search.searchLogoText}> Найдите желаемый продукт</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}


export default Search;