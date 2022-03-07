import React, { useEffect, useState, useMemo } from 'react'
import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
} from 'react-native'
import Api from '../../API'
import Carousel from 'react-native-snap-carousel'

import BannerCard from '../../components/BannerCard'
import PopularMedicine from '../../components/PopularMedicine'

import { main } from '../../styles/main'
import { categories } from '../../styles/categories'
import Pagination from 'react-native-snap-carousel/src/pagination/Pagination'
import {getAllBasket, getBanners, getPopularMedications, getSubcategories} from "../../api";
import {loadCart} from "../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {strings} from "../../localization";

function Categories({ navigation, route }) {

    const dispatch = useDispatch()

    const { cart } = useSelector(state => state.data)

    const {id, title} = route.params

    console.log('id', title)

    const [changed, setChanged] = useState(false)
    const [bannerData, setBannerData] = useState([])
    const [popularData, setPopularData] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [current, setCurrent] = useState(0)
    const [popularIndex, setPopularIndex] = useState(0)

    useEffect(() => {
        navigation.setParams({title_category: title})
        getBanners().then((res) => setBannerData(res))
        getSubcategories(id).then((res) => setSubCategory(res))
    }, [])


    useEffect(()=>{
        getBasket().then(r => r)
        getPopularMedications().then((res) =>
            setPopularData(res)
        )
    }, [changed])


    const getBasket = async () => {
        try {
            const res = await getAllBasket()
            await dispatch(loadCart(res))
        } catch (e) {
            throw new Error(e)
        }
    }

    const findBasketProduct = (id) => {
        return cart?.find(item => item.medication.id === id)
    }


    return (
        <ScrollView>
            <SafeAreaView style={categories.container}>
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
                    <Text style={categories.popular_text}>
                        {strings.main.popular}
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
                                    data={popularData?.slice(0, 10)}
                                    renderItem={(item) => {
                                        const basketObj = findBasketProduct(item.item.id)
                                        return (
                                        <PopularMedicine
                                            setChanged={(e)=>setChanged(e)}
                                            changed={changed}
                                            basketObj={basketObj}
                                            navigation={navigation}
                                            key={item.id}
                                            data={item.item}
                                        />
                                    )}}
                                    layout={'default'}
                                />
                            </View>

                            <Pagination
                                inactiveDotStyle={main.inactiveBullet}
                                dotStyle={main.dotStyle}
                                dotsLength={10}
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
