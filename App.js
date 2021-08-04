import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator/Navigator";

export default function App() {
  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

