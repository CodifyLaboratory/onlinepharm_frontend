import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from "react-native";
import {registration} from "../styles/registration";
import {Formik} from "formik";
import Logo from "../assets/header/logo.svg";

function Registration({navigation}) {
  const [initialState, setInitialState] = useState({
    email: '',
    password: '',
    confirm_password: '',
  })
  const [passwordCheck, setPasswordCheck] = useState(false)
  console.log(initialState)


  const handleChangeEmail =(text)=> {
    setInitialState({...initialState, email: text})
  }
  const handleChangePassword =(text)=> {
    setInitialState({...initialState, password: text})
    setPasswordCheck(false)
  }
  const handleChangeConfirm =(text)=> {
    setInitialState({...initialState, confirm_password: text})
    setPasswordCheck(false)
  }

  const validatePasswords = () => {
    if(initialState.password !== initialState.confirm_password){
      setPasswordCheck(true)
    }
  }


  const handleSubmit =()=> {
    validatePasswords()
    console.log('submitted')
  }


  return (
    <View style={registration.container}>
      <Logo style={{marginTop: 65, marginBottom: 60}} />

          <View>
            <TextInput
              placeholder={'Email'}
              placeholderTextColor={'#333333'}
              style={registration.input}
              textContentType={'emailAddress'}
              onChangeText={handleChangeEmail}
            />
            <TextInput
              placeholder={'Пароль'}
              placeholderTextColor={'#333333'}
              style={registration.input}
              secureTextEntry={true}
              onChangeText={handleChangePassword}
              autoCorrect={false}
            />
            {
              passwordCheck ?
              <Text style={{marginLeft: 15 ,marginTop: -27, color: 'red'}}>Пароли не совпадают</Text>
              : null
            }
            <TextInput
              placeholder={'Подтвердите пароль'}
              placeholderTextColor={'#333333'}
              style={registration.input}
              secureTextEntry={true}
              onChangeText={handleChangeConfirm}
              autoCorrect={false}
            />

            {
              passwordCheck ?
              <Text style={{marginLeft: 15 ,marginTop: -27, color: 'red'}}>Пароли не совпадают</Text>
              : null
            }
          </View>


  <View style={registration.forgotContainer}>
        <Text style={registration.forgotAccount}>Уже есть аккаунт?</Text>
        <TouchableOpacity
          style={registration.forgot}
          onPress={()=>navigation.push('Login')}
        >
          <Text style={registration.forgotText}>Войти</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={registration.next}
        onPress={() => {
          handleSubmit()
          // navigation.push('RegistrationData')
        }}
        activeOpacity={0.8}
      >
        <Text style={registration.nextText}>Далее</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Registration;