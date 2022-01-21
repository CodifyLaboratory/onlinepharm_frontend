import React, {useState, useEffect} from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Modal,
    ScrollView,
    Image,
    TouchableOpacity,
} from 'react-native'
import Api from './../API/index'
import User from '../assets/profile/user.svg'
import Pill from '../assets/profile/medicine.svg'
import Doctor from '../assets/profile/hospital.svg'
import Pencil from '../assets/profile/note.svg'
import Arrow from '../assets/profile/arrow.svg'
import Logout from '../assets/profile/logout.svg'
import BlackLogo from '../assets/icons/blackLogo.svg'
import Settings from '../assets/profile/Settings.svg'
import Payment from '../assets/profile/Payment methods.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {profile} from '../styles/profile'

import Close from './../assets/icons/close.svg'
import {Colors} from '../constants/colors'
import Loader from '../components/Loader'
import {useDispatch, useSelector} from "react-redux";
import {setAuthorization} from "../store/actions";
import {strings} from "../localization";

export default function Profile({navigation, setIsSignIn}) {

    const dispatch = useDispatch()

    const [userData, setUserData] = useState(null)
    const [userInfo, setUserInfo] = useState(null)
    const [modalVisible, setModalVisible] = useState(false)

    const loadData = async () => {
        try {
            let data = await AsyncStorage.getItem('userData')
            if (data !== null) {
                setUserData(JSON.parse(data))
            } else {
                dispatch(setAuthorization(false))
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

    if (!userData || !userInfo) return <Loader/>

    return (
        <ScrollView>
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
                                <User style={{width: 24, height: 24}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.my_account}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            onPress={() => {
                                navigation.navigate('MyMedicine')
                            }}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Pill style={{width: 24, height: 24}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.my_drugs}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            onPress={() => {
                                navigation.navigate('MyFarms')
                            }}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Doctor style={{width: 24, height: 24}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.my_pharmacies}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Pencil style={{width: 24, height: 24}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.my_orders}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Payment style={{width: 30, height: 30}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.my_payment_methods}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={()=>navigation.navigate('Settings')}
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Settings style={{width: 24, height: 24}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.settings}
                                </Text>
                            </View>
                            <Arrow/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={profile.profileLink}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <BlackLogo style={{width: 24, height: 24}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.about_application}
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setModalVisible(true)}
                            style={[
                                profile.profileLink,
                                {borderBottomWidth: 0},
                            ]}
                            activeOpacity={0.6}
                        >
                            <View style={profile.profileLinkInner}>
                                <Logout style={{width: 24, height: 24}}/>
                                <Text style={profile.profileLinkText}>
                                    {strings.profile.logout}
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

const LeaveModal = ({navigation, visible, setVisible, setIsSignIn}) => {
    const dispatch = useDispatch()
    const leave = async () => {
        setVisible(false)
        // setIsSignIn(false)
        dispatch(setAuthorization(false))
        await AsyncStorage.removeItem('userData')
        // navigation.navigate('Unauthorized')
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
                            <Close/>
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
        textShadowOffset: {width: -1, height: 1},
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
        transform: [{translateX: 145}, {translateY: -60}],
    },
})
