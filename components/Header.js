import React, {useEffect, useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Colors} from "../constants/colors";
import ArrowBack from '../assets/header/header_arrow.svg'
import {strings} from "../localization";
import {myMedicine} from "../styles/components/myMedicine";
import {
    createPharmFavorite,
    createProductFavorite,
    deleteProductFavorite,
    deletePharmFavorite,
    getFavorites,
    getFavoritesProducts
} from "../api";

import {useDispatch, useSelector} from "react-redux";
import {setPharmacyFavorite, setMedicineFavorite} from "../store/actions";

const Header = ({title, navigation, handleChange, profile, about_pharmacy, about_product, route}) => {

    const { favorites_medicine, favorites_pharmacy } = useSelector(state => state.data)

    const {title_category, medId, pharmacy_id, updateProfile } = route?.params || ''

    console.log('MED ID', medId)

    const dispatch = useDispatch()

    const [updated, setUpdate] = useState(false)

    useEffect(() => {
        initFavorites().then(r => r)
    }, [updated])

    const initFavorites = async () => {
        const products = await getFavoritesProducts()
        dispatch(setMedicineFavorite(products))
        const pharmacy = await getFavorites()
        dispatch(setPharmacyFavorite(pharmacy))
    }
    const product_checked = favorites_medicine.find(item => item.medication.id === medId)

    const pharmacy_checked = favorites_pharmacy.find(item => item.pharmacy.id === pharmacy_id)

    const handlePharmacyChange = async () => {
        setUpdate(true)
        try {
           !pharmacy_checked
               ? await createPharmFavorite(pharmacy_id)
               : await deletePharmFavorite(pharmacy_checked.id)
        } catch (e) {
            console.log(e)
        } finally {
            setUpdate(false)
        }
    }

    const handleMedicineChange = async () => {
        setUpdate(true)
        try {
            !product_checked
                ? await createProductFavorite(medId)
                : await deleteProductFavorite(product_checked.id)
        } catch (e) {
            throw new Error(e)
        } finally {
            setUpdate(false)
        }
    }

    return (
        <View style={header.container}>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={header.back_button}
            >
                <ArrowBack style={header.icon}/>
                <Text style={header.text}>{strings.auth.back}</Text>
            </TouchableOpacity>
            <View><Text style={header.title}>{title ? title : title_category}</Text></View>
            {updateProfile ? <TouchableOpacity
                onPress={() => updateProfile()}
                style={header.save_button}
            >
                <Text style={header.save_text}>{strings.profile.save}</Text>
            </TouchableOpacity> : null}
            {about_product ?
                <TouchableOpacity
                    onPress={handleMedicineChange}
                    style={header.favorite}
                >
                    <Image
                        style={myMedicine.heart}
                        source={
                            (product_checked)
                                ? require('./../assets/icons/fullHeart.png')
                                : require('./../assets/icons/emptyHeart.png')
                        }
                    />
                </TouchableOpacity> : null}

            {about_pharmacy ?
                <TouchableOpacity
                    onPress={handlePharmacyChange}
                    style={header.favorite}
                >
                    <Image
                        style={myMedicine.heart}
                        source={
                            (pharmacy_checked)
                                ? require('./../assets/icons/fullHeart.png')
                                : require('./../assets/icons/emptyHeart.png')
                        }
                    />
                </TouchableOpacity> : null}
        </View>
    )
}

export default Header

export const header = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 52,
        flexDirection: 'row',
        backgroundColor: Colors.white,
    },
    text: {
        color: '#999999',
        fontSize: 15,
        fontFamily: 'SF-Pro-Medium'
    },
    icon: {
        marginLeft: 16,
        marginRight: 6,
    },
    title: {
        fontSize: 17,
        fontFamily: 'SF-Pro-SemiBold',
        lineHeight: 21,
        color: Colors.primary,
        marginTop: -10.5,
        width: 220,
        alignSelf: 'center',
        textAlign: 'center'
    },
    back_button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        left: 0,
        position: 'absolute'
    },
    save_button: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        right: 16,
        position: 'absolute'
    },
    save_text: {
        fontSize: 15,
        fontFamily: 'SF-Pro-Medium',
        color: Colors.primary
    },
    favorite: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        right: 18,
        position: 'absolute'
    }
})
