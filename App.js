import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import * as Location from 'expo-location';
import Navigator from "./navigator/Navigator";


export default function App() {
  const [location, setLocation] = useState(null)

  useEffect(() => {
    _getLocation()
  }, [])

  const _getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
  }

  console.log(location)

  return (
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
  );
}
