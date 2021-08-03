import React from 'react'
import Main from './components/Main'
import Profile from './components/Profile'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'


const Stack = createStackNavigator();

export default function Navigation() {
    return <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{title: "Главная"}}
                />
                <Stack.Screen
                    name="Profile"
                    component={Profile}
                    options={{title: "Личный кабинет"}}
                />
            </Stack.Navigator>
        </NavigationContainer>
}

const styles = StyleSheet.create({})
