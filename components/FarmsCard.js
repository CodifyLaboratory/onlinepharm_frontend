import React, { useEffect, useState } from 'react'
import { farms } from '../styles/farms'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { createPharmFavorite, getFavorites, deletePharmFavorite } from '../api'
import {useDispatch, useSelector} from "react-redux";
import {setAuthorization, setPharmacyFavorite} from "../store/actions";

import Tag from '../assets/farms/tag.svg'
import {farm} from "../styles/farm";
import Location from "../assets/farms/location.svg";
import LogoPharm from '../assets/farms/pharmacy-logo.svg'
import {strings} from "../localization";
import CalculateDistance from "./CalculateDistance";

const FarmsCard = ({ navigation, data, favorites }) => {

    const dispatch = useDispatch()

    const {is_guest, favorites_pharmacy} = useSelector(state => state.data)

    const [isChecked, setChecked] = useState(null)


    // const getAllFavorites = async () => {
    //     try {
    //         const res = await getFavorites()
    //         dispatch(setPharmacyFavorite(res))
    //         setChecked(isSelected())
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    const isSelected = () => {
        return favorites_pharmacy.some((item) => item.pharmacy.id === data.id)
    }

    const findId = favorites_pharmacy.find((item) => item.pharmacy.id === data.id)

    const handleChange = async () => {
        if(is_guest) dispatch(setAuthorization(false))
        if (isSelected()) {
            await deletePharmFavorite(findId.id)
            console.log(async ()=> await  getFavorites())
            await dispatch(setPharmacyFavorite(await getFavorites()))
        } else {
            await createPharmFavorite(data.id)
            await dispatch(setPharmacyFavorite(await getFavorites()))
        }
    }

    return (
        <View style={farms.farmCard}>
            {data?.pharmacy_profile?.logo ?  <Image
                style={farms.farmImg}
                source={{ uri: data?.pharmacy_profile?.logo }}
            /> : <LogoPharm />}

            <View style={{ marginLeft: 16 }}>
                <Text style={farms.farmName}>
                    {data?.pharmacy_profile?.title}
                </Text>
                <Text style={farms.farmAdress}>{data?.location?.address}</Text>
                <View style={farm.farmLocation}>
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
                    onPress={() => navigation.navigate('FarmInfo', {pharmacy_id: data.id})}
                >
                    <Text style={farms.farmFindText}>{strings.main.more}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FarmsCard
