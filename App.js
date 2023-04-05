import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as Location from 'expo-location'
import React, { useEffect, useRef, useState } from 'react'
import { Platform, StatusBar, View, LogBox } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import Navigator from './navigator/Navigator'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AppLoading from 'expo-app-loading'

import reducers from './store/reducers'
import {
    setAuthorization,
    setCoordinates,
    setGuest,
    setUser,
} from './store/actions'
import { useFonts } from 'expo-font'
import { strings } from './localization'

import { Colors } from './constants/colors'
import { getProfile } from './api'

LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
])

import { StatusBarHeight } from './constants/statusbarHeigth'

export default function App() {
    const [hasToken, setToken] = useState(false)
    const [is_guest, setGuestUser] = useState(false)

    const _isMounted = useRef(true)

    const store = createStore(reducers)

    useEffect(() => {
        initLanguage().then((r) => strings.setLanguage(r))
        _getLocation().then((r) => store.dispatch(setCoordinates(r?.coords)))
        me().then((r) => initProfile(r?.user_id))
        return () => {
            _isMounted.current = false
        }
    }, [store.dispatch])

    const initLanguage = async () => {
        if (_isMounted.current) {
            // Check always mounted component
            return await AsyncStorage.getItem('lang')
        }
    }

    const initProfile = async (id) => {
        try {
            const res = await getProfile(id)
            store.dispatch(setUser(res))
        } catch (e) {
            console.log('e', e)
        }
    }

    store.dispatch(setAuthorization(hasToken))
    store.dispatch(setGuest(is_guest))

    const _getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()
        if (status !== 'granted') {
            return
        }

        let location = await Location.getCurrentPositionAsync()
        return location
    }

    const me = async () => {
        const data = await AsyncStorage.getItem('userData')
        const parsed = JSON.parse(data)
        setToken(!!parsed)
        return parsed
    }

    store.subscribe(() => {
        // setToken(store.getState().data.authorized)
        // setGuestUser(store.getState().data.is_guest)
    })

    let [fontsLoaded] = useFonts({
        'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
        'SF-Pro-Regular': require('./assets/fonts/SFProDisplay-Regular.ttf'), /// weight 400
        'SF-Pro-Medium': require('./assets/fonts/SFProDisplay-Medium.ttf'), /// weight 500
        'SF-Pro-SemiBold': require('./assets/fonts/SFProDisplay-Semibold.ttf'), /// weight 600
        'SF-Pro-Light': require('./assets/fonts/SFProDisplay-Light.ttf'),
    })

    if (!fontsLoaded) {
        return <AppLoading />
    }

    const CustomStatusBar = () => {
        return (
            <View style={{
                height: Platform.OS === 'ios' ? StatusBarHeight : 0,
                backgroundColor: Colors.white
            }}>
                <StatusBar barStyle="dark-content" backgroundColor={Colors.white} />
            </View>
        )
    }

    return (
        <Provider store={store}>
            <NavigationContainer>
                {/*<StatusBar barStyle={'dark-content'} backgroundColor={Colors.primary} />*/}
                <CustomStatusBar />
                <Navigator />
            </NavigationContainer>
        </Provider>
    )
}
