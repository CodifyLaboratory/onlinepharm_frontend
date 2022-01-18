import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Logo from '../assets/auth/logo-2.svg'


const Unauthorized = ({navigation}) => {
    return (
        <View style={styles.container}>

             <View>
                 <Logo />
             </View>

                <Text style={{marginTop: 97}}>Войдите или зарегистрируйтесь</Text>
                <Text>чтобы не потерять данные аккаунта, </Text>
                   <Text>и иметь доступ с другого устройства</Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={{ color: '#ffffff' }}>
                    Войти в профиль
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.btnWhite}
                onPress={() => navigation.navigate('OnBoarding')}
            >
                <Text style={{ color: '#1F8BA7' }}>
                    Зарегистрироваться
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
        // paddingTop: 81
    },
    btn: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 23,
        backgroundColor: '#1F8BA7',
        marginTop: 30
    },
    btnWhite: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 23,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#1F8BA7',
        marginTop: 11,
    },
})
