import React, { useEffect, useMemo, useState } from 'react'
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
import { Colors } from '../../constants/colors'
import { getNews, getNewsCategories } from '../../api.js'
import Loader from '../../components/Loader'

export default function News({ navigation }) {
    const [categoryDataId, setCategoryDataId] = useState([])
    const [newsItems, setNewsItems] = useState({})
    const [loading, setLoading] = useState(false)
    const [more, setMore] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)


    const [filters, setFilters] = useState({
        filterCategory: 1,
        page: 1,
    })

    // console.log('newsItems', newsItems)

    useEffect(() => {
        getCategories().then((r) => setCategoryDataId(r))
        getNews({...filters}).then(r => {

            setNewsItems(r)})
    }, [])

    console.log('NEWSITEMS', newsItems)

    useEffect(() => {
        getNewsItems().then((r) => r)
    }, [filters.page])

    const getNewsItems = async () => {
        setLoading(true)
        try {
            const res = await getNews({ ...filters })
            const updated = []
            // updated.push(res?.results)
            // console.log('++++', updated)
            // setNewsItems({...res, results: updated})
            return res
        } catch (e) {
            console.log('e', e)
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

     console.log('NEWS', newsItems?.results)


    const fetchMoreData = () => {
        setFilters({ ...filters, page: filters.page + 1 })
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
                            <Text>{filters.page}</Text>
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
                contentContainerStyle={{ flexGrow: 1 }}
                data={newsItems?.results}
                renderItem={({ item }) => (
                    <NewsCard
                        navigation={navigation}
                        data={item}
                        key={item?.id}
                    />
                )}
                // ListFooterComponent={renderFooter}
                // ListEmptyComponent={renderEmpty}
                onEndReachedThreshold={0.2}
                onEndReached={fetchMoreData}
            />
        </View>
    )
}
