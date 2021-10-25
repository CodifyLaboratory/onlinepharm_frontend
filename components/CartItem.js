import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Minus from '../assets/cart/minus.svg';
import Plus from '../assets/cart/plus.svg';
import { myMedicine } from '../styles/components/myMedicine';
import { cartItem } from '../styles/components/cartItem';

function CartItem({ data }) {
  const [favorite, setFavorite] = useState(false)
  const [count, setCount] = useState(1)

  const counter = (type) => type === 'minus' ? setCount(count - 1) : setCount(count + 1)

  const changeFavorite = () => {
    setFavorite(!favorite);
  }
  return (

    <View style={cartItem.card}>
      <View style={cartItem.left}>
        <View style={cartItem.img}>
          <Image style={{ width: 50, height: 36 }} source={require('../assets/cart/logo.png')}/>
        </View>
      </View>
      <View style={cartItem.right}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={cartItem.title}>{data.name}</Text>
            <Text style={cartItem.priceText}>Цена от: <Text style={cartItem.price}>200c</Text></Text>
          </View>
          <TouchableOpacity onPress={changeFavorite}>
            <Image
              style={cartItem.heart}
              source={
                favorite ?
                  require('./../assets/icons/fullHeart.png')
                  :
                  require('./../assets/icons/emptyHeart.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row'}}>
          <TouchableOpacity style={cartItem.button}>
            <Text style={cartItem.buttonText}>Подробнее</Text>
          </TouchableOpacity>

          <TouchableOpacity style={cartItem.counter}>
            <TouchableOpacity
              style={cartItem.btn}
              onPress={() => counter('minus')}
              disabled={count === 1 ? true : false}
              activeOpacity={0.7}
            >
              <Image style={cartItem.counterImg} source={require('./../assets/icons/minus.png')} />
            </TouchableOpacity>

            <Text style={cartItem.counterText}>
              {count} шт
            </Text>

            <TouchableOpacity
              style={cartItem.btn}
              onPress={() => counter('plus')}
              activeOpacity={0.7}
            >
              <Image style={cartItem.counterImg} source={require('./../assets/icons/plus.png')} />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

export default CartItem;