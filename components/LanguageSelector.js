import React, {useEffect, useRef, useState} from 'react'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import FlagKg from '../assets/profile/KG.svg'
import FlagRu from '../assets/profile/RU.svg'
import FlagGB from '../assets/profile/GB.svg'
import {Colors} from "../constants/colors";
import {strings} from "../localization";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LanguageSelector = ({next, navigation}) => {

    const _isMounted = useRef(true);

    const [language, setLanguage] = useState('')

    useEffect(() => {
        initLanguage().then(r => r)
        return () => { // ComponentWillUnmount in Class Component
            _isMounted.current = false;
        }
    }, [language])

    const languages = [
        {lang: 'kg', text: 'Кыргызча', icon: <FlagKg/>},
        {lang: 'ru', text: 'Русский', icon: <FlagRu/>},
        {lang: 'en', text: 'English', icon: <FlagGB/>},
    ]

    async function initLanguage() {
        if(_isMounted.current) {
            const lang = await AsyncStorage.getItem('lang')
            strings.setLanguage(lang)
        }

    }


    const handleChange = async (lang) => {
        next ? next() : navigation.navigate('Main')
        setLanguage(lang)
        strings.setLanguage(lang)
        await AsyncStorage.setItem('lang', lang)
    }

    return (
        <View style={styles.wrap}>
            <Text style={styles.select_lang}>{strings.profile.choose_language}</Text>
            {languages.map((item, i) => (
                <TouchableOpacity key={i} onPress={() => handleChange(item.lang)} style={styles.lang_row}>
                    <View>{item.icon}</View>
                    <Text
                        style={{...styles.langText, color: (item.lang === strings.getLanguage()) ? Colors.light : Colors.gray}}>
                        {item.text}
                    </Text>
                </TouchableOpacity>
            ))}

        </View>
    )
}

export default LanguageSelector

const styles = StyleSheet.create({
    wrap: {
        borderRadius: 10,
        padding: 24,
        backgroundColor: Colors.white,
        display: 'flex',
        width: 237,
        height: 222,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    lang_row: {
        display: "flex",
        flexDirection: 'row',
        marginBottom: 30,
    },
    select_lang: {
        alignSelf: 'center',
        fontFamily: 'SF-Pro-Medium',
        fontSize: 18,
        lineHeight: 21,
        marginBottom: 30,
        color: Colors.gray
    },
    langText: {
        fontFamily: 'SF-Pro-Regular',
        fontSize: 18,
        lineHeight: 21,
        color: Colors.gray,
        marginLeft: 10
    }
})
