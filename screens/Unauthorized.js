import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Logo from '../assets/auth/logo-2.svg'
import {Colors} from "../constants/colors";
import {strings} from "../localization";


const Unauthorized = ({navigation}) => {
    return (
        <View style={styles.container}>

            <View>
                <Logo/>
            </View>

            <Text style={{marginTop: 97, ...styles.description}}>{strings.auth.unauthorized}</Text>
            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.btnText}>
                    {strings.auth.login}
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnWhite}
                onPress={() => navigation.navigate('OnBoarding')}
            >
                <Text style={styles.btnWhiteText}>
                    {strings.auth.registration}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Unauthorized

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16
        // paddingTop: 81
    },
    btn: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 23,
        backgroundColor: '#1F8BA7',
        marginTop: 30
    },
    btnText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        lineHeight: 24,
        color: Colors.white
    },
    btnWhite: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius: 23,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#1F8BA7',
        marginTop: 16,
    },
    btnWhiteText: {
        fontFamily: 'Poppins-Regular',
        fontSize: 17,
        lineHeight: 25,
        color: Colors.primary
    },
    description: {
        fontFamily: 'Poppins-Regular',
        lineHeight: 24,
        fontSize: 16,
        alignSelf: 'center',
        textAlign: 'center'
    }

})
