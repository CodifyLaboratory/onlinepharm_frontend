import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import {myProfile} from "../styles/myProfile";

export default function MyProfile() {

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={myProfile.container}>
        <View style={{alignItems: 'center'}}>
          <Image style={myProfile.profileAvatar} source={require('../assets/profile/avatar.png')} />
          <Input
            keyboardType='default'
            label={'Имя'}
            labelStyle={myProfile.label}
            rightIcon={
              <Icon
                name='pen'
                size={14}
                color='#cccccc'
              />
            }
            inputStyle={{fontSize: 14,}}
            inputContainerStyle={myProfile.input}
          />
          <Input
            keyboardType='default'
            label={'Фамилия'}
            labelStyle={myProfile.label}
            rightIcon={
              <Icon
                name='pen'
                size={14}
                color='#cccccc'
              />
            }
            inputStyle={{fontSize: 14,}}
            inputContainerStyle={myProfile.input}
          />
          <Input
            keyboardType='email-address'
            label={'Email'}
            labelStyle={myProfile.label}
            rightIcon={
              <Icon
                name='pen'
                size={14}
                color='#cccccc'
              />
            }
            inputStyle={{fontSize: 14,}}
            inputContainerStyle={myProfile.input}
          />
          <Input
            keyboardType='numeric'
            label={'Телефон'}
            labelStyle={myProfile.label}
            rightIcon={
              <Icon
                name='pen'
                size={14}
                color='#cccccc'
              />
            }
            inputStyle={{fontSize: 14,}}
            inputContainerStyle={myProfile.input}
          />
          <Input
            keyboardType='default'
            label={'Адрес'}
            labelStyle={myProfile.label}
            rightIcon={
              <Icon
                name='pen'
                size={14}
                color='#cccccc'
              />
            }
            inputStyle={{fontSize: 14,}}
            inputContainerStyle={myProfile.input}
          />
        </View>
      </View>
    </ScrollView>
  )
}
