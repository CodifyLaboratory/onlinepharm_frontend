import React, { useState, useEffect, useMemo } from 'react'
import {
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    Text,
    StyleSheet,
    Platform,
    SafeAreaView,
} from 'react-native'
import { categoriesMedicines } from '../styles/categoriesMedicines'
import MedicineCard from './../components/MedicineCard'
import Api from '../API'
import Loader from "../components/Loader";

function CategoriesMedicines({ navigation, route }) {
    const category = route.params
    const [medicines, setMedicines] = useState(null)

    useEffect(() => {
        Api.getData('medications/').then((res) => setMedicines(res.data))
    }, [])

    if (!medicines) return <Loader />

    return (
        <ScrollView style={{ backgroundColor: '#E6EFF9' }}>
            <SafeAreaView style={categoriesMedicines.container}>
                {medicines
                    .filter((el) => {
                        if (category.id === el.category) {
                            return el
                        }
                    })
                    .map((item) => (
                        <MedicineCard key={item.id} data={item} type="" navigation={navigation} />
                    ))}
            </SafeAreaView>
        </ScrollView>
    )
}

export default CategoriesMedicines
