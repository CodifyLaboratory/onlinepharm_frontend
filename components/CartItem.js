import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { myMedicine } from "../styles/components/myMedicine";
import { cartItem } from "../styles/components/cartItem";
import Api from "./../API/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

function CartItem({ data }) {
  const [favorite, setFavorite] = useState(false);
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);

  const loadData = async () => {
    try {
      let data = await AsyncStorage.getItem("userData");
      if (data !== null) {
        setUserData(JSON.parse(data));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
    
  }, []);

  const counter = (type) =>
    type === "minus" ? setCount(count - 1) : setCount(count + 1);

  const changeFavorite = () => {
    setFavorite(!favorite);
  };

  const addFavorite = () => {
    Api.postData(`favorite-medications/create/${data.medication.id}/`, null, userData?.access)
      .then((res) => {
        res.status === 201 ? setFavorite(true) : null 
      })
      .catch((e) => console.log(e))
  };

  // const deleteFavorite = () => {
  //   Api.deleteData(`favorite-medications/delete/${data.medication.id}/`, userData?.access)
  //     .then((res) => {
  //       // res.status === 201 ? setFavorite(false) : null 
  //       console.log(res);
  //     })
  //     .catch((e) => console.log(e))
  // };


  return (
    <View style={cartItem.card}>
      <View style={cartItem.left}>
        <View style={cartItem.img}>
          <Image
            style={{ width: 50, height: 36 }}
            source={{uri: data.medication.image}}
          />
        </View>
      </View>
      <View style={cartItem.right}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={cartItem.title}>{data.medication.title}</Text>
            <Text style={cartItem.priceText}>
              Цена от: <Text style={cartItem.price}>{data.medication.price}c</Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              favorite ? deleteFavorite() : addFavorite();
            }}
          >
            <Image
              style={cartItem.heart}
              source={
                favorite
                  ? require("./../assets/icons/fullHeart.png")
                  : require("./../assets/icons/emptyHeart.png")
              }
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 20, flexDirection: "row" }}>
          <TouchableOpacity style={cartItem.button}>
            <Text style={cartItem.buttonText}>Подробнее</Text>
          </TouchableOpacity>

          <TouchableOpacity style={cartItem.counter}>
            <TouchableOpacity
              style={cartItem.btn}
              onPress={() => counter("minus")}
              disabled={count === 1 ? true : false}
              activeOpacity={0.7}
            >
              <Image
                style={cartItem.counterImg}
                source={require("./../assets/icons/minus.png")}
              />
            </TouchableOpacity>

            <Text style={cartItem.counterText}>{count} шт</Text>

            <TouchableOpacity
              style={cartItem.btn}
              onPress={() => counter("plus")}
              activeOpacity={0.7}
            >
              <Image
                style={cartItem.counterImg}
                source={require("./../assets/icons/plus.png")}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default CartItem;
