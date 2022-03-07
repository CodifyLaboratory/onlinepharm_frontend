import React from 'react'
import {news} from '../styles/news'
import {Image, Text, TouchableOpacity, View} from 'react-native'
import NewsIcon from './../assets/icons/newsFarmIcon.svg'
import {strings} from "../localization";

const NewsCard = ({navigation, data}) => {
    const re = /-/gi;

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('NewsInfo', data.id)
            }}
            style={news.farmCard}
            activeOpacity={0.85}
            key={data.id}
        >
            <View style={news.farmCardInfo}>
                <View style={news.nameFarm}>
                    <NewsIcon/>
                    <Text
                        style={news.farmName}>{data?.pharmacy?.pharmacy_profile ? data?.pharmacy?.pharmacy_profile.title : ''}</Text>
                </View>
                <Text style={news.farmDesc}>{data.title}</Text>
                <Text style={news.farmDate}>
                    {strings.main.from} {data?.start_date?.replace(re, '.')} {strings.main.to}{' '}
                    {data?.end_date?.replace(re, '.')}
                </Text>
                <TouchableOpacity
                    style={news.farmCardBtn}
                    onPress={() => {
                        navigation.navigate('NewsInfo', data.id)
                    }}
                    activeOpacity={0.85}
                    key={data.id}
                >
                    <Text style={news.farmCardBtnText}>{strings.main.more}</Text>
                </TouchableOpacity>
            </View>
            <Image
                style={news.farmCardImage}
                source={
                    data.image
                        ? {uri: data.image}
                        : require('../assets/news/emptynews.png')
                }
            />
        </TouchableOpacity>
    )
}

export default NewsCard
