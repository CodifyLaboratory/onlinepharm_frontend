import React from 'react';
import {View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import { registration } from '../styles/registration';
import Logo from '../assets/header/logo.svg';

function Login({navigation, setIsSignIn, isSignIn}) {
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
      </View>

      <TouchableOpacity onPress={()=>navigation.push('Login')}>
        <Text style={registration.forgotPassword}>Забыли пароль?</Text>
      </TouchableOpacity>

      <View style={registration.forgotContainer}>
        <Text style={registration.forgotAccount}>Еще нет аккаунта?</Text>
        <TouchableOpacity style={registration.forgotTextContainer} onPress={()=>navigation.push('Login')}>
          <Text style={registration.forgotText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={registration.next}
        onPress={() => {setIsSignIn(true)}}
        activeOpacity={0.8}
      >
        <Text style={registration.nextText}>Войти</Text>
      </TouchableOpacity>



    </View>
  );
}

export default Login;