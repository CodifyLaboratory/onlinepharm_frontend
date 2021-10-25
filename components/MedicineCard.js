import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { myMedicine } from "../styles/components/myMedicine";
import { cartItem } from "../styles/components/cartItem";
import CartWhite from "./../assets/icons/cartWhiteSmall.svg";
import Api from "./../API/index";
import AsyncStorage from "@react-native-async-storage/async-storage";

function MedicineCard({ navigation, data }) {
  
  const [favorite, setFavorite] = useState(false);
  const [inBasketStatus, setInBasketStatus] = useState(false);
  const [count, setCount] = useState(1);
  const [userData, setUserData] = useState(null);
  const [basketRes, setBasketRes] = useState({})
  const [allFav, setAllFav] = useState([])
  const [fav, setFav] = useState(null)

  const changeFavorite = () => {
    setFavorite(!favorite);
  };

  const counter = (type) =>
    type === "minus" ? setCount(count - 1) : setCount(count + 1);

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
    loadData()

    Api.getData('basket-medications/', userData?.access)
      .then(res => setAllFav(res.data))
      .catch(e => console.log(e))
  }, []);
  console.log(allFav);

  useEffect(() => {
    const result = allFav.find((el) => {
      if(el.id === basketRes.id) {
        return el;
      }
    })
    setInBasketStatus(!!result)
    setFav(result)
  }, [allFav])


  const addFavorite = () => {
    Api.postData(
      `favorite-medications/create/${data.id}/`,
      null,
      userData?.access
    )
      .then((res) => {
        // res.status === 201 ? setFavorite(true) : null
        console.log(res);
      })
      .catch((e) => console.log(e));
  };

  const addToBasket = () => {
    Api.postData(
      `basket-medications/create/${data.id}/`,
      1,
      userData?.access
    )
      .then((res) => {
        res.status === 201 ? setInBasketStatus(true) : setInBasketStatus(false)
        setBasketRes(res.data)
      })
      .catch((e) => console.log(e));
  };


  console.log(basketRes);

  return (
    <View activeOpacity={0.85} style={myMedicine.medicineCard}>
      <Image style={myMedicine.img} source={{ uri: data.image }} />
      <View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={myMedicine.name}>{data.title}</Text>
            <Text style={myMedicine.category}>
              Цена от: <Text style={myMedicine.price}>{data.price} с</Text>{" "}
            </Text>
          </View>
          <TouchableOpacity 
          onPress={() => {
            addFavorite()
          }}
          >
            <Image
              style={myMedicine.heart}
              source={
                favorite
                  ? require("./../assets/icons/fullHeart.png")
                  : require("./../assets/icons/emptyHeart.png")
              }
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity 
          activeOpacity={0.6} 
          style={myMedicine.find}
          onPress={() => navigation.push('MedicineInfo')}
          >
            <Text style={myMedicine.findText}>Подробнее</Text>
          </TouchableOpacity>

          {inBasketStatus ? (
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
          ) : (
            <TouchableOpacity
              activeOpacity={0.6}
              style={myMedicine.favorite}
              onPress={addToBasket}
            >
              <Text style={myMedicine.favoriteText}>В корзину</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

export default MedicineCard;
