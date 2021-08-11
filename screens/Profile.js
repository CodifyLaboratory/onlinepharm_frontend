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


export default function Profile({navigation, route}) {
  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={require('../assets/profile/avatar.png')}/>
          <Text style={styles.profileName}>Керим Абдылдаев</Text>
          <Text style={styles.profileNumber}>+996 700 123 456</Text>
          <View style={styles.profilePersonalityBlocks}>
            <TouchableOpacity style={styles.profilePersonalityBlock}>
              <View style={styles.profilePersonalityIcon}>
                <Cart/>
              </View>
              <Text style={styles.profilePersonalityText}>Мои аптеки</Text>
              <Text style={styles.profilePersonalityText}>(4)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profilePersonalityBlock}>
              <View style={styles.profilePersonalityIcon}>
                <List/>
              </View>
              <Text style={styles.profilePersonalityText}>Мои заказы</Text>
              <Text style={styles.profilePersonalityText}>(7)</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profilePersonalityBlock}>
              <View style={styles.profilePersonalityIcon}>
                <Medicine/>
              </View>
              <Text style={styles.profilePersonalityText}>Мои лекарства</Text>
              <Text style={styles.profilePersonalityText}>(28)</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.profileLinks}>
            <TouchableOpacity onPress={() => {
              navigation.push('MyProfile')
            }} style={styles.profileLink}>
              <View style={styles.profileLinkInner}>
                <User style={{width: 24, height: 24}}/>
                <Text style={styles.profileLinkText}>Мои аккаунт</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileLink}>
              <View style={styles.profileLinkInner}>
                <Pill style={{width: 24, height: 24}}/>
                <Text style={styles.profileLinkText}>Мои лекарства</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.profileLink}>
              <View style={styles.profileLinkInner}>
                <Doctor style={{width: 24, height: 24}}/>
                <Text style={styles.profileLinkText}>Мои аптеки</Text>
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
              <View style={styles.profileLinkInner}>
                <Pencil style={{width: 24, height: 24}}/>
                <Text style={styles.profileLinkText}>Мои заказы</Text>
              </View>
              <Arrow/>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E6EFF9',
    paddingLeft: 37,
    paddingRight: 37,
    justifyContent: 'center',
    paddingTop: 96,
  },
  profileName: {
    fontSize: 18,
    lineHeight: 27,
    marginTop: 16,
    marginBottom: 8,
    color: '#1A1717',
  },
  profileNumber: {
    fontSize: 12,
    lineHeight: 18,
    color: '#4B4747',
  },
  profilePersonalityBlocks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 280,
    marginTop: 43,
    marginBottom: 62,
  },
  profilePersonalityBlock: {
    alignItems: 'center',
  },
  profilePersonalityIcon: {
    width: 58,
    height: 58,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  profilePersonalityText: {
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 15,
    color: '#4B4747',
  },
  profileLinks: {
    width: 302,
    height: 192,
    backgroundColor: '#fff',
    borderRadius: 18,
  },
  profileLink: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    height: 48,
    paddingLeft: 24,
    paddingRight: 34,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  profileLinkInner: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileLinkText: {
    fontSize: 16,
    marginLeft: 14,
  },
})