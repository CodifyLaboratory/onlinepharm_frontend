import React, {useState} from "react";
import { View, Image, Platform, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Main from "../screens/Main";
import Search from "../screens/Search";
import News from "../screens/News";
import Cart from "../screens/Cart";
import Profile from "../screens/Profile";
import Farms from '../screens/Farms';
import Farm from "../screens/Farm"
import FarmInfo from '../screens/FarmInfo';
import MyProfile from "../screens/MyProfile";
import Categories from '../screens/Categories';
import CategoriesMedicines from '../screens/CategoriesMedicines';
import NewsInfo from "../screens/NewsInfo";
import {createStackNavigator} from "@react-navigation/stack";
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
import BackArrows from '../assets/profile/backArrow.svg'
import SearchFarmSvg from '../assets/farms/search.svg'
import FarmFavorite from '../assets/farms/FarmFavorite.svg'
import CartFarmSvg from '../assets/farms/cart.svg'
import Registration from "../screens/Registration";
import RegistrationData from "../screens/RegistrationData";



export default function Navigator() {
  const [isSignIn, setIsSignIn] = useState(false)

  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const ProfileNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name='Profile' component={Profile} options={{headerShown: false}}/>
        <Stack.Screen name='MyProfile' component={MyProfile} options={{
          title: 'ПРОФИЛЬ',
          headerRight: () => (
            <Button
              onPress={() => alert('Save!')}
              title="Сохранить"
              color="#1F8BA7"
            />
          ),
          headerBackTitle: 'Назад',
          headerStyle: {backgroundColor: '#E6EFF9'},
          headerBackTitleStyle: {fontSize: 15},
          headerTitleStyle: {color: '#1F8BA7'},

        }}/>
      </Stack.Navigator>
    )
  }

  const MainNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Farms" component={Farms}
                      options={{
                        headerRight: () => (
                          <TouchableOpacity activeOpacity={0.5} style={{marginRight: 15}}>
                            <SearchFarmSvg/>
                          </TouchableOpacity>
                        ),
                        title: 'Аптеки',
                        headerBackTitle: 'Назад',
                        headerStyle: {backgroundColor: '#E6EFF9'},
                        headerTitleStyle: {color: '#1F8BA7'},

                      }} />
        <Stack.Screen name="Farm" component={Farm} options={{
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5} style={{marginRight: 15}}>
              <SearchFarmSvg />
            </TouchableOpacity>
          ),
          title: 'Фармамир',
          headerStyle: { backgroundColor: '#E6EFF9'},
          headerTitleStyle: {color: '#1F8BA7'},
        }} />
        <Stack.Screen name="FarmInfo" component={FarmInfo} options={{
          headerRight: () => (
            <TouchableOpacity activeOpacity={0.5} style={{marginRight: 15}}>
              <FarmFavorite />
            </TouchableOpacity>
          ),
          title: 'О продукте',
          headerStyle: { backgroundColor: '#F4F5F6'},
          headerTitleStyle: {color: '#1F8BA7'},
        }} />
        <Stack.Screen name="Categories" component={Categories} options={{
          headerRight: () => (
            <View style={styles.flexRow}>
              <TouchableOpacity activeOpacity={0.5} style={{marginRight: 15}}>
                <SearchFarmSvg />
              </TouchableOpacity>
            </View>
          ),
          title: 'Лекарственные препараты',
          headerBackTitle: 'Назад',
          headerStyle: {
            backgroundColor: '#E6EFF9',
          },
          headerTitleStyle: {
            color: '#1F8BA7',
            fontSize: 17
          },
        }} />
        <Stack.Screen name="CategoriesMedicines" component={CategoriesMedicines} options={{
          headerRight: () => (
            <View style={styles.flexRow}>
              <TouchableOpacity activeOpacity={0.5} style={{marginRight: 15}}>
                <SearchFarmSvg />
              </TouchableOpacity>
            </View>

          ),
          title: 'Антибиотики',
          headerBackTitle: 'Назад',
          headerStyle: {
            backgroundColor: '#E6EFF9',
          },
          headerTitleStyle: {
            color: '#1F8BA7',
            fontSize: 17
          },
        }} />
      </Stack.Navigator>
    )
  }

  const NewsNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="News" component={News} options={{headerShown: false}}/>
        <Stack.Screen name='NewsInfo' component={NewsInfo} options={{headerBackTitle: 'Назад'}}/>

      </Stack.Navigator>
    )
  }


  const AuthNav = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={Registration} options={{
          headerTitle: 'Регистрация',
          headerTitleStyle: {color: '#1F8BA7'},
        }}/>
        <Stack.Screen name="RegistrationData" options={{
          headerBackTitle: 'Назад',
          headerTitle: 'Регистрация',
          headerTitleStyle: {color: '#1F8BA7'},
        }}>
          {props => <RegistrationData {...props} isSignIn={isSignIn} setIsSignIn={setIsSignIn}/>}
        </Stack.Screen>
      </Stack.Navigator>
      )

  }

  return (

      isSignIn ? (
        <Tab.Navigator
          initialRouteName='Main'
          screenOptions={{
            tabBarStyle: {
              backgroundColor: '#1F8BA7',
              height: 78,
              paddingBottom: Platform.OS === 'ios' ? 30 : 0,
            },
            tabBarLabelStyle: {
              color: '#fff',
              marginBottom: Platform.OS === 'ios' ? -20 : 10,
              paddingBottom: Platform.OS === 'ios' ? 10 : 0,
              fontSize: 12
            },
          }}
        >
          <Tab.Screen
            name='News'
            component={NewsNav}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    paddingTop: 10,
                  }}>
                  {focused ? (<NewsWhiteSvg/>) : (<NewsSvg/>)}
                </View>
              ),
              headerShown: false,
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
              ),
              headerShown: false,
            }}
          />
          <Tab.Screen
            name='Main'
            component={MainNav}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    paddingTop: 10
                  }}>
                  {focused ? (<MainSvg/>) : (<MainGraySvg/>)}
                </View>
              ),
              headerShown: false,
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
              ),
              headerShown: false,
            }}
          />

          <Tab.Screen
            name='Profile'
            component={ProfileNav}
            options={{
              tabBarIcon: ({focused}) => (
                <View
                  style={{
                    paddingTop: 10
                  }}>
                  {focused ? (<ProfileWhiteSvg/>) : (<ProfileSvg/>)}
                </View>
              ),
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      ) : (
        AuthNav()
      )


  );
}


const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row'
  }
})