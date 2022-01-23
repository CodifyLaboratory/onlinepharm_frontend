import React from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { farm } from '../styles/farm'
import Location from '../assets/farms/location.svg'
import {strings} from "../localization";
import CalculateDistance from "./CalculateDistance";

function FarmCard({ navigation, data }) {
    return (
        <TouchableOpacity
            activeOpacity={0.85}
            style={farm.farmCard}
            onPress={() => navigation.navigate('FarmInfo')}
        >
            <Image
                style={farm.farmImg}
                source={
                    data.pharmacy.logo
                        ? { uri: data.pharmacy.logo }
                        : require('./../assets/farms/farmLogo.png')
                }
            />
            <View>
                <Text style={farm.farmName}>{data.pharmacy.title}</Text>
                <Text style={farm.farmCount}>{data.title}</Text>
                <View style={farm.farmLocation}>
                    <Location style={{ marginRight: 8 }} />
                    {/*<CalculateDistance data={data} />*/}
                    {/*<Text style={farm.farmClose}>4 km {strings.main.away}</Text>*/}
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.6} style={farm.farmFind}>
                <Text style={farm.farmFindText}>Открыть</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default FarmCard
