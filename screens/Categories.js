import React, { useEffect, useState, useMemo } from 'react'
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    Image,
    TouchableOpacity,
    StyleSheet,
    Platform,
    TouchableWithoutFeedback,
    Dimensions,
} from 'react-native'
import Api from '../API'
import Carousel from 'react-native-snap-carousel'
import Banner from '../assets/main/baner.svg'
import BannerCard from '../components/BannerCard'
import PopularMedicine from '../components/PopularMedicine'

import { main } from '../styles/main'
import { categories } from '../styles/categories'
import Pagination from 'react-native-snap-carousel/src/pagination/Pagination'

function Categories({ navigation, route }) {
    const id = route.params
    const [bannerData, setBannerData] = useState([])
    const [popularData, setPopularData] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [current, setCurrent] = useState(0)
    const [popularIndex, setPopularIndex] = useState(0)

    useEffect(() => {
        Api.getData('banners/').then((res) => setBannerData(res.data))
        Api.getData('popular-medications/').then((res) =>
            setPopularData(res.data)
        )
        Api.getData('subcategories/').then((res) => setSubCategory(res.data))
    }, [])

    function symptomsItem() {
        return (
            <View style={categories.symptomsSliderElem}>
                <Image
                    style={{ width: 36, height: 36 }}
                    source={require('../assets/main/symptomsLogo.png')}
                />
                <Text
                    style={{
                        color: '#1F8BA7',
                        fontSize: 11,
                        lineHeight: 13,
                        marginTop: 11,
                    }}
                >
                    Головная боль
                </Text>
            </View>
        )
    }

    return (
        <ScrollView>
            <SafeAreaView style={categories.container}>
                <View style={main.banner}>
                    <Carousel
                        onBeforeSnapToItem={(e) => setCurrent(e)}
                        sliderWidth={Dimensions.get('screen').width}
                        itemWidth={375}
                        data={bannerData}
                        renderItem={(item) => (
                            <BannerCard
                                data={item}
                                key={item.id}
                                navigation={navigation}
                            />
                        )}
                        layout={'default'}
                    />
                    <Pagination
                        inactiveDotStyle={main.inactiveBullet}
                        dotStyle={main.dotStyle}
                        dotsLength={bannerData.length}
                        activeDotIndex={current}
                    />
                </View>

                <View style={categories.pillsContainer}>
                    {subCategory?.map((item) => (
                        <TouchableOpacity
                            key={item.id}
                            style={categories.pillsListElem}
                            activeOpacity={0.8}
                            onPress={() =>
                                navigation.navigate('CategoriesMedicines', item)
                            }
                        >
                            <Text style={categories.pillsListElemText}>
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={categories.popular}>
                    <Text style={{ marginBottom: 20, marginLeft: 16 }}>
                        Популярные
                    </Text>
                    <View
                        style={{
                            paddingBottom: popularData.length > 1 ? 0 : 16,
                        }}
                    >
                        <View>
                            <View>
                                <Carousel
                                    slideStyle={{ margin: 4.5 }}
                                    activeSlideAlignment="start"
                                    contentContainerCustomStyle={{
                                        paddingLeft: 8,
                                    }}
                                    inactiveSlideScale={1}
                                    inactiveSlideOpacity={1}
                                    onBeforeSnapToItem={(e) =>
                                        setPopularIndex(e)
                                    }
                                    sliderWidth={Dimensions.get('window').width}
                                    itemWidth={167}
                                    data={popularData}
                                    renderItem={(item) => (
                                        <PopularMedicine
                                            navigation={navigation}
                                            key={item.id}
                                            data={item.item}
                                        />
                                    )}
                                    layout={'default'}
                                />
                            </View>
                            <Pagination
                                inactiveDotStyle={main.inactiveBullet}
                                dotStyle={main.dotStyle}
                                dotsLength={popularData.length}
                                activeDotIndex={popularIndex}
                            />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Categories
