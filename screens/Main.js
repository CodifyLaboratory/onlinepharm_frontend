import React, { useEffect, useState, useMemo } from 'react'
import {
    Text,
    View,
    TouchableWithoutFeedback,
    ScrollView,
    SafeAreaView,
    Dimensions,
} from 'react-native'
import Carousel from 'react-native-snap-carousel'

import Logo from '../assets/header/logo.svg'

import Api from '../API'
import { main } from '../styles/main'
import MainFarmCard from '../components/MainFarmCard'
import MainSymptomsCard from '../components/MainSymptomsCard'

import BannerCard from '../components/BannerCard'
import CategoryCard from '../components/CategoryCard'
import NewsCard from '../components/NewsCard'
import Pagination from 'react-native-snap-carousel/src/pagination/Pagination'

import {useDispatch, useSelector} from 'react-redux'
import {loadCart} from "../store/actions";
import {getAllBasket} from "../api";

export default function Main({ navigation }) {

    const [farmCardData, setFarmCardData] = useState([])
    const [bannerData, setBannerData] = useState([])
    const [current, setCurrent] = useState(0)
    const [categoryData, setCategoryData] = useState([])
    const [selectionsData, setSelectionsData] = useState([])
    const [newsData, setNewsData] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {

        Api.getData('pharm-brands/').then((res) => setFarmCardData(res.data))
        Api.getData('banners/').then((res) => setBannerData(res.data))
        Api.getData('categories/').then((res) => setCategoryData(res.data))
        Api.getData('selections/').then((res) => setSelectionsData(res.data))
        Api.getData('news/').then((res) => setNewsData(res.data))
        getBasket().then(r => r)
    }, [dispatch])


    const getBasket = async () => {
        try {
            const res = await getAllBasket()
            await dispatch(loadCart(res))
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
            selectionsData.map((item) => (
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
            newsData.map((item) => (
                <NewsCard data={item} key={item.id} navigation={navigation} />
            )),
        [newsData]
    )

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView>
                <View style={main.container}>
                    <View style={main.header}>
                        <Logo />
                        {/*<SelectDropdown*/}
                        {/*  data={countries}*/}
                        {/*  defaultValueByIndex={0}*/}
                        {/*  buttonTextStyle={{*/}
                        {/*    color: '#1F8BA7',*/}
                        {/*    fontSize: 17,*/}
                        {/*  }}*/}
                        {/*  renderDropdownIcon={() => {*/}
                        {/*    return (*/}
                        {/*      <Arrow/>*/}
                        {/*    );*/}
                        {/*  }}*/}
                        {/*  buttonStyle={{*/}
                        {/*    width: 130,*/}
                        {/*    backgroundColor: 'transparent'*/}
                        {/*  }}*/}
                        {/*  rowStyle={{*/}
                        {/*    borderBottomWidth: 0,*/}
                        {/*    textAlign: 'center'*/}
                        {/*  }}*/}
                        {/*  rowTextStyle={{*/}
                        {/*    color: '#1F8BA7',*/}
                        {/*    fontSize: 17,*/}
                        {/*  }}*/}
                        {/*  dropdownStyle={{*/}
                        {/*    borderRadius: 10,*/}
                        {/*    marginTop: Platform.OS == 'ios' ? -10 : -50,*/}
                        {/*  }}*/}
                        {/*  onSelect={(selectedItem, index) => {*/}
                        {/*    console.log(selectedItem, index);*/}
                        {/*  }}*/}
                        {/*  buttonTextAfterSelection={(selectedItem, index) => {*/}
                        {/*    return selectedItem;*/}
                        {/*  }}*/}
                        {/*  rowTextForSelection={(item, index) => {*/}
                        {/*    return item;*/}
                        {/*  }}*/}
                        {/*/>*/}
                    </View>

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
                    <View>
                        <View style={main.title}>
                            <Text style={main.title_text}>Аптеки</Text>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.push('Farm')}
                            >
                                <Text style={main.watchAll}>Смотреть все</Text>
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
                                Категории товаров
                            </Text>

                        </View>
                        <View style={main.categories}>{categoryList}</View>

                        <View style={main.title}>
                            <Text style={main.title_text}>Подборки</Text>
                        </View>
                        <View style={{ height: 100 }}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                {selectionsList}
                            </ScrollView>
                        </View>

                        <View style={main.title}>
                            <Text style={main.title_text}>Новости</Text>
                            <TouchableWithoutFeedback
                                onPress={() => navigation.push('News')}
                            >
                                <Text style={main.watchAll}>Смотреть все</Text>
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
                {/*<View style={main.appInfo}>*/}
                {/*  <Logo style={{marginBottom: 16}}/>*/}
                {/*  <Text style={main.appInfoText}>MyMed— знак качества, который обеспечивает высокое качество, безопасность*/}
                {/*    лекарств и оптимальные цены</Text>*/}
                {/*  <Text style={main.appInfoText}>Это значит, что покупатели могут получить отличное обслуживание в аптеке и*/}
                {/*    приобрести качественные лекарства по доступным ценам.*/}
                {/*    Вы можете быть уверены в профессионализме аптек, входящих в союз MyMed</Text>*/}
                {/*</View>*/}
            </SafeAreaView>
        </ScrollView>
    )
}
