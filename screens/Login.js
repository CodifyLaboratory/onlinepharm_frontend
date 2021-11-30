import React, { useState } from 'react';
import {View, ScrollView, Text, TouchableOpacity, TextInput} from 'react-native';
import { registration } from '../styles/registration';
import Logo from '../assets/header/logo.svg';
import { API } from 'react-native-web/dist/vendor/react-native/Animated/NativeAnimatedHelper';
import Api from '../API';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({navigation, setIsSignIn}) {
  const [formData, setFormData] = useState({
    email: null,
    password: null
  })

  const handleChangeEmail = (text) => {
    setFormData({...formData, email: text})
  }
  const handleChangePassword = (text) => {
    setFormData({...formData, password: text})
  }

  const saveData = async(data) => {
    try {
      const jsonValue = JSON.stringify(data)
      await AsyncStorage.setItem('userData', jsonValue)
    } catch(err) {
      console.log(err);
    }
  }

  const handleSubmit = () => {
    Api.postData('auth/users/token/', formData)
      .then(res => {
        if(res.status === 200) {
          saveData(res.data)
          setIsSignIn(true)
        }
      })
      .catch(e => console.log(e))

    console.log(formData);
  }

  return (
    <View style={registration.container}>
      <Logo style={{marginTop: 65, marginBottom: 60}} />
      <View style={{width: '100%'}}>
        <TextInput
          placeholder={'Email'}
          placeholderTextColor={'#333333'}
          style={registration.input}
          onChangeText={handleChangeEmail}
        />
        <TextInput
          placeholder={'Пароль'}
          placeholderTextColor={'#333333'}
          style={registration.input}
          onChangeText={handleChangePassword}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={()=>navigation.push('Login')}>
          <Text style={[registration.forgotPassword, {textAlign: 'center'}]}>Забыли пароль?</Text>
        </TouchableOpacity>
      </View>

      <View style={registration.forgotContainer}>
        <Text style={registration.forgotAccount}>Еще нет аккаунта?</Text>
        <TouchableOpacity style={registration.forgotTextContainer} onPress={()=>navigation.push('Login')}>
          <Text style={registration.forgotText}>Зарегистрироваться</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={registration.next}
        onPress={() => {
          handleSubmit()
        }}
        activeOpacity={0.8}
      >
        <Text style={registration.nextText}>Войти</Text>
      </TouchableOpacity>



    </View>
  );
}

export default Login;