import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Aktan kot</Text>
      <View style={styles.block}>1234</View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  text: {
    color: 'red',
  },
  block: {
    backgroundColor: 'green',
    width: '100px',
    height: '100px',
    textAlign: 'center',
    lineHeight: '100px'
  }
});
