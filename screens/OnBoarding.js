import React, { useState, useRef, useEffect } from 'react'
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Animated,
} from 'react-native'
import OnBoardingItem from '../components/OnBoardingItem'
import Paginator from '../components/Paginator'
import slidesData from '../data/slidesData'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useDispatch, useSelector} from "react-redux";
import {setAuthorization, setGuest} from "../store/actions";

const OnBoarding = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [userData, setUserData] = useState()

    const dispatch = useDispatch()

    const state = useSelector(state => state.data)

    console.log('state', state)

    const loadData = async () => {
        try {
            let data = await AsyncStorage.getItem('userData')
            if (data !== null) {
                setUserData(JSON.parse(data))
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        loadData()
    }, [])

    const item = useRef(0)
    const scrollX = useRef(new Animated.Value(0)).current
    const slidesRef = useRef(null)
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    if (userData) {
        dispatch(setAuthorization(true))
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList
                    data={slidesData}
                    renderItem={({ item, index }) => (
                        <OnBoardingItem item={item} index={index} />
                    )}
                    horizontal
                    showsHorizontalScrollIndicator
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {
                            useNativeDriver: false,
                        }
                    )}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>

            {currentIndex === 3 ? null : (
                <Paginator data={slidesData} scrollX={scrollX} />
            )}

            {currentIndex === 3 ? (
                <View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={() => navigation.push('Registration')}
                    >
                        <Text style={{ color: '#ffffff' }}>
                            Зарегистрироваться
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btnWhite}
                        onPress={async () => {
                            await dispatch(setGuest(true))
                            await dispatch(setAuthorization(true))
                        }}
                    >
                        <Text style={{ color: '#1F8BA7' }}>
                            Войти как гость
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : null}
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 45,
        backgroundColor: '#ffffff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 60,
    },
    btn: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 23,
        backgroundColor: '#1F8BA7',
    },
    btnWhite: {
        width: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderRadius: 23,
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
        borderColor: '#1F8BA7',
        marginTop: 11,
    },
    // images: {
    //   height: 310,
    //   marginTop: 113,
    //   marginBottom: 100,
    //   // display: 'flex',
    //   // justifyContent: 'center',
    //   // alignItems: 'center'
    // },
    // imagesContainer: {
    //   width: '100%',
    //   flex: 1
    // },
    // text: {
    //   color: '#4B4747',
    //   fontSize: 18,
    //   marginBottom: 30,
    // },
    // dotsContainer: {
    //   display: 'flex',
    //   flexDirection: 'row',
    //   marginBottom: 30,
    // },
    // dots: {
    //   width: 6,
    //   height: 6,
    //   backgroundColor: '#F3F3F3',
    //   marginRight: 10,
    //   marginLeft: 10,
    //   borderRadius: 100,
    // },
    // dotsActive: {
    //   width: 16,
    //   height: 6,
    //   backgroundColor: '#4BCCED',
    //   marginRight: 10,
    //   marginLeft: 10,
    //   borderRadius: 100,
    // },
    // nextBtn: {
    //   backgroundColor: '#1F8BA7',
    //   width: 320,
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   padding: 12,
    //   borderRadius: 23,
    // },
    // nextBtnText: {
    //   color: '#ffffff',
    //   fontSize: 17
    // }
})
