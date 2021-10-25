import React from 'react';
import {StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native'

import Cart from '../assets/profile/cart.svg'
import List from '../assets/profile/list.svg'
import Medicine from '../assets/profile/medicine.svg'
import User from '../assets/profile/user.svg'
import Pill from '../assets/profile/pill.svg'
import Doctor from '../assets/profile/doctor.svg'
import Pencil from '../assets/profile/pencil.svg'
import Arrow from '../assets/profile/arrow.svg'
import Logout from '../assets/profile/logout.svg'
import BlackLogo from '../assets/icons/blackLogo.svg'

import {profile} from "../styles/profile";


export default function Profile({navigation, route}) {
  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <SafeAreaView>
        <View style={profile.container}>
          <Image style={profile.profileAvatar} source={require('../assets/profile/avatar.png')}/>
          <Text style={profile.profileName}>Керим Абдылдаев</Text>
          <Text style={profile.profileNumber}>+996 700 123 456</Text>
          <View style={profile.profileLinks}>
            <TouchableOpacity onPress={() => {
              navigation.push('MyProfile')
            }} style={profile.profileLink}
            activeOpacity={0.6}
            >
              <View style={profile.profileLinkInner}>
                <User style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои аккаунт</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity
              style={profile.profileLink}
              onPress={() => {
                navigation.push('MyMedicine')
              }}
              activeOpacity={0.6}
            >
              <View style={profile.profileLinkInner}>
                <Pill style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои лекарства</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={profile.profileLink} onPress={()=> {
              navigation.push('MyFarms');
            }}
            activeOpacity={0.6}
            >
              <View style={profile.profileLinkInner}>
                <Doctor style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои аптеки</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={profile.profileLink} activeOpacity={0.6}>
              <View style={profile.profileLinkInner}>
                <Pencil style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои заказы</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={profile.profileLink} activeOpacity={0.6}>
              <View style={profile.profileLinkInner}>
                <BlackLogo style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>О приложении</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[profile.profileLink, {borderBottomWidth: 0}]} activeOpacity={0.6}>
              <View style={profile.profileLinkInner}>
                <Logout style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Выйти</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}