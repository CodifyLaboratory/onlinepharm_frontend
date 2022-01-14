import React, { useState, useEffect, useMemo } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { myMedicine } from '../styles/components/myMedicine'
import { cartItem } from '../styles/components/cartItem'
import CartWhite from './../assets/icons/cartWhiteSmall.svg'
import Api from './../API/index'

import {
    addToBasket,
    createProductFavorite,
    deleteFromBasket,
    deleteProductFavorite,
    getAllBasket,
    getFavoritesProducts
} from "../api";

function MedicineCard({ navigation, data, type, isSelected, setChanged, changed, basketObj }) {

    const [count, setCount] = useState(0)

    const [favorite, setFavorite] = useState([])
    // const [basket, setBasket] = useState(basketObj)
    //  console.log('basket', basket)
    const [inBasketStatus, setInBasketStatus] = useState(type ? true : false)
    const [basketId, setBasketId] = useState({})

    const counter = (type) =>
        type === 'minus' ? deleteFromBasket() : setCount(count + 1)

    useEffect(() => {
       

    }, [])

    const handleChange = async () => {
        try {
            if (isSelected) {
                await deleteProductFavorite(isSelected.id)           
            } else {
                await createProductFavorite(data.id)
            }
        } catch(e) {

        } finally {
            setChanged(!changed)
        }
       
       
    }

    const handleChangeBasket = () => {
      
    }

    // ADD TO YOUR FAVORITE LIST////////////////////////////////

    const addProduct = async() => {
        try {
            const res = await addToBasket(data.id, basketObj.count + 1)

            console.log('ADD TO BASKET', res)
        } catch(e) {
            console.log(e)
        } finally {
            setChanged(!changed)
        }
    }


   
    const deleteProduct = async () => {
        try {
            const res = await deleteFromBasket(data.id)
            console.log('res delete,', res)
        } catch(e) {
            throw new Error(e)
        }
    }

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
                                isSelected
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
                    {/* {console.log('%%%%%%%%%', basket)} */}
                    {basketObj?.count ? (
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
                            
                            <Text style={cartItem.counterText}>{basketObj?.count} шт</Text>

                            <TouchableOpacity
                                style={cartItem.btn}
                                onPress={() => addProduct(data.id, 1)}
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
