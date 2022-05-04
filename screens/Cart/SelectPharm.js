import React, { useEffect, useMemo, useState } from 'react'
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import { farms } from '../../styles/farms'
import SelectPharmCard from '../../components/SelectPharmCard'
import { Colors } from '../../constants/colors'
import { strings } from '../../localization'

import { getDeliveryPharmacy, getPharmBrands } from '../../api'
import PharmacyMap from './PharmacyMap'
import SelectDropdown from 'react-native-select-dropdown'
import Loader from '../../components/Loader'
import EmptyList from '../../components/ListEmpty'

import ArrowDown from '../../assets/icons/arrow_down.svg'

const SelectPharmacy = ({ navigation, route }) => {
    const [type, setType] = useState(true)
    const [pharmacies, setPharmacies] = useState([])
    const [brands, setBrands] = useState([])
    const [selectedFarm, setSelectedFarm] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        getPharmacies().then((res) => setPharmacies(res))
        getPharmBrands().then((res) => setBrands(res))
    }, [])


    const getPharmacies = async () => {
        setLoading(true)
        try {
            const res = await getDeliveryPharmacy()
            return res
        } catch (e) {
            console.log('error++++++++++++++++++', e)
            throw new Error(e)
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
                    } else if (item?.brand) {
                        return item?.brand === selectedFarm
                    }
                })
                .map((item) => (
                    <SelectPharmCard
                        key={item.id}
                        navigation={navigation}
                        data={item}
                    />
                )),
        [pharmacies, selectedFarm]
    )

    if (loading) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={farms.container}>
                <View style={farms.type}>
                    <TouchableOpacity
                        style={type ? farms.typeElemActive : farms.typeElem}
                        onPress={() => setType(!type)}
                    >
                        <Text
                            style={type ? farms.typeTextActive : farms.typeText}
                        >
                            {strings.main.list}
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={!type ? farms.typeElemActive : farms.typeElem}
                        onPress={() => setType(!type)}
                    >
                        <Text
                            style={
                                !type ? farms.typeTextActive : farms.typeText
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
                        return <ArrowDown style={{ marginRight: 10 }} />
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
                    <PharmacyMap
                        pharmacies={pharmacies}
                        selectedFarm={selectedFarm}
                        navigation={navigation}
                    />
                )}
            </View>
        </ScrollView>
    )
}

export default SelectPharmacy

const styles = StyleSheet.create({
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
