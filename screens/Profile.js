import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    SafeAreaView,
    Modal,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'
import Api from './../API/index'
import User from '../assets/profile/user.svg'
import Pill from '../assets/profile/pill.svg'
import Doctor from '../assets/profile/doctor.svg'
import Pencil from '../assets/profile/pencil.svg'
import Arrow from '../assets/profile/arrow.svg'
import Logout from '../assets/profile/logout.svg'
import BlackLogo from '../assets/icons/blackLogo.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { profile } from '../styles/profile'

import Close from './../assets/icons/close.svg'
import { Colors } from '../constants/colors'
import Loader from '../components/Loader'

export default function Profile({ navigation, route, setIsSignIn }) {
    const [userData, setUserData] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const loadData = async () => {
        try {
            let data = await AsyncStorage.getItem('userData')
            if (data !== null) {
                setUserData(JSON.parse(data))
            } else {
                setIsSignIn(false)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadData()
        Api.getData(`auth/users/${userData?.user_id}/`, userData?.access)
            .then((res) => setUserInfo(res.data))
            .catch((e) => console.log(e))
    }, [userData?.access])

    if (!userData) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: '#E6EFF9' }}>
            <SafeAreaView>
                <View style={profile.container}>
                    <Image
                        style={profile.profileAvatar}
                        source={require('../assets/auth/defaultPhoto.png')}
                    />
                    <Text style={profile.profileName}>
                        {userInfo?.user_profile?.first_name +
                            ' ' +
                            userInfo?.user_profile?.last_name}{' '}
                    </Text>
                    <Text style={profile.profileNumber}>
                        {userInfo?.user_profile?.phone}
                    </Text>
                    <View style={profile.profileLinks}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('MyProfile', userInfo)
                            }}
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <User style={{ width: 24, height: 24 }} />
                                <Text style={profile.profileLinkText}>
                                    Мои аккаунт
                                </Text>
                            </View>
                            <Arrow />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            onPress={() => {
                                navigation.push('MyMedicine')
                            }}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Pill style={{ width: 24, height: 24 }} />
                                <Text style={profile.profileLinkText}>
                                    Мои лекарства
                                </Text>
                            </View>
                            <Arrow />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            onPress={() => {
                                navigation.push('MyFarms')
                            }}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Doctor style={{ width: 24, height: 24 }} />
                                <Text style={profile.profileLinkText}>
                                    Мои аптеки
                                </Text>
                            </View>
                            <Arrow />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Pencil style={{ width: 24, height: 24 }} />
                                <Text style={profile.profileLinkText}>
                                    Мои заказы
                                </Text>
                            </View>
                            <Arrow />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <BlackLogo style={{ width: 24, height: 24 }} />
                                <Text style={profile.profileLinkText}>
                                    О приложении
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={[
                                profile.profileLink,
                                { borderBottomWidth: 0 },
                            ]}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Logout style={{ width: 24, height: 24 }} />
                                <Text style={profile.profileLinkText}>
                                    Выйти
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
            <LeaveModal
                navigation={navigation}
                visible={modalVisible}
                setVisible={(e) => setModalVisible(e)}
                setIsSignIn={setIsSignIn}
            />
        </ScrollView>
    )
}

const LeaveModal = ({ navigation, visible, setVisible, setIsSignIn }) => {
    const leave = async () => {
        setVisible(false)
        navigation.push('Login')
        setIsSignIn(false)
        await AsyncStorage.removeItem('userData')
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false)
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.modalViewClose}
                            onPress={() => {
                                setVisible(false)
                            }}
                        >
                            <Close />
                        </TouchableOpacity>
                        {/* <Success /> */}
                        <Text style={styles.modalText}>
                            Вы точно хотите выйти?
                        </Text>
                        <View style={styles.leave_btn_wrap}>
                            <TouchableOpacity
                                onPress={() => setVisible(false)}
                                style={styles.btn_cancel}
                            >
                                <Text style={styles.btn_cancel_text}>
                                    Отмена
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={leave}
                                style={styles.btn_leave}
                            >
                                <Text style={styles.btn_leave_text}>Выход</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    leave_btn_wrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        // marginTop: 32
    },
    btn_cancel: {
        width: 128,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderWidth: 1,
        borderColor: Colors.light,
        padding: 13,
        borderRadius: 20,
        margin: 8,
    },
    btn_cancel_text: {
        color: Colors.primary,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
    },
    btn_leave: {
        width: 128,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4BCCED',
        padding: 13,
        borderRadius: 20,
        margin: 8,
    },
    btn_leave_text: {
        color: Colors.white,
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 20,
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 9,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 16,
        width: 340,
        height: 249,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        textAlign: 'center',
        color: Colors.gray,
        fontSize: 15,
        fontWeight: '500',
        marginBottom: 32,
    },
    modalViewClose: {
        marginTop: 20,
        transform: [{ translateX: 145 }, { translateY: -60 }],
    },
})
