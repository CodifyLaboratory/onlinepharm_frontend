import React, {useEffect, useState} from 'react'
import {View, StyleSheet} from "react-native";
import ChangeLanguage from "./ChangeLanguage";
import LanguageSelector from "../components/LanguageSelector";
import Logo from '../assets/auth/logo-2.svg'
import {Colors} from "../constants/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Loader from "../components/Loader";

const SelectLanguage = ({navigation}) => {

    const [loading, setLoading] = useState(false)

    async function getStorageValue(){
        try {
            setLoading(true)
            let value = await AsyncStorage.getItem('lang')
            if(value) {
                navigation.navigate('Unauthorized')
            }
        } catch (e) {

        } finally {
            setLoading(false)
        }

    }


    useEffect(()=> {
       getStorageValue().then(r => r)
    }, [])

   function handleChange() {
        navigation.navigate('Unauthorized')
    }

    if(loading) return <Loader />

    return <View style={styles.container}>
        <Logo style={styles.logo} />
        <LanguageSelector next={handleChange} />
    </View>
}

export default SelectLanguage

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    logo: {
        position: 'absolute',
        top: 100
    }
})
