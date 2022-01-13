import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { myMedicine } from '../styles/components/myMedicine'
import { cartItem } from '../styles/components/cartItem'
import CartWhite from './../assets/icons/cartWhiteSmall.svg'
import Api from './../API/index'

import {
    createProductFavorite,
    deleteProductFavorite,
    getFavoritesProducts
} from "../api";

function MedicineCard({ navigation, data, type }) {

    const [count, setCount] = useState(0)

    const [isChecked, setChecked] = useState(null)

    const [favorite, setFavorite] = useState([])
    const [favId, setFavId] = useState({})

    const [inBasketStatus, setInBasketStatus] = useState(type ? true : false)
    const [basketId, setBasketId] = useState({})
    const [userData, setUserData] = useState(null)

    const counter = (type) =>
        type === 'minus' ? setCount(count - 1) : setCount(count + 1)

    useEffect(() => {
        getAllFavorites()
    }, [isChecked])



    const getAllFavorites = async () => {
        try {
            const res = await getFavoritesProducts()
            setFavorite(res)
            setChecked(isSelected())
        } catch (e) {
            console.log(e)
        }
    }

    const isSelected = () => {
        return favorite.some((item) => item.medication.id === data.id)
    }

    const findId = favorite.find((item) => item.medication.id === data.id)

    const handleChange = async () => {
        if (isChecked) {
            await deleteProductFavorite(findId.id)
            setChecked(false)
        } else {
            await createProductFavorite(data.id)
            setChecked(true)
        }
    }

    // ADD TO YOUR FAVORITE LIST////////////////////////////////

    const addToBasket = () => {
        Api.postData(
            `basket-medications/create/${data.id}/`,
            { count: 1 },
            userData?.access
        )
            .then((res) => {
                res.status === 201
                    ? setInBasketStatus(true)
                    : setInBasketStatus(false)
                setBasketId(res.data)
                console.log(res)
            })
            .catch((e) => console.log(e))
    }

    // console.log(basketId.id);

    // const deleteFromBasket = () => {
    //     Api.deleteData(
    //         `basket-medications/delete/${basketId?.id}/`,
    //         userData?.access
    //     )
    //         .then((res) => {
    //             res.status === 204
    //                 ? setInBasketStatus(false)
    //                 : setInBasketStatus(true)
    //             console.log(res)
    //         })
    //         .catch((e) => console.log(e))
    // }

    // if (count < 1) {
    //     deleteFromBasket()
    //     setCount(1)
    // }

    return (
        <View activeOpacity={0.85} style={myMedicine.medicineCard}>
            <Image style={myMedicine.img} source={{ uri: data.image }} />
            <View>
                <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={myMedicine.name}>{data.title}</Text>
                        <Text style={myMedicine.category}>
                            Цена от:{' '}
                            <Text style={myMedicine.price}>{data.price} с</Text>{' '}
                        </Text>
                    </View>
                    <TouchableOpacity
                        style={{width: 40, height: 40}}
                        onPress={handleChange}
                    >
                        <Image
                            style={myMedicine.heart}
                            source={
                                isSelected()
                                    ? require('./../assets/icons/fullHeart.png')
                                    : require('./../assets/icons/emptyHeart.png')
                            }
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        style={myMedicine.find}
                        onPress={() =>
                            navigation.navigate('MedicineInfo', data.id)
                        }
                    >
                        <Text style={myMedicine.findText}>Подробнее</Text>
                    </TouchableOpacity>

                    {count ? (
                        <TouchableOpacity style={cartItem.counter}>
                            <TouchableOpacity
                                style={cartItem.btn}
                                onPress={() => counter('minus')}
                                // disabled={count === 1 ? true : false}
                                activeOpacity={0.7}
                            >
                                <Image
                                    style={cartItem.counterImg}
                                    source={require('./../assets/icons/minus.png')}
                                />
                            </TouchableOpacity>

                            <Text style={cartItem.counterText}>{count} шт</Text>

                            <TouchableOpacity
                                style={cartItem.btn}
                                onPress={() => counter('plus')}
                                activeOpacity={0.7}
                            >
                                <Image
                                    style={cartItem.counterImg}
                                    source={require('./../assets/icons/plus.png')}
                                />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={myMedicine.favorite}
                            onPress={() => setCount(count+1)}
                        >
                            <Text style={myMedicine.favoriteText}>
                                В корзину
                            </Text>
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </View>
    )
}

export default MedicineCard
