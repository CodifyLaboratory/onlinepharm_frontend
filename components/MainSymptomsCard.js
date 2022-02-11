import React from 'react'
import { main } from '../styles/main'
import { Image, Text, View, TouchableOpacity } from 'react-native'

const MainSymptomsCard = ({ data, navigation }) => {
    return (
        <TouchableOpacity
            style={main.symptomsSliderElem}
            onPress={() => navigation.push('SelectionInfo', data.id)}
        >
            <Image
                style={{ width: 36, height: 36 }}
                source={{ uri: data.image }}
            />
            <Text
                style={main.symptomsCardText}
            >
                {data.title}
            </Text>
        </TouchableOpacity>
    )
}

export default MainSymptomsCard
