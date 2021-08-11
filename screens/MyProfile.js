import React from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';

export default function MyProfile() {

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image style={styles.profileAvatar} source={require('../assets/profile/avatar.png')} />
        <Input
          keyboardType='default'
          label={'Имя'}
          labelStyle={styles.label}
          rightIcon={
            <Icon
              name='pen'
              size={14}
              color='#cccccc'
            />
          }
          inputStyle={{fontSize: 14,}}
          inputContainerStyle={styles.input}
        />
        <Input
          keyboardType='email-address'
          label={'Email'}
          labelStyle={styles.label}
          rightIcon={
            <Icon
              name='pen'
              size={14}
              color='#cccccc'
            />
          }
          inputStyle={{fontSize: 14,}}
          inputContainerStyle={styles.input}
        />
        <Input
          keyboardType='numeric'
          label={'Телефон'}
          labelStyle={styles.label}
          rightIcon={
            <Icon
              name='pen'
              size={14}
              color='#cccccc'
            />
          }
          inputStyle={{fontSize: 14,}}
          inputContainerStyle={styles.input}
        />
        <Input
          keyboardType='default'
          label={'Адрес'}
          labelStyle={styles.label}
          rightIcon={
            <Icon
              name='pen'
              size={14}
              color='#cccccc'
            />
          }
          inputStyle={{fontSize: 14,}}
          inputContainerStyle={styles.input}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6EFF9',
    paddingLeft: 22,
    paddingRight: 22,
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
    marginBottom: 32,
  },
  input: {
    borderBottomWidth: 0,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 16,
    paddingRight: 23,
  },
  label: {
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 6,
    color: '#35364F',
    opacity: 0.6,
  }
});