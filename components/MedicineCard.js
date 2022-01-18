import React, { useState, useEffect, useMemo, useDeferredValue } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'
import { myMedicine } from '../styles/components/myMedicine'
import { cartItem } from '../styles/components/cartItem'
import CountDecrement from '../assets/cart/counter_d.svg'
import CountIncrement from '../assets/cart/counter_i.svg'
import CartWhite from './../assets/icons/cartWhiteSmall.svg'

import {
    addToBasket,
    createProductFavorite,
    deleteFromBasket,
    deleteProductFavorite,
    updateBasket
} from "../api";
import DeleteProductModal from "./Modals";

function MedicineCard({ navigation, data, isSelected, setChanged, changed, basketObj }) {
    const [modalVisible, setVisible] = useState(false)

    const handleChange = async () => {
        try {
            if (isSelected) {
                await deleteProductFavorite(isSelected.id)
            } else {
                await createProductFavorite(data.id)
            }
        } catch(e) {
            throw new Error(e)
        } finally {
            setChanged(!changed)
        }
    }

    async function _increment() {
            await updateBasket(basketObj.id, basketObj.count + 1)
            setChanged(!changed)
    }

    async function _decrement() {
            await updateBasket(basketObj.id, basketObj.count - 1)
            setChanged(!changed)
    }

    async function _create() {
            await addToBasket(data.id, 1)
            setChanged(!changed)
    }
    async function _delete() {
            await deleteFromBasket(basketObj.id)
            setChanged(!changed)
    }


    return (
        <>
            <DeleteProductModal visible={modalVisible} setVisible={(e)=>setVisible(e)} handleChange={_delete} />
            <View activeOpacity={0.85} style={myMedicine.medicineCard}>
                <Image style={myMedicine.img} source={{ uri: data.image }} />
                <View>
                    <View style={{ flexDirection: 'row', display: 'flex', justifyContent: 'space-between' }}>
                        <View>
                            <Text style={myMedicine.name}>{data.title}</Text>
                            <Text style={myMedicine.category}>
                                Цена от:{' '}
                                <Text style={myMedicine.price}>{data.price} <Text style={myMedicine.kg_symbol}>c̲ </Text></Text>{' '}
                            </Text>
                        </View>
                        <TouchableOpacity
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
                                navigation.navigate('MedicineInfo', {medId: data.id})
                            }
                        >
                            <Text style={myMedicine.findText}>Подробнее</Text>
                        </TouchableOpacity>

                        {basketObj?.count ? (
                            <View style={cartItem.counter}>
                                <TouchableOpacity
                                    style={cartItem.btn}
                                    onPress={() => (basketObj.count <= 1) ? setVisible(true) : _decrement()}
                                    // disabled={count === 1 ? true : false}
                                    activeOpacity={0.7}
                                >
                                   <CountDecrement />
                                </TouchableOpacity>

                                <Text style={cartItem.counterText}>{basketObj?.count} шт</Text>

                                <TouchableOpacity
                                    style={cartItem.btn}
                                    onPress={_increment}
                                    activeOpacity={0.7}
                                >
                                    <CountIncrement />
                                </TouchableOpacity>
                            </View>
                        ) : (
                            <TouchableOpacity
                                activeOpacity={0.6}
                                style={myMedicine.favorite}
                                onPress={_create}
                            >
                                <Text style={myMedicine.favoriteText}>
                                    В корзину
                                </Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </View>
        </>

    )
}

export default MedicineCard
