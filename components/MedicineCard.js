import React, { useState } from 'react'
import { View, TouchableOpacity, Image, Text } from 'react-native'

import { myMedicine } from '../styles/components/myMedicine'
import { cartItem } from '../styles/components/cartItem'

import CountDecrement from '../assets/cart/counter_d.svg'
import CountIncrement from '../assets/cart/counter_i.svg'
import Basket from '../assets/cart/basket.svg'

import {
    addToBasket,
    createProductFavorite,
    deleteFromBasket,
    deleteProductFavorite,
    updateBasket,
} from '../api'
import DeleteProductModal from './Modals'
import { useDispatch, useSelector } from 'react-redux'
import { setAuthorization } from '../store/actions'
import { strings } from '../localization'
import BasketCounter from './BasketCounter'

function MedicineCard({
    navigation,
    data,
    isSelected,
    setChanged,
    changed,
    basketObj,
    type,
}) {
    const dispatch = useDispatch()
    const [modalVisible, setVisible] = useState(false)

    const { is_guest } = useSelector((state) => state.data)

    const handleChange = async () => {
        if (is_guest) dispatch(setAuthorization(false))

        try {
            if (isSelected) {
                await deleteProductFavorite(isSelected?.id)
            } else {
                await createProductFavorite(data.id)
            }
        } catch (e) {
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
        if (is_guest) dispatch(setAuthorization(false))
        await addToBasket(data.id, 1)
        setChanged(!changed)
    }
    async function _delete() {
        await deleteFromBasket(basketObj.id)
        setChanged(!changed)
    }

    return (
        <>
            <DeleteProductModal
                visible={modalVisible}
                setVisible={(e) => setVisible(e)}
                handleChange={_delete}
            />
            <View activeOpacity={0.85} style={myMedicine.medicineCard}>
                <Image style={myMedicine.img} source={{ uri: data.image }} />
                {type === 'cart' ? (
                    <TouchableOpacity
                        onPress={() => setVisible(true)}
                        style={myMedicine.basketIcon}
                    >
                        <Basket />
                    </TouchableOpacity>
                ) : null}
                <View>
                    <View
                        style={{
                            flexDirection: 'row',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <View>
                            <Text style={myMedicine.name}>{data?.title}</Text>
                            <Text style={myMedicine.category}>
                                {strings.cart.price}:{' '}
                                {data?.available ? (
                                    <Text style={myMedicine.price}>
                                        {data.price}{' '}
                                        <Text style={myMedicine.kg_symbol}>
                                            c
                                        </Text>
                                    </Text>
                                ) : (
                                    <Text>{' - '}</Text>
                                )}
                            </Text>
                        </View>
                        <View style={{ position: 'absolute', right: 0 }}>
                            <TouchableOpacity onPress={handleChange}>
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
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            style={myMedicine.find}
                            onPress={() =>
                                navigation.navigate('MedicineInfo', {
                                    medId: data?.id,
                                })
                            }
                        >
                            <Text style={myMedicine.findText}>
                                {strings.main.more}
                            </Text>
                        </TouchableOpacity>

                        <BasketCounter
                            _create={_create}
                            _decrement={_decrement}
                            _increment={_increment}
                            basketObj={basketObj}
                            data={data}
                            setVisible={setVisible}
                        />
                    </View>
                </View>
            </View>
        </>
    )
}

export default MedicineCard
