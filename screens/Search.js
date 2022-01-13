import React, { useEffect, useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Platform,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Input } from 'react-native-elements'
import SearchImg from '../assets/search/search.svg'
import { search } from '../styles/search'
import Api from '../API'

const Search = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('')
    const [searchData, setSearchData] = useState([])
    useEffect(() => {
        Api.getData(`medications/?search=${searchValue}`).then((res) =>
            searchValue.length > 0 ? setSearchData(res.data) : setSearchData([])
        )
        console.log(searchData, 'dataaa')
    }, [searchValue])

    return (
        <SafeAreaView>
            <View style={search.container}>
                <Input
                    keyboardType="default"
                    rightIcon={<Icon name="search" size={30} color="#1A1717" />}
                    inputStyle={{ fontSize: 15 }}
                    inputContainerStyle={search.input}
                    onChangeText={(value) => setSearchValue(value)}
                />
                {searchData.length > 0 ? (
                    <View style={search.searchBlock}>
                        {searchData?.map((item) => (
                            <TouchableOpacity
                                style={search.searchItem}
                                key={item.id}
                                onPress={() =>
                                    navigation.navigate('MedicineInfo', item.id)
                                }
                            >
                                <Text style={search.itemText}>
                                    {item?.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    <View style={search.searchLogo}>
                        <SearchImg style />
                        <Text style={search.searchLogoText}>
                            {' '}
                            Найдите желаемый продукт
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Search
