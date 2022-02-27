import React from 'react'
import { View, StyleSheet} from "react-native";
import LanguageSelector from "../../components/LanguageSelector";
import Logo from '../../assets/auth/logo-2.svg'
import {Colors} from "../../constants/colors";

const ChangeLanguage = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Logo style={styles.logo} />
            <LanguageSelector navigation={navigation} />
        </View>
    )
}

export default ChangeLanguage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
        backgroundColor: Colors.white
    },
    logo: {
        position: 'absolute',
        top: 50
    }
})
