import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import {registrationData} from "../styles/registrationData";
import Logo from '../assets/header/logo.svg'
import {registration} from "../styles/registration";

function RegistrationData(props) {
  return (
    <View style={registrationData.container}>
      <View style={{width: '100%', alignItems: 'center'}}>
        <Logo/>
        <Text style={registrationData.text}>Укажите имя и фамилию</Text>
      </View>
      <View style={{width: '100%'}}>
        <TextInput
          placeholder={'Имя'}
          placeholderTextColor={'#333333'}
          style={registration.input}
        />
        <TextInput
          placeholder={'Фамилия'}
          placeholderTextColor={'#333333'}
          style={registration.input}
        />
        <TextInput
          placeholder={'Номер телефона'}
          placeholderTextColor={'#333333'}
          style={registration.input}
        />
      </View>
      <TouchableOpacity
        style={registration.next}
        onPress={() => {
          props.setIsSignIn(true)
        }}
        activeOpacity={0.8}
      >
        <Text style={registration.nextText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegistrationData;