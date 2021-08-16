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

import {profile} from "../styles/profile";


export default function Profile({navigation, route}) {
  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <SafeAreaView>
        <View style={profile.container}>
          <Image style={profile.profileAvatar} source={require('../assets/profile/avatar.png')}/>
          <Text style={profile.profileName}>Керим Абдылдаев</Text>
          <Text style={profile.profileNumber}>+996 700 123 456</Text>
          <View style={profile.profilePersonalityBlocks}>
            <TouchableOpacity style={profile.profilePersonalityBlock}>
              <View style={profile.profilePersonalityIcon}>
                <Cart/>
              </View>
              <Text style={profile.profilePersonalityText}>Мои аптеки</Text>
              <Text style={profile.profilePersonalityText}>(4)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={profile.profilePersonalityBlock}>
              <View style={profile.profilePersonalityIcon}>
                <List/>
              </View>
              <Text style={profile.profilePersonalityText}>Мои заказы</Text>
              <Text style={profile.profilePersonalityText}>(7)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={profile.profilePersonalityBlock}>
              <View style={profile.profilePersonalityIcon}>
                <Medicine/>
              </View>
              <Text style={profile.profilePersonalityText}>Мои лекарства</Text>
              <Text style={profile.profilePersonalityText}>(28)</Text>
            </TouchableOpacity>
          </View>
          <View style={profile.profileLinks}>
            <TouchableOpacity onPress={() => {
              navigation.push('MyProfile')
            }} style={profile.profileLink}>
              <View style={profile.profileLinkInner}>
                <User style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои аккаунт</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={profile.profileLink}>
              <View style={profile.profileLinkInner}>
                <Pill style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои лекарства</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={profile.profileLink}>
              <View style={profile.profileLinkInner}>
                <Doctor style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои аптеки</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
              height: 48,
              paddingLeft: 24,
              paddingRight: 34,
            }}>
              <View style={profile.profileLinkInner}>
                <Pencil style={{width: 24, height: 24}}/>
                <Text style={profile.profileLinkText}>Мои заказы</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}