import React, { useEffect, useState } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import { Input } from 'react-native-elements'
import SearchImg from '../../assets/search/search.svg'
import { search } from '../../styles/search'

import { strings } from '../../localization'
import { searchMedication } from '../../api'

const Search = (props) => {
    const [searchValue, setSearchValue] = useState('')
    const [searchData, setSearchData] = useState([])
    const [nothing, setNothing] = useState(false)

    useEffect(() => {
        searchMedication(searchValue).then((res) => {
            console.log('RES', res)
            setNothing(searchValue && !res?.length)
            searchValue.length > 0 ? setSearchData(res) : setSearchData([])
        })
    }, [searchValue])

    return (
        <SafeAreaView>
            <View style={search.container}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Input
                        placeholder={strings.search.search}
                        keyboardType="default"
                        rightIcon={
                            <Icon name="search" size={30} color="#1A1717" />
                        }
                        inputStyle={{ fontSize: 15 }}
                        inputContainerStyle={search.input}
                        onChangeText={(value) => setSearchValue(value)}
                    />
                    <View style={search.back_button_wrap}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate('Main')}
                        >
                            <Text style={search.backBtn}>
                                {strings.auth.back}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {searchData?.length > 0 ? (
                    <View style={search.searchBlock}>
                        {searchData?.map((item) => (
                            <TouchableOpacity
                                style={search.searchItem}
                                key={item.id}
                                onPress={() =>
                                    props.navigation.navigate('Main', {
                                        screen: 'MedicineInfo',
                                        params: { medId: item.id },
                                    })
                                }
                            >
                                <Text style={search.itemText}>
                                    {item?.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : nothing ? (
                    <NotFound />
                ) : (
                    <View style={search.searchLogo}>
                        <SearchImg style />
                        <Text style={search.searchLogoText}>
                            {' '}
                            {strings.search.find_product}
                        </Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

export default Search

const NotFound = () => {
    return (
        <View style={search.nothing_wrap}>
            <Text style={search.nothing_text}>{strings.search.nothing}</Text>
            <Text style={search.nothing_text_secondary}>
                {strings.search.change_query}
            </Text>
            <Text style={search.nothing_text_secondary}>
                {strings.search.check_query}
            </Text>
        </View>
    )
}
