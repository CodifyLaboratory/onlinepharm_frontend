import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Location from 'expo-location'
import Navigator from './navigator/Navigator'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AppLoading from 'expo-app-loading';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from "./store/reducers";
import {setAuthorization, setGuest} from "./store/actions";
import {useFonts} from "expo-font";
import {strings} from "./localization";

export default function App() {
    const [location, setLocation] = useState(null)
    const [hasToken, setToken] = useState(false)
    const [is_guest, setGuestUser] = useState(false)


    const initLanguage = async () => {
        const lang = await AsyncStorage.getItem('lang')
        lang
            ? strings.setLanguage(lang)
            : strings.setLanguage('ru')
    }


    const store = createStore(reducers)

    store.dispatch(setAuthorization(hasToken))
    store.dispatch(setGuest(is_guest))


    useEffect(() => {
        initLanguage()
        _getLocation()
        me()
    }, [])

    const _getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied')
            return
        }

        let location = await Location.getCurrentPositionAsync({})
        setLocation(location)
    }

    const me = async () => {
        const data = await AsyncStorage.getItem('userData')
        const parsed = JSON.parse(data)
        const token = parsed?.access
        setToken(!!token)
        // setIsSignIn(!!token)
    }



    store.subscribe(()=>{
        setToken(store.getState().data.authorized)
        setGuestUser(store.getState().data.is_guest)
    })

    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'SF-Pro-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'), /// weight 400
        'SF-Pro-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'),  /// weight 500
        'SF-Pro-SemiBold': require('./assets/fonts/SFProDisplay-Semibold.ttf'), /// weight 600
        'SF-Pro-Light': require('./assets/fonts/SFProDisplay-Light.ttf')
    })

    if (!fontsLoaded) {
        return <AppLoading />;
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </Provider>

    )
}
