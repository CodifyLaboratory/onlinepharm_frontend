import React, { useEffect, useState, useMemo } from 'react'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
    Dimensions
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Logo from '../../assets/header/logo.svg'

import { main } from '../../styles/main'
import MainFarmCard from '../../components/MainFarmCard'
import MainSymptomsCard from '../../components/MainSymptomsCard'

import BannerCard from '../../components/BannerCard'
import CategoryCard from '../../components/CategoryCard'
import NewsCard from '../../components/NewsCard'
import Pagination from 'react-native-snap-carousel/src/pagination/Pagination'

import {useDispatch, useSelector} from 'react-redux'
import {loadCart} from "../../store/actions";
import {
    getAllBasket,
    getBanners,
    getCategories,
    getNews,
    getPharmBrands,
    getSelections
} from "../../api";
import {strings} from "../../localization";
import {filters} from "css-select";

export default function Main({ navigation }) {


    const [farmCardData, setFarmCardData] = useState([])
    const [bannerData, setBannerData] = useState([])
    const [current, setCurrent] = useState(0)
    const [categoryData, setCategoryData] = useState([])
    const [selectionsData, setSelectionsData] = useState([])
    const [newsData, setNewsData] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        getPharmBrands().then((res) => setFarmCardData(res))
        getBanners().then((res) => setBannerData(res))
        getCategories().then((res) => setCategoryData(res))
        getSelections().then((res) => setSelectionsData(res))
        getNews({page: 1, filtersCategory: 1}).then((res) => setNewsData(res?.results))
        getBasket().then(r => dispatch(loadCart(r)))
    }, [dispatch])


    const getBasket = async () => {
        try {
            return await getAllBasket()
        } catch (e) {
            console.log('e', e)
        }
    }




    const farmCardList = useMemo(
        () =>
            farmCardData.map((item) => (
                <MainFarmCard
                    navigation={navigation}
                    data={item}
                    key={item.id}
                />
            )),
        [farmCardData]
    )

    const categoryList = useMemo(
        () =>
            categoryData.map((item) => (
                <CategoryCard
                    data={item}
                    key={item.id}
                    navigation={navigation}
                />
            )),
        [categoryData]
    )

    const selectionsList = useMemo(
        () =>
            selectionsData?.map((item) => (
                <MainSymptomsCard
                    data={item}
                    key={item.id}
                    navigation={navigation}
                />
            )),
        [selectionsData]
    )

    const newsList = useMemo(
        () =>
            newsData?.map((item) => (
                <NewsCard data={item} key={item.id} navigation={navigation} />
            )),
        [newsData]
    )

    return (
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{flex: 1}}>
                <View style={main.container}>
                    <View style={main.header}>
                        <Logo />
                    </View>
                    {bannerData?.length ?
                    <View style={{...main.banner, paddingBottom: (bannerData.length < 2) ? 20 : 0}}>
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
                    </View> : null}

                    <View>
                        <View style={main.title}>
                            <Text style={main.title_text}>{strings.main.pharmacies}</Text>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.push('Farms', 0)}
                            >
                                <Text style={main.watchAll}>{strings.main.show_all}</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={{ height: 132 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {farmCardList}
                            </ScrollView>
                        </View>

                        <View style={main.title}>
                            <Text style={main.title_text}>
                                {strings.main.product_categories}
                            </Text>

                        </View>
                        <View style={main.categories}>{categoryList}</View>

                        {selectionsData?.length ? <>
                            <View style={main.title}>
                                <Text style={main.title_text}>{strings.main.collections}</Text>
                            </View>
                            <View style={{ height: 100 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    {selectionsList}
                                </ScrollView>
                            </View>
                        </> : null}


                        <View style={main.title}>
                            <Text style={main.title_text}>{strings.news.news}</Text>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.push('News')}
                            >
                                <Text style={main.watchAll}>{strings.main.show_all}</Text>
                            </TouchableWithoutFeedback>
                        </View>
                        <View style={main.banner_news}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {newsList}
                            </ScrollView>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
