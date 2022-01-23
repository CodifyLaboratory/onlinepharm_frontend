import React, {useState, useEffect} from 'react'
import {
    View,
    ScrollView,
} from 'react-native'

import MedicineCard from '../components/MedicineCard'

import Loader from "../components/Loader";
import {Colors} from "../constants/colors";
import {getFavoritesProducts} from "../api";
import {useDispatch, useSelector} from "react-redux";
import {setMedicineFavorite} from "../store/actions";

function MyMedicine({navigation}) {

    const {favorites_medicine} = useSelector(state => state.data)

    const dispatch = useDispatch()
    // const [myMedicine, setMyMedicine] = useState(null)
    const [changed, setChanged] = useState(false)

    useEffect(() => {
        getAllFavorites()
    }, [changed])

    const getAllFavorites = async () => {
        try {
            const res = await getFavoritesProducts()
            dispatch(setMedicineFavorite(res))
            // setMyMedicine(res)
        } catch (e) {
            console.log(e)
        }
    }

    if (!favorites_medicine) return <Loader/>

    return (
        <ScrollView style={{backgroundColor: Colors.background}}>
            <View style={{paddingHorizontal: 16, marginTop: 25}}>
                {favorites_medicine?.map((item) => {
                    // const selected = isSelected(item.id)
                    return (
                        <MedicineCard
                            isSelected={item}
                            key={item.id}
                            data={item.medication}
                            navigation={navigation}
                            setChanged={(e) => setChanged(e)}
                            changed={changed}
                        />
                    )
                })}
            </View>
        </ScrollView>
    )
}

export default MyMedicine
