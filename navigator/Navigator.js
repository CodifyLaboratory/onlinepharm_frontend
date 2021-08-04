import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from "../components/Main";
import Search from "../components/Search";
import Profile from "../components/Profile";
import News from "../components/News";
import Cart from "../components/Cart";
import {View, Image} from "react-native";

export default function Navigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName='Main'
      screenOptions={{
        tabBarStyle: {
          backgroundColor:'#1F8BA7',
          height: 78,
        },
        tabBarLabelStyle: {
          color: '#fff',
          marginBottom:-10,
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
                paddingTop: 10
              }}>
              <Image
                source={require('../assets/icons/News.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#CCCCCC'
                }}
              />
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
              <Image
                source={require('../assets/icons/Cart.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#CCCCCC'
                }}
              />
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
              <Image
                source={require('../assets/icons/Home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#CCCCCC'
                }}
              />
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
              <Image
                source={require('../assets/icons/Union.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#CCCCCC'
                }}
              />
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
              <Image
                source={require('../assets/icons/Profile.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#FFFFFF' : '#CCCCCC'
                }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}