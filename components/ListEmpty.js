import React from 'react';
import {Text, View} from "react-native";
import {strings} from "../localization";

function EmptyList() {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontFamily: 'SF-Pro-Regular', color: '#4B4747'}}>{strings.profile.empty_list}</Text>
        </View>
    );
}

export default EmptyList;