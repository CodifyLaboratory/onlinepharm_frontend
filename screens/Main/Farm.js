import React, { useEffect, useMemo, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native'
import FarmCard from '../../components/FarmCard'
import BrandCard from '../../components/BrandCard'
import Api from '../../API'
import { farm } from '../../styles/farm'
import { Colors } from '../../constants/colors'

function Farm({ navigation }) {
    const [branchData, setBranchData] = useState([])

    useEffect(() => {
        Api.getData(`pharm-brands/`)
            .then((res) => setBranchData(res.data))
            .catch((e) => console.log(e))
    }, [])

    const branchList = useMemo(
        () =>
            branchData?.map((item) => (
                <BrandCard navigation={navigation} key={item.id} data={item} />
            )),
        [branchData]
    )

    return (
        <ScrollView style={{ backgroundColor: Colors.background }}>
            <View style={farm.container}>{branchList}</View>
        </ScrollView>
    )
}

export default Farm