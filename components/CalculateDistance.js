import React from "react";
import {Text} from "react-native";
import { useSelector } from "react-redux";

const CalculateDistance = () => {

    const { coordinates } = useSelector(state => state.data)

    console.log('coordintes', coordinates)

    return <Text>4</Text>
}

export default CalculateDistance