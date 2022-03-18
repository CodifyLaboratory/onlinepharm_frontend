import React, { useEffect, useMemo, useState, useRef } from 'react'
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import Map from '../Main/Map'
import { farms } from '../../styles/farms'
import SelectPharmCard from '../../components/SelectPharmCard'
import { Colors } from '../../constants/colors'
import {strings} from "../../localization";
import { selectPharm } from '../../styles/selectPharm'
import { getDeliveryPharmacy, getPharmBrands } from '../../api'
import PharmacyMap from './PharmacyMap'

const SelectPharmacy = ({ navigation, route }) => {
    const [type, setType] = useState(true)
    const [pharmacies, setPharmacies] = useState([])
    const [brands, setBrands] = useState([])
    const [selectedFarm, setSelectedFarm] = useState(0)

    useEffect(() => {
       getPharmacies().then(res => setPharmacies(res))
       getPharmBrands().then((res) => setBrands(res))
    }, [])

    const pickerRef = useRef()
    function open() {
        pickerRef.current.focus()
    }
    function close() {
        pickerRef.current.blur()
    }


    const getPharmacies = async() => {
        try {
        return await getDeliveryPharmacy()
        } catch(e) {
            throw new Error(e)
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
                <View style={farms.picker_container}>
                    <Image
                        style={farms.picker_icon}
                        source={require('../../assets/farms/picker_arrow.png')}
                    />
                    <Picker
                        style={{
                            width: '100%',
                            height: 40,
                            backgroundColor: '#fff',
                            borderRadius: 20,
                            marginBottom: 24,
                        }}
                        ref={pickerRef}
                        selectedValue={selectedFarm}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedFarm(itemValue)
                        }
                    >
                        <Picker.Item
                            mode={'dropdown'}
                            label={strings.main.select_pharmacy}
                            value={0}
                        />
                        {brands.map((item) => (
                            <Picker.Item
                                label={item.title}
                                value={item.id}
                                key={item.id}
                            />
                        ))}
                    </Picker>
                </View>

                {type ? (
                    farmsList
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
