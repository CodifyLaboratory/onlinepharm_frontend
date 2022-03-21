import React, { useEffect, useMemo, useState, useRef } from 'react'
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StyleSheet,
} from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Map from './Map'
import { farms } from '../../styles/farms'
import SelectDropdown from 'react-native-select-dropdown'
import Api from '../../API'
import FarmsCard from '../../components/FarmsCard'
import { Colors } from '../../constants/colors'
import { strings } from '../../localization'
import { getFavorites, getPharmBrands, getPharms } from '../../api'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useDispatch } from 'react-redux'
import { setPharmacyFavorite } from '../../store/actions'
import EmptyList from '../../components/ListEmpty'
import Loader from '../../components/Loader'

const countries = ['Egypt', 'Canada', 'Australia', 'Ireland']

const Farms = ({ navigation, route }) => {
    const [type, setType] = useState(true)
    const [pharmacies, setPharmacies] = useState([])
    const [brands, setBrands] = useState([])
    const [selectedFarm, setSelectedFarm] = useState(route.params)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        _init()
    }, [])

    const _init = async () => {
        setLoading(true)
        try {
            await getPharms().then((res) => setPharmacies(res))
            await getPharmBrands().then((res) => setBrands(res))
            await getFavorites().then((res) => dispatch(setPharmacyFavorite(res)))
        } catch (e) {
        } finally {
            setLoading(false)
        }
    }

    const farmsList = useMemo(
        () =>
            pharmacies
                .filter((item) => {
                    if (selectedFarm === 0) {
                        return item
                    } else if (item?.pharmacy_profile?.brand) {
                        return item?.pharmacy_profile?.brand === selectedFarm
                    }
                })
                .map((item) => (
                    <FarmsCard
                        key={item.id}
                        navigation={navigation}
                        data={item}
                    />
                )),
        [pharmacies, selectedFarm]
    )

    if (loading) return <Loader />

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ backgroundColor: Colors.background }}>
                <View style={farms.container}>
                    <View style={farms.type}>
                        <TouchableOpacity
                            style={type ? farms.typeElemActive : farms.typeElem}
                            onPress={() => setType(!type)}
                        >
                            <Text
                                style={
                                    type ? farms.typeTextActive : farms.typeText
                                }
                            >
                                {strings.main.list}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={
                                !type ? farms.typeElemActive : farms.typeElem
                            }
                            onPress={() => setType(!type)}
                        >
                            <Text
                                style={
                                    !type
                                        ? farms.typeTextActive
                                        : farms.typeText
                                }
                            >
                                {strings.main.on_the_map}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <SelectDropdown
                        data={brands.map((item) => item.title)}
                        defaultValue={0}
                        onSelect={(selectedItem, index) => {
                            setSelectedFarm(brands[index].id)
                        }}
                        defaultButtonText={strings.main.select_pharmacy}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            return item
                        }}
                        buttonStyle={styles.dropdown1BtnStyle}
                        buttonTextStyle={styles.dropdown1BtnTxtStyle}
                        renderDropdownIcon={(isOpened) => {
                            return (
                                <Image
                                    // style={farms.picker_icon}
                                    source={require('../../assets/farms/picker_arrow.png')}
                                />
                            )
                        }}
                        dropdownIconPosition={'right'}
                        dropdownStyle={styles.dropdown1DropdownStyle}
                        rowStyle={styles.dropdown1RowStyle}
                        rowTextStyle={styles.dropdown1RowTxtStyle}
                    />
                    {type ? (
                        farmsList.length ? (
                            farmsList
                        ) : (
                            <EmptyList />
                        )
                    ) : (
                        <Map
                            pharmacies={pharmacies}
                            selectedFarm={selectedFarm}
                            navigation={navigation}
                        />
                    )}
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Farms

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 10,
    },
    header: {
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
    },
    headerTitle: { color: '#000', fontWeight: 'bold', fontSize: 16 },
    saveAreaViewContainer: { flex: 1, backgroundColor: '#000' },
    viewContainer: { flex: 1, backgroundColor: '#FFF' },
    scrollViewContainer: {
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: '10%',
    },

    dropdown1BtnStyle: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 8,
        // borderWidth: 1,
        // borderColor: "#444",
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    dropdown1BtnTxtStyle: { color: '#444', textAlign: 'left' },
    dropdown1DropdownStyle: {
        backgroundColor: Colors.white,
        marginTop: 8,
        borderRadius: 8,
    },
    dropdown1RowStyle: {
        backgroundColor: '#EFEFEF',
        borderBottomColor: '#C5C5C5',
    },
    dropdown1RowTxtStyle: { color: '#444', textAlign: 'left' },
})
