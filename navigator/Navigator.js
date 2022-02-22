import React from 'react'
import {
    View,
    Platform,
    TouchableOpacity,
    Text,
} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createStackNavigator} from '@react-navigation/stack'

import IconBadge from 'react-native-icon-badge';

import Main from '../screens/Main/Main'
import Search from '../screens/Search/Search'
import News from '../screens/News/News'
import Cart from '../screens/Cart/Cart'
import Profile from '../screens/Profile/Profile'
import Farms from '../screens/Main/Farms'
import Farm from '../screens/Main/Farm'
import FarmInfo from '../screens/Main/FarmInfo'
import MyProfile from '../screens/Profile/MyProfile'
import Categories from '../screens/Main/Categories'
import CategoriesMedicines from '../screens/Main/CategoriesMedicines'
import NewsInfo from '../screens/News/NewsInfo'
import Login from '../screens/Auth/Login'
import Ordering from '../screens/Cart/Ordering'
import OnBoarding from '../screens/Auth/OnBoarding'
import Map from '../screens/Main/Map'

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

import Registration from '../screens/Auth/Registration'
import RegistrationData from '../screens/Auth/RegistrationData'
import MyMedicine from '../screens/Profile/MyMedicine'
import MyFarms from '../screens/Profile/MyFarms'
import BannerInfo from '../screens/Main/BannerInfo'
import SelectionInfo from '../screens/Main/SelectionInfo'
import LeaveReview from '../screens/Main/LeaveReview'
import MedicineInfo from '../screens/Main/MedicineInfo'
import Unauthorized from "../screens/Auth/Unauthorized";

import {mainBgColor, mainTextColor} from '../constants'

import {useSelector} from "react-redux";
import Settings from "../screens/Profile/Settings";
import ChangeLanguage from "../screens/Profile/ChangeLanguage";
import SelectLanguage from "../screens/Auth/SelectLanguage";
import {strings} from "../localization";
import Header from "../components/Header";
import PasswordRecoveryEmail from "../screens/Auth/PasswordRecoveryEmail";
import PasswordRecoveryCode from "../screens/Auth/recoveryPasswordCode";
import CreateNewPassword from "../screens/Auth/createNewPassword";
import ChangePasswordProfile from "../screens/Profile/ChangePasswordProfile";
import MyPaymentMethods from "../screens/Profile/MyPaymentMethods";
import AddPaymentCard from "../screens/Profile/AddPaymentCard";
import AboutUs from "../screens/Profile/AboutUs";


const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()


const ProfileNav = ({isSignIn, setIsSignIn}) => {
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            detachInactiveScreens={false}
            detachPreviousScreen={true}
        >
            <Stack.Screen name="Profile" options={{headerShown: false}}>
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
                    header: (props) => <Header {...props} title={strings.profile.my_account} />,
                }}
            />
            <Stack.Screen
                name="MyPaymentMethods"
                component={MyPaymentMethods}
                options={{
                    header: (props) => <Header {...props} title={strings.profile.my_payment_methods} />,
                }}
            />

            <Stack.Screen
                name="AboutUs"
                component={AboutUs}
                options={{
                    header: (props) => <Header {...props} title={strings.profile.about_application} />,
                }}
            />

            <Stack.Screen
                name="AddPaymentCard"
                component={AddPaymentCard}
                options={{
                    header: (props) => <Header {...props} title={strings.cart.add_card} />,
                }}
            />

            <Stack.Screen
                name="MyMedicine"
                component={MyMedicine}
                options={{
                    header: (props) => <Header {...props} title={strings.profile.my_drugs} />,
                }}
            />
            <Stack.Screen
                name="MyFarms"
                component={MyFarms}
                options={{
                    header: (props) => <Header {...props} title={strings.profile.my_pharmacies} />,
                }}
            />
            <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                    header: (props) => <Header {...props} title={strings.profile.settings} />,
                }}
            />
            <Stack.Screen
                name="ChangeLanguage"
                component={ChangeLanguage}
                options={{
                    header: (props) => <Header {...props} title={strings.profile.choose_language} />,
                }}
            />
            <Stack.Screen
                name="Login"
                options={{
                    header: (props) => <Header {...props} title={strings.auth.enter} />,
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
                    header: (props) => <Header {...props} title={strings.main.about_product} about_product />,
                }}
            />
            <Stack.Screen
                name="FarmInfo"
                component={FarmInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.main.about_pharmacy} about_pharmacy />,
                }}
            />
            <Stack.Screen
                name="LeaveReview"
                component={LeaveReview}
                tabBarOptions={{
                    keyboardHidesTabBar: true
                }}
                options={{
                    header: (props) => <Header {...props} title={strings.main.new_feedback} />,
                }}
            />
            <Stack.Screen
                name="ChangePasswordProfile"
                component={ChangePasswordProfile}
                options={{
                    header: (props) => <Header {...props} title={strings.profile.change_password} />,
                }}
            />
        </Stack.Navigator>
    )
}

const MainNav = () => {
    return (
        <Stack.Navigator initialRouteName={'Main'} screenOptions={{unmountOnBlur: true}}>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Farms"
                component={Farms}
                options={{
                    header: (props) => <Header {...props} title={strings.main.pharmacies} />,
                    // title: 'Аптеки',
                    // headerBackTitle: 'Назад',
                    // headerStyle: {backgroundColor: mainBgColor},
                    // headerTitleStyle: {color: mainTextColor},
                }}
            />
            <Stack.Screen
                name="News"
                component={News}
                options={{
                    header: (props) => <Header {...props} title={strings.news.title} />,
                }}
            />
            <Stack.Screen
                name="Farm"
                component={Farm}
                options={{
                    header: (props) => <Header {...props} title={strings.main.pharmacies} />,
                }}
            />
            <Stack.Screen
                name="FarmInfo"
                component={FarmInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.main.about_pharmacy} about_pharmacy />,
                }}
            />
            <Stack.Screen
                name="Map"
                component={Map}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Categories"
                component={Categories}
                options={{
                    header: (props) => <Header {...props} />,
                }}
            />
            <Stack.Screen
                name="CategoriesMedicines"
                component={CategoriesMedicines}
                options={{
                    header: (props) => <Header {...props} />,
                }}
            />
            <Stack.Screen
                name="BannerInfo"
                component={BannerInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.main.more} />,
                }}
            />
            <Stack.Screen
                name="NewsInfo"
                component={NewsInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.news.title} />,
                }}
            />
            <Stack.Screen
                name="SelectionInfo"
                component={SelectionInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.main.collections} />,
                }}
            />

            <Stack.Screen
                name="LeaveReview"
                component={LeaveReview}
                tabBarOptions={{
                    keyboardHidesTabBar: true
                }}
                options={{
                    header: (props) => <Header {...props} title={strings.main.new_feedback} />,
                }}
            />

            <Stack.Screen
                name="MedicineInfo"
                component={MedicineInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.main.about_product} about_product />,
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
                options={{
                    headerShown: true,
                    header: (props) => <Header {...props} title={strings.news.title} />,
                }}
            />
            <Stack.Screen
                name="NewsInfo"
                component={NewsInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.main.more} />,
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
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    header: (props) => <Header {...props} title={strings.cart.title} />,
                }}
            />
            <Stack.Screen
                name="Ordering"
                component={Ordering}
                options={{
                    header: (props) => <Header {...props} title={strings.cart.title} />,
                    title: 'Оформление заказа',
                    headerBackTitle: 'Назад',
                    headerTitleStyle: {color: mainTextColor},
                }}
            />

            <Stack.Screen
                name="MedicineInfo"
                component={MedicineInfo}
                options={{
                    header: (props) => <Header {...props} title={strings.main.about_product} />,
                }}
            />

        </Stack.Navigator>
    )
}

const AuthNav = ({isSignIn, setIsSignIn}) => {
    return (
        <Stack.Navigator initialRouteName={'SelectLanguage'}>
            <Stack.Screen
                component={SelectLanguage}
                name="SelectLanguage"
                options={{
                    headerShown: false,
                }}
            />
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
                    header: (props) => <Header {...props} title={strings.auth.registration} />,
                }}
            />
            <Stack.Screen
                name="RegistrationData"
                options={{
                    header: (props) => <Header {...props} title={strings.auth.registration} />,
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
                    header: (props) => <Header {...props} title={strings.auth.enter} />,
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
                name="Unauthorized"
                options={{
                    headerShown: false,
                }}
            >
                {(props) => (
                    <Unauthorized
                        {...props}
                        isSignIn={isSignIn}
                        setIsSignIn={setIsSignIn}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="RecoveryPasswordEmail"
                component={PasswordRecoveryEmail}
                options={{
                    header: (props) => <Header {...props} title={strings.auth.password_recovery} />,
                }}
            />
            <Stack.Screen
                name="RecoveryPasswordCode"
                component={PasswordRecoveryCode}
                options={{
                    header: (props) => <Header {...props} title={strings.auth.password_recovery} />,
                }}
            />
            <Stack.Screen
                name="CreateNewPassword"
                component={CreateNewPassword}
                options={{
                    header: (props) => <Header {...props} title={strings.auth.create_password} />,
                }}
            />
        </Stack.Navigator>
    )
}


export default function Navigator() {

    const { cart = [], authorized } = useSelector((state => state.data))

    return authorized ? (
        <Tab.Navigator
            initialRouteName="Main"
            screenOptions={{
                tabBarHideOnKeyboard: true,
                unmountOnBlur: true,
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
                    title: strings.news.title,
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <NewsWhiteSvg/> : <NewsSvg/>}
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartNav}
                options={{
                    title: strings.cart.title,
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <IconBadge
                                MainElement={
                                    focused ? <CartWhiteSvg/> : <CartSvg/>
                                }
                                BadgeElement={
                                    <Text style={{color: '#FFFFFF'}}>{cart.length}</Text>
                                }
                                IconBadgeStyle={
                                    {
                                        width: 16,
                                        height: 16,
                                        backgroundColor: 'red', top: -5, right: -8
                                    }
                                }
                                Hidden={!cart.length}
                            />
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Main"
                listeners={({navigation}) =>({
                    tabPress: (event) => {
                        event.preventDefault()
                        navigation.navigate('Main')
                    }
                })}
                component={MainNav}
                options={{
                    title: strings.main.title,
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <MainSvg/> : <MainGraySvg/>}
                        </View>
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    title: strings.search.search,
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <SearchWhiteSvg/> : <SearchSvg/>}
                        </View>
                    ),
                    headerShown: false,
                }}
            />

            <Tab.Screen
                name="Profile"
                options={{
                    title: strings.profile.title,
                    unmountOnBlur: true,
                    tabBarIcon: ({focused}) => (
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            {focused ? <ProfileWhiteSvg/> : <ProfileSvg/>}
                        </View>
                    ),
                    headerShown: false,
                }}
            >
                {props => <ProfileNav {...props} />}
            </Tab.Screen>
        </Tab.Navigator>
    ) : (
        <AuthNav />
    )
}

