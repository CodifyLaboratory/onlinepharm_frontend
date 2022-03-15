import React, { useState, useMemo, useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    SafeAreaView,
} from 'react-native'
import { news } from '../../styles/news'

import NewsCard from '../../components/NewsCard'
import { Colors } from '../../constants/colors'
import {getNews, getNewsCategories} from '../../api'
import Loader from '../../components/Loader'

export default function News({ navigation }) {
    const [categoryDataId, setCategoryDataId] = useState([])
    const [newsItems, setNewsItems] = useState([])
    const [category, setCategory] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getNewsItems().then(r => setNewsItems(r))
        getCategories().then(r => setCategoryDataId(r))

    }, [])


    const getNewsItems = async() => {
        setLoading(true)
        try {
           return await getNews()
        } catch(e) {

        } finally {
          setLoading(false)
        }
    }

    const getCategories = async () => {
        try {
            const res = await getNewsCategories()

            changeCategory(res[0]?.id)
            return res

        } catch(e) {

        } finally {

        }
    }

    const changeCategory = (id) => {
        setCategory(id)
    }

    const newsList = useMemo(
        () =>
            newsItems?.filter((item) => item.category === category)
                .map((item) => (
                    <NewsCard
                        navigation={navigation}
                        data={item}
                        key={item.id}
                    />
                )),
        [newsItems, category]
    )

    const categoryList = useMemo(
        () =>
            categoryDataId?.map((item) => (
                <TouchableOpacity
                    onPress={() => changeCategory(item.id)}
                    activeOpacity={0.5}
                    key={item.id}
                    style={
                        category === item.id
                            ? news.newsItemActive
                            : news.newsItem
                    }
                >
                    <Text
                        style={
                            category === item.id
                                ? news.newsNavTextActive
                                : news.newsNavText
                        }
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            )),
        [categoryDataId, category]
    )

    if (loading) return <Loader />

    return (
        <SafeAreaView style={{ backgroundColor: '#E6EFF9', flex: 1, paddingBottom: 24 }}>
            <View style={news.newsInner}>
                <View style={{ height: 31 }}>
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >
                        {categoryList}
                    </ScrollView>
                </View>

                <ScrollView
                    style={{
                        backgroundColor: Colors.background,
                        height: '100%',
                        marginTop: 24,
                    }}
                >
                    <View style={news.container}>{newsList}</View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}
