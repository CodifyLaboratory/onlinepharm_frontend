import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from "../components/Main";
import Search from "../components/Search";
import Profile from "../components/Profile";
import News from "../components/News";
import Cart from "../components/Cart";
import {View, Image, Platform} from "react-native";
import MainSvg from '../assets/icons/main.svg'
import SearchSvg from '../assets/icons/search.svg'
import ProfileSvg from '../assets/icons/Profile.svg'
import NewsSvg from '../assets/icons/news.svg'
import CartSvg from '../assets/icons/cart.svg'
import MainGraySvg from '../assets/icons/maingray.svg'
import CartWhiteSvg from '../assets/icons/cartWhite.svg'
import SearchWhiteSvg from '../assets/icons/searchWhite.svg'
import ProfileWhiteSvg from '../assets/icons/profileWhite.svg'
import NewsWhiteSvg from '../assets/icons/newsWhite.svg'


export default function Navigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='Main'
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#1F8BA7',
          height: 78,
        },
        tabBarLabelStyle: {
          color: '#fff',
          marginBottom: Platform.OS === 'ios' ? -10 : 10,
          fontSize: 12
        },
      }}
    >
      <Tab.Screen
        name='News'
        component={News}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                paddingTop: 10,
              }}>
              {focused ? (<NewsWhiteSvg/>) : (<NewsSvg/>)}
            </View>
          )
        }}
      />
      <Tab.Screen
        name='Cart'
        component={Cart}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                paddingTop: 10
              }}>
              {focused ? (<CartWhiteSvg/>) : (<CartSvg/>)}
            </View>
          )
        }}
      />
      <Tab.Screen
        name='Main'
        component={Main}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                paddingTop: 10
              }}>
              {focused ? (<MainSvg/>) : (<MainGraySvg/>)}
            </View>
          )
        }}/>
      <Tab.Screen
        name='Search'
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                paddingTop: 10
              }}>
              {focused ? (<SearchWhiteSvg/>) : (<SearchSvg/>)}
            </View>
          )
        }}
      />

      <Tab.Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{
                paddingTop: 10
              }}>
              {focused ? (<ProfileWhiteSvg/>) : (<ProfileSvg/>)}
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}