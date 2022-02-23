import React, { useEffect, useState } from 'react'
import { farms } from '../styles/farms'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { createPharmFavorite, getFavorites, deletePharmFavorite } from '../api'
import {useDispatch, useSelector} from "react-redux";
import {setAuthorization, setPharmacyFavorite} from "../store/actions";

import Tag from '../assets/farms/tag.svg'
import {farm} from "../styles/farm";
import Location from "../assets/farms/location.svg";
import {strings} from "../localization";
import CalculateDistance from "./CalculateDistance";
import { selectPharm } from '../styles/selectPharm';
import { selectPharmCard } from '../styles/components/selectPharmCard';

const SelectPharmCard = ({ navigation, data }) => {

    const dispatch = useDispatch()

    const {is_guest, favorites_pharmacy} = useSelector(state => state.data)

    const [isChecked, setChecked] = useState(null)

    useEffect(() => {
        getAllFavorites().then(r => r)
    }, [isChecked])

    const getAllFavorites = async () => {
        try {
            const res = await getFavorites()
            dispatch(setPharmacyFavorite(res))
            setChecked(isSelected())
        } catch (e) {
            console.log(e)
        }
    }

    const isSelected = () => {
        return favorites_pharmacy.some((item) => item.pharmacy.id === data.id)
    }

    const findId = favorites_pharmacy.find((item) => item.pharmacy.id === data.id)

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
        <View style={selectPharmCard.container}>
            <Image
                style={selectPharmCard.farmImg}
                source={{ uri: data?.pharmacy_profile?.logo }}
            />
            <View style={{ marginLeft: 16 }}>
                <Text style={selectPharmCard.farmName}>
                    {data?.title}
                </Text>
                <Text style={selectPharmCard.farmAdress}>{data?.location?.address}</Text>
                <View style={selectPharmCard.farmLocation}>
                    <Tag style={{marginRight: 6}} />
                    <CalculateDistance data={data} />
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
                    onPress={() => console.log('+')}
                >
                    <Text style={farms.farmFindText}>{strings.cart.choose}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SelectPharmCard
