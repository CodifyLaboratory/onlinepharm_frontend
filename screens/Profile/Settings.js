import React from 'react'
import { ScrollView, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {profile} from "../../styles/profile";

import {strings} from "../../localization";
import Arrow from "../../assets/profile/arrow.svg";
import Language from '../../assets/profile/language.svg'
import Password from '../../assets/profile/change_password.svg'


const Settings = ({navigation}) => {
    return (

        <ScrollView>
                <View style={settings.container}>
                    <View style={profile.profileLinks}>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('ChangeLanguage')}
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Language />
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.choose_language}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('ChangePasswordProfile')}
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Password />
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.change_password}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                    </View>
                </View>
        </ScrollView>
    )
}

export default Settings

const settings = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // paddingTop: 20
    },
})
