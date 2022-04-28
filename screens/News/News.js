import React, { useEffect, useState } from 'react'
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { news } from '../../styles/news'

import NewsCard from '../../components/NewsCard'

import { getNews, getNewsCategories } from '../../api.js'
import Loader from '../../components/Loader'

export default function News({ navigation }) {
    const [categoryDataId, setCategoryDataId] = useState([])
    const [newsItems, setNewsItems] = useState({})
    const [loading, setLoading] = useState(false)
    const [more, setMore] = useState(false)

    const [filters, setFilters] = useState({
        category: 1,
        page: 1,
    })

    useEffect(() => {
        getCategories().then((r) => setCategoryDataId(r))
        getNews({ ...filters, page: 1 }).then((r) => {
            setNewsItems((prevState) => ({ ...prevState, ...r }))
        })
    }, [filters.category])

    useEffect(() => {
        getNewsItems().then((r) => r)
    }, [filters.page])

    const getNewsItems = async () => {
        if (newsItems?.total_pages === filters.page) return

        setMore(true)
        try {
            const res = await getNews({ ...filters })
            const updated = [...newsItems?.results, ...res?.results]
            setNewsItems({ ...newsItems, results: updated })
        } catch (e) {
            throw new Error(e)
        } finally {
            setMore(false)
        }
    }

    const getCategories = async () => {
        setLoading(true)
        try {
            const res = await getNewsCategories()
            !filters.category &&
                setFilters({ ...filters, category: res[0]?.id })
            return res
        } catch (e) {
            throw new Error(e)
        } finally {
            setLoading(false)
        }
    }
    const changeCategory = (id) => {
        setFilters({ ...filters, category: id, page: 1 })
    }

    const fetchMoreData = () => {
        if (filters.page < newsItems?.total_pages) {
            setFilters({ ...filters, page: filters.page + 1 })
        }
    }

    const renderFooter = () => (
        <View style={{ paddingBottom: 20, ...news.footerText }}>
            {more && <ActivityIndicator size="large" color="#1F8BA7" />}
            {newsItems?.total_pages === filters.page && (
                <Text>No more articles at the moment</Text>
            )}
        </View>
    )

    if (loading) return <Loader />

    return (
        <View style={{ flex: 1, height: Dimensions.get('window').height}}>
            <View style={{ height: 30, marginBottom: 20, marginTop: 20 }}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                >
                    {categoryDataId?.map((item) => (
                        <TouchableOpacity
                            onPress={() => changeCategory(item.id)}
                            activeOpacity={0.5}
                            key={item.id}
                            style={
                                filters.category === item.id
                                    ? news.newsItemActive
                                    : news.newsItem
                            }
                        >
                            <Text
                                style={
                                    filters.category === item.id
                                        ? news.newsNavTextActive
                                        : news.newsNavText
                                }
                            >
                                {item.title}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <FlatList
                contentContainerStyle={{ flexGrow: 1}}
                data={newsItems?.results}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <NewsCard navigation={navigation} data={item} />
                )}
                ListFooterComponent={renderFooter}
                onEndReachedThreshold={0.01}
                onEndReached={fetchMoreData}
            />
        </View>
    )
}
