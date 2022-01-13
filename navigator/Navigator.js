import React, { useState } from 'react'
import {
    View,
    Platform,
    TouchableOpacity,
    StyleSheet,
    Text,
    Button,
    Image,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import IconBadge from 'react-native-icon-badge';

import Main from '../screens/Main'
import Search from '../screens/Search'
import News from '../screens/News'
import Cart from '../screens/Cart'
import Profile from '../screens/Profile'
import Farms from '../screens/Farms'
import Farm from '../screens/Farm'
import FarmInfo from '../screens/FarmInfo'
import MyProfile from '../screens/MyProfile'
import Categories from '../screens/Categories'
import CategoriesMedicines from '../screens/CategoriesMedicines'
import NewsInfo from '../screens/NewsInfo'
import Login from '../screens/Login'
import Ordering from '../screens/Ordering'
import OnBoarding from '../screens/OnBoarding'
import Map from '../screens/Map'

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
import SearchFarmSvg from '../assets/farms/search.svg'
import FarmFavorite from '../assets/farms/FarmFavorite.svg'

import Registration from '../screens/Registration'
import RegistrationData from '../screens/RegistrationData'
import MyMedicine from '../screens/MyMedicine'
import MyFarms from '../screens/MyFarms'
import BannerInfo from '../screens/BannerInfo'
import SelectionInfo from '../screens/SelectionInfo'
import LeaveReview from '../screens/LeaveReview'
import MedicineInfo from '../screens/MedicineInfo'

import { mainBgColor, mainTextColor } from '../constants'
import HeaderBackButton from '../components/Header'

export default function Navigator({ isSignIn, setIsSignIn, isLogged }) {
    const Tab = createBottomTabNavigator()
    const Stack = createStackNavigator()

    const ProfileNav = () => {
        return (
            <Stack.Navigator
                initialRouteName="Profile"
                detachInactiveScreens={false}
                detachPreviousScreen={true}
            >
                <Stack.Screen name="Profile" options={{ headerShown: false }}>
                    {(props) => (
                        <Profile
                            {...props}
                            isSignIn={isSignIn}
                            setIsSignIn={setIsSignIn}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="MyProfile"
                    component={MyProfile}
                    options={{
                        title: 'Профиль',
                        headerRight: () => (
                            <TouchableOpacity onPress={() => alert('Save!')}>
                                <Text
                                    style={{
                                        color: mainTextColor,
                                        marginRight: 10,
                                        fontSize: 15,
                                    }}
                                >
                                    Сохранить
                                </Text>
                            </TouchableOpacity>
                        ),
                        headerBackTitle: 'Назад',
                        headerStyle: { backgroundColor: mainBgColor },
                        headerBackTitleStyle: { fontSize: 15 },
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
                <Stack.Screen
                    name="MyMedicine"
                    component={MyMedicine}
                    options={{
                        headerBackTitle: 'Назад',
                        headerStyle: { backgroundColor: mainBgColor },
                        headerBackTitleStyle: { fontSize: 15 },
                        headerTitleStyle: { color: mainTextColor },
                        title: 'Мои лекарства',
                    }}
                />
                <Stack.Screen
                    name="MyFarms"
                    component={MyFarms}
                    options={{
                        headerBackTitle: 'Назад',
                        headerStyle: { backgroundColor: mainBgColor },
                        headerBackTitleStyle: { fontSize: 15 },
                        headerTitleStyle: { color: mainTextColor },
                        title: 'Мои аптеки',
                    }}
                />
                <Stack.Screen
                    name="Login"
                    options={{
                        headerTitle: 'Войти',
                        headerTitleStyle: { color: mainTextColor },
                    }}
                >
                    {(props) => (
                        <Login
                            {...props}
                            isSignIn={isSignIn}
                            setIsSignIn={setIsSignIn}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="OnBoarding"
                    options={{
                        headerShown: false,
                    }}
                >
                    {(props) => (
                        <OnBoarding
                            {...props}
                            isSignIn={isSignIn}
                            setIsSignIn={setIsSignIn}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="MedicineInfo"
                    component={MedicineInfo}
                    options={{
                        headerBackTitle: 'Назад',
                        title: 'О продукте',
                    }}
                />
                <Stack.Screen
                    name="FarmInfo"
                    component={FarmInfo}
                    options={{
                        title: 'Об аптеке',
                        headerStyle: { backgroundColor: '#F4F5F6' },
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
                <Stack.Screen
                    name="LeaveReview"
                    component={LeaveReview}
                    options={{
                        headerBackTitle: 'Назад',
                        title: 'Новый отзыв',
                    }}
                />
            </Stack.Navigator>
        )
    }

    const MainNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Farms"
                    component={Farms}
                    options={{
                        title: 'Аптеки',
                        headerBackTitle: 'Назад',
                        headerStyle: { backgroundColor: mainBgColor },
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
                <Stack.Screen
                    name="News"
                    component={News}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Farm"
                    component={Farm}
                    options={{
                        title: 'Аптеки',
                        headerStyle: { backgroundColor: mainBgColor },
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
                <Stack.Screen
                    name="FarmInfo"
                    component={FarmInfo}
                    options={{
                        title: 'Об аптеке',
                        headerStyle: { backgroundColor: '#F4F5F6' },
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
                <Stack.Screen
                    name="Map"
                    component={Map}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Categories"
                    component={Categories}
                    options={{
                        title: 'Лекарственные препараты',
                        headerBackTitle: 'Назад',
                        headerStyle: {
                            backgroundColor: mainBgColor,
                        },
                        headerTitleStyle: {
                            color: mainTextColor,
                            fontSize: 17,
                        },
                    }}
                />
                <Stack.Screen
                    name="CategoriesMedicines"
                    component={CategoriesMedicines}
                    options={{
                        title: 'Антибиотики',
                        headerBackTitle: 'Назад',
                        headerStyle: {
                            backgroundColor: mainBgColor,
                        },
                        headerTitleStyle: {
                            color: mainTextColor,
                            fontSize: 17,
                        },
                    }}
                />
                <Stack.Screen
                    name="BannerInfo"
                    component={BannerInfo}
                    options={{
                        title: 'Подробнее',
                        headerBackTitle: 'Назад',
                    }}
                />
                <Stack.Screen
                    name="NewsInfo"
                    component={NewsInfo}
                    options={{
                        headerBackTitle: 'Назад',
                        title: 'Подробнее',
                    }}
                />
                <Stack.Screen
                    name="SelectionInfo"
                    component={SelectionInfo}
                    options={{
                        headerBackTitle: 'Назад',
                        title: 'Подборки',
                    }}
                />

                <Stack.Screen
                    name="LeaveReview"
                    component={LeaveReview}
                    options={{
                        headerBackTitle: 'Назад',
                        title: 'Новый отзыв',
                    }}
                />

                <Stack.Screen
                    name="MedicineInfo"
                    component={MedicineInfo}
                    options={{
                        headerBackTitle: 'Назад',
                        title: 'О продукте',
                    }}
                />
            </Stack.Navigator>
        )
    }

    const NewsNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="News"
                    component={News}
                    options={{ headerShown: true, headerTitle: 'Новости' }}
                />
                <Stack.Screen
                    name="NewsInfo"
                    component={NewsInfo}
                    options={{
                        headerTitle: 'Подробнее',
                        // headerLeft: () => ( <HeaderBackButton />
                        // ),
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
            </Stack.Navigator>
        )
    }

    const CartNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="Cart"
                    component={Cart}
                    options={{
                        title: 'Корзина',
                        headerBackTitle: 'Назад',
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
                <Stack.Screen
                    name="Ordering"
                    component={Ordering}
                    options={{
                        title: 'Оформление заказа',
                        headerBackTitle: 'Назад',
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
            </Stack.Navigator>
        )
    }

    const AuthNav = () => {
        return (
            <Stack.Navigator>
                <Stack.Screen
                    name="OnBoarding"
                    options={{
                        headerShown: false,
                    }}
                >
                    {(props) => (
                        <OnBoarding
                            {...props}
                            isSignIn={isSignIn}
                            setIsSignIn={setIsSignIn}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="Registration"
                    component={Registration}
                    options={{
                        headerTitle: 'Регистрация',
                        headerTitleStyle: { color: mainTextColor },
                    }}
                />
                <Stack.Screen
                    name="RegistrationData"
                    options={{
                        headerBackTitle: 'Назад',
                        headerTitle: 'Регистрация',
                        headerTitleStyle: { color: mainTextColor },
                    }}
                >
                    {(props) => (
                        <RegistrationData
                            {...props}
                            isSignIn={isSignIn}
                            setIsSignIn={setIsSignIn}
                        />
                    )}
                </Stack.Screen>
                <Stack.Screen
                    name="Login"
                    options={{
                        headerTitle: 'Войти',
                        headerTitleStyle: { color: mainTextColor },
                    }}
                >
                    {(props) => (
                        <Login
                            {...props}
                            isSignIn={isSignIn}
                            setIsSignIn={setIsSignIn}
                        />
                    )}
                </Stack.Screen>
            </Stack.Navigator>
        )
    }

    return isSignIn ? (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: mainTextColor,
                    height: 78,
                    paddingBottom: Platform.OS === 'ios' ? 30 : 0,
                },
                tabBarLabelStyle: {
                    color: '#fff',
                    marginBottom: Platform.OS === 'ios' ? -20 : 10,
                    paddingBottom: Platform.OS === 'ios' ? 10 : 0,
                    fontSize: 12,
                },
            }}
        >
            <Tab.Screen
                name="News"
                component={NewsNav}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <NewsWhiteSvg /> : <NewsSvg />}
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartNav}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <IconBadge
                                MainElement={
                                    focused ? <CartWhiteSvg /> : <CartSvg />
                                }
                                BadgeElement={
                                    <Text style={{color:'#FFFFFF'}}>{2}</Text>
                                }
                                IconBadgeStyle={
                                    {width:16,
                                        height:16,
                                        backgroundColor: 'red', top: -5, right: -8}
                                }
                                Hidden={false}
                            />
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Main"
                component={MainNav}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <MainSvg /> : <MainGraySvg />}
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <SearchWhiteSvg /> : <SearchSvg />}
                        </View>
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileNav}
                options={{
                    unmountOnBlur: true,
                    tabBarIcon: ({ focused }) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <ProfileWhiteSvg /> : <ProfileSvg />}
                        </View>
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    ) : (
        AuthNav()
    )
}

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: 'row',
    },
})
