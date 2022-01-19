import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import * as Location from 'expo-location'
import Navigator from './navigator/Navigator'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {Provider, useSelector} from 'react-redux'
import { createStore } from 'redux'
import reducers from "./store/reducers";
import {setAuthorization, setGuest} from "./store/actions";

export default function App() {
    const [location, setLocation] = useState(null)
    const [hasToken, setToken] = useState(false)
    const [is_guest, setGuestUser] = useState(false)
    const [isSignIn, setIsSignIn] = useState(false)

    const store = createStore(reducers)

    store.dispatch(setAuthorization(hasToken))
    store.dispatch(setGuest(is_guest))

    // const auth = store.getState().data.authorized

    useEffect(() => {
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

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Navigator />
            </NavigationContainer>
        </Provider>

    )
}
