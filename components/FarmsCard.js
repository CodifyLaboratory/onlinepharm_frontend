import React, { useEffect, useState } from 'react'
import { farms } from '../styles/farms'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { createPharmFavorite, getFavorites, deletePharmFavorite } from '../api'
import {useDispatch, useSelector} from "react-redux";
import {setAuthorization} from "../store/actions";

import Tag from '../assets/farms/tag.svg'
import {farm} from "../styles/farm";
import Location from "../assets/farms/location.svg";
import {strings} from "../localization";

const FarmsCard = ({ navigation, data }) => {

    const dispatch = useDispatch()

    const {is_guest} = useSelector(state => state.data)

    const [favorite, setFavorite] = useState([])
    const [isChecked, setChecked] = useState(null)

    useEffect(() => {
        getAllFavorites()
    }, [isChecked])

    const getAllFavorites = async () => {
        try {
            const res = await getFavorites()
            setFavorite(res)
            setChecked(isSelected())
        } catch (e) {
            console.log(e)
        }
    }

    const isSelected = () => {
        return favorite.some((item) => item.pharmacy.id === data.id)
    }

    const findId = favorite.find((item) => item.pharmacy.id === data.id)

    const handleChange = async () => {
        if(is_guest) dispatch(setAuthorization(false))
        if (isChecked) {
            await deletePharmFavorite(findId.id)
            setChecked(false)
        } else {
            await createPharmFavorite(data.id)
            setChecked(true)
        }
    }

    return (
        <View style={farms.farmCard}>
            <Image
                style={farms.farmImg}
                source={{ uri: data?.pharmacy_profile?.logo }}
            />
            <View style={{ marginLeft: 16 }}>
                <Text style={farms.farmName}>
                    {data?.pharmacy_profile?.title}
                </Text>
                <Text style={farms.farmAdress}>{data?.location?.address}</Text>
                <View style={farm.farmLocation}>
                    <Tag style={{marginRight: 6}} />
                    <Text style={farm.farmClose}>4km {strings.main.away}</Text>
                </View>
            </View>
            <View style={{ alignItems: 'space-between', height: '100%' }}>
                <TouchableOpacity onPress={() => handleChange()}>
                    <Image
                        style={farms.farmImage}
                        source={
                            isSelected()
                                ? require('./../assets/icons/fullHeart.png')
                                : require('./../assets/icons/emptyHeart.png')
                        }
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.6}
                    style={farms.farmFind}
                    onPress={() => navigation.navigate('FarmInfo', data.id)}
                >
                    <Text style={farms.farmFindText}>{strings.main.more}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FarmsCard
