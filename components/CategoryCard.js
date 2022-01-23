import React from 'react'
import { main } from '../styles/main'
import { Image, ImageBackground, Text, TouchableOpacity } from 'react-native'

const CategoryCard = ({ data, navigation }) => {

    return (
        <TouchableOpacity
            style={main.categoriesItem}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Categories', data)}
        >
            <ImageBackground
                style={{
                    width: 75,
                    height: 75,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
                source={require('../assets/main/categoriisCircle.png')}
            >
                <Image
                    style={{ resizeMode: 'contain', width: 36, height: 38 }}
                    source={{ uri: data?.image }}
                />
            </ImageBackground>
            <Text style={main.categoriesItemText}>{data.title}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard
