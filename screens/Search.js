import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    SafeAreaView,
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
    const [nothing, setNothing] = useState(false)

    useEffect(() => {
        Api.getData(`medications/?search=${searchValue}`).then((res) => {
            setNothing(searchValue && !res.data.length)
            searchValue.length > 0 ? setSearchData(res.data) : setSearchData([]) }
        )
    }, [searchValue])

    return (
        <SafeAreaView>
            <View style={search.container}>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Input
                        placeholder={'Поиск'}
                        keyboardType="default"
                        rightIcon={<Icon name="search" size={30} color="#1A1717" />}
                        inputStyle={{ fontSize: 15 }}
                        inputContainerStyle={search.input}
                        onChangeText={(value) => setSearchValue(value)}
                    />
                    <View style={search.back_button_wrap}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Main')}>
                            <Text style={search.backBtn}>Назад</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {searchData.length > 0 ? (
                    <View style={search.searchBlock}>
                        {searchData?.map((item) => (
                            <TouchableOpacity
                                style={search.searchItem}
                                key={item.id}
                                onPress={() =>
                                    navigation.navigate('Main', item.id, {screen: 'MedicineInfo'} )
                                }
                            >
                                <Text style={search.itemText}>
                                    {item?.title}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                ) : (
                    nothing
                        ?  <NotFound />
                        : <View style={search.searchLogo}>
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


const NotFound = () => {
    return (
        <View style={search.nothing_wrap}>
            <Text style={search.nothing_text}>По вашему запросу ничего не найдено</Text>
            <Text style={search.nothing_text_secondary}>Попробуйте изменить ваш запрос</Text>
            <Text style={search.nothing_text_secondary}>Проверьте, нет ли ошибок или опечаток</Text>
        </View>
    )
}
