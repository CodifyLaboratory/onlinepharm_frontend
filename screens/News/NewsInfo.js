import React, { useEffect, useState, useMemo } from 'react'
import { Text, ScrollView, Image, StyleSheet, Dimensions } from 'react-native'

import { newsInfo } from '../../styles/newsInfo'
import MedicineCard from '../../components/MedicineCard'
import { strings } from '../../localization'
import { getNewsById } from '../../api'
import Loader from '../../components/Loader'


const replacedStr = /-/gi

function NewsInfo({ route }) {
    const [newsData, setNewsData] = useState({})
    const [loading, setLoading] = useState(false)

    let id = route.params


    useEffect(() => {
        getNewsList().then(r => setNewsData(r))
    }, [])

    const medicationList = useMemo(
        () =>
            newsData?.medications?.map((item) => (
                <MedicineCard key={item.id} />
            )),
        [newsData]
    )

    const getNewsList = async () => {
        setLoading(true)
        try {
            return await getNewsById(id)
        } catch (e) {
            throw new Error(e)
        } finally {
            setLoading(false)
        }
    }

    console.log('news+++++++++++', newsData)

    if (loading) return <Loader />

    return (
        <ScrollView style={styles.container}>
            <Image
                resizeMode="contain"
                style={styles.image}
                source={newsData.image
                    ? {uri: newsData.image}
                    : require('../../assets/LOGO.png') }
            />
            <Text style={styles.title}>{newsData?.title}</Text>
            <Text style={styles.date}>
                {strings.main.from}{' '}
                {newsData?.start_date?.replace(replacedStr, '.')}{' '}
                {strings.main.to}{' '}
                {newsData?.end_date?.replace(replacedStr, '.')}
            </Text>
            <Text style={styles.description}>{newsData?.description}</Text>
        </ScrollView>
    )
}

export default NewsInfo

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: Dimensions.get('window').width - 77,
        height: 200,
        marginBottom: 15,
        alignSelf: 'center',
        borderRadius: 20,
    },
    title: {
        fontSize: 20,
        color: '#1F8BA7',
        marginBottom: 24,
        lineHeight: 30,
        fontStyle: 'normal',
        fontFamily: 'Poppins-Regular',
    },
    date: {
        color: '#999999',
        fontSize: 14,
        marginBottom: 16,
        fontStyle: 'normal',
        lineHeight: 21,
        fontFamily: 'Poppins-Regular',
    },
    description: {
        color: '#4B4747',
        fontSize: 16,
        marginBottom: 24,
        fontStyle: 'normal',
        lineHeight: 24,
        fontFamily: 'Poppins-Regular',
    },
})
