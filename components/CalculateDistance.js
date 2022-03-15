import React from "react";
import {Text} from "react-native";
import {useSelector} from "react-redux";
import getDistance from 'geolib/es/getDistance';

const CalculateDistance = ({data}) => {

    const { coordinates } = useSelector(state => state?.data)

    const { location } = data

    let distance;

    if (coordinates?.length && location?.length) {
        distance = getDistance(
            {latitude: coordinates?.latitude, longitude: coordinates?.longitude},
            {latitude: location?.latitude, longitude: location?.longitude}
        );
    } else {
        distance = 0
    }

    return !distance ? <Text>-</Text> : <Text>{Math.floor(distance / 1000)} км</Text>
}

export default CalculateDistance
