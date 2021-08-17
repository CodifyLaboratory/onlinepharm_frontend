import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {registration} from "../styles/registration";
import Logo from "../assets/header/logo.svg";

function Registration({navigation}) {
  return (
    <View style={registration.container}>
      <Logo style={{marginTop: 65, marginBottom: 60}} />
      <View>
        <TextInput
          placeholder={'Email'}
          placeholderTextColor={'#333333'}
          style={registration.input}
        />
        <TextInput
          placeholder={'Пароль'}
          placeholderTextColor={'#333333'}
          style={registration.input}
        />
        <TextInput
          placeholder={'Подтвердите пароль'}
          placeholderTextColor={'#333333'}
          style={registration.input}
        />
      </View>

      <View style={registration.forgotContainer}>
        <Text style={registration.forgotAccount}>Уже есть аккаунт?</Text>
        <TouchableOpacity style={registration.forgot} onPress={()=>navigation.push('Login')}>
          <Text style={registration.forgotText}>Войти</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={registration.next}
        onPress={() => {navigation.push('RegistrationData')}}
        activeOpacity={0.8}
      >
        <Text style={registration.nextText}>Далее</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Registration;