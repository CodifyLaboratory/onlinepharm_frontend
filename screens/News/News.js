import React, { useEffect, useMemo, useState } from 'react'
import {
    ActivityIndicator,
    Dimensions,
    FlatList,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import { news } from '../../styles/news'

import NewsCard from '../../components/NewsCard'
import { Colors } from '../../constants/colors'
import { getNews, getNewsCategories } from '../../api'
import Loader from '../../components/Loader'

export default function News({ navigation }) {
    const [categoryDataId, setCategoryDataId] = useState([])
    const [newsItems, setNewsItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [more, setMore] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    const [filters, setFilters] = useState({
        filterCategory: null,
        page: currentPage,
    })

    // console.log('newsItems', newsItems)

    useEffect(() => {
        getNewsItems().then((r) => setNewsItems(r))
        getCategories().then((r) => setCategoryDataId(r))
    }, [])

    const getNewsItems = async () => {
        setLoading(true)
        try {
            console.log('filter', filters)
            return await getNews({ ...filters })
        } catch (e) {
            throw new Error(e)
        } finally {
            setLoading(false)
        }
    }

    const getCategories = async () => {
        try {
            const res = await getNewsCategories()
            !filters.filterCategory &&
                setFilters({ ...filters, filterCategory: res[0]?.id })
            return res
        } catch (e) {
            throw new Error(e)
        }
    }
    const changeCategory = (id) => {
        setFilters({ ...filters, filterCategory: id, page: 1 })
    }

    const onScrollEnd = async () => {
        try {
            setMore(true)
            setCurrentPage(currentPage + 1)
            const res = await getNews({ ...filters, page: currentPage + 1 })
            // console.log('res', res)

            setNewsItems([...newsItems, res?.results])
        } catch (e) {
        } finally {
            setMore(false)
        }
    }

    if (loading) return <Loader />

    return (
        <View style={{ flex: 1, height: Dimensions.get('window').height }}>
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
                                filters.filterCategory === item.id
                                    ? news.newsItemActive
                                    : news.newsItem
                            }
                        >
                            <Text
                                style={
                                    filters.filterCategory === item.id
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
                style={{ flex: 1 }}
                keyExtractor={(item, index) => index.toString()}
                // numColumns={1}
                pagingEnabled={false}
                onEndReached={onScrollEnd}
                onEndReachedThreshold={0.01}
                data={newsItems?.results}
                // extraData={newsItems?.results}
                ListFooterComponent={
                    more ? (
                        <ActivityIndicator
                            color={'#000000'}
                            size={'large'}
                        />
                    ) : null
                }
                renderItem={({ item }) => (
                    <NewsCard
                        navigation={navigation}
                        data={item}
                        key={item?.id}
                    />
                )}
            />
        </View>
    )
}
