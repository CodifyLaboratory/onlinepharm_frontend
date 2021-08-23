import React from 'react';
import {View, Text, ScrollView, TouchableOpacity, TextInput} from "react-native";

import {Radio, NativeBaseProvider} from "native-base"

import {ordering} from "../styles/ordering";
import {cart} from "../styles/cart";

function Ordering({navigation}) {

  const [deliveryOptionsValue, setDeliveryOptionsValue] = React.useState("Яндекс Такси")
  const [paymentMethodsValue, setPaymentMethodsValue] = React.useState("Наличными при получении")
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View style={ordering.container}>
        <View style={ordering.box}>
          <Text style={ordering.boxText}>У вас 5 товаров на сумму 3050 с </Text>
          <TouchableOpacity onPress={() => {
            navigation.goBack()
          }}>
            <Text style={ordering.boxBtn}>К списку товаров</Text>
          </TouchableOpacity>
        </View>
        <Text style={ordering.title}>Доставка</Text>
        <Text style={ordering.label}>Город:</Text>
        <TextInput style={ordering.input}/>
        <Text style={ordering.label}>Адрес:</Text>
        <TextInput style={ordering.input}/>
        <View style={ordering.boxes}>
          <View style={{width: '45%'}}>
            <Text style={ordering.label}>Квартира:</Text>
            <TextInput style={ordering.input}/>
            <Text style={ordering.label}>Этаж:</Text>
            <TextInput style={ordering.input}/>
          </View>
          <View style={{width: '45%'}}>
            <Text style={ordering.label}>Подъезд:</Text>
            <TextInput style={ordering.input}/>
            <Text style={ordering.label}>Домофон:</Text>
            <TextInput style={ordering.input}/>
          </View>
        </View>
        <Text style={ordering.title}>Варианты доставки</Text>
        <NativeBaseProvider>
          <Radio.Group
            style={ordering.radioBtns}
            name="deliveryOptions"
            accessibilityLabel="Delivery options"
            value={deliveryOptionsValue}
            onChange={(nextValue) => {
              setDeliveryOptionsValue(nextValue)
            }}>
            <Radio style={ordering.radioBtn} value="Яндекс Такси" my={1}>
              Яндекс Такси
            </Radio>
            <Radio value="Самовывоз" my={1}>
              Самовывоз
            </Radio>
          </Radio.Group>
          <Text style={ordering.title}>Способы оплаты</Text>
          <Radio.Group
            style={ordering.radioBtns}
            name="deliveryOptions"
            accessibilityLabel="Delivery options"
            value={paymentMethodsValue}
            onChange={(nextValue) => {
              setPaymentMethodsValue(nextValue)
            }}>
            <Radio style={[ordering.radioBtn, {width: 166, marginBottom: 24}]} value="Наличными при получении" my={1}>
              Наличными при получении
            </Radio>
            <Radio value="Онлайн оплата" my={1}>
              Онлайн оплата
            </Radio>
          </Radio.Group>
        </NativeBaseProvider>
        <View style={{flexDirection: 'row'}}>
          <View style={{marginRight: 40}}>
            <Text style={[ordering.label, {marginBottom: 0}]}>Срок доставки:</Text>
            <Text style={[ordering.title, {marginTop: 16,}]}>от 1 часа до 6 часов</Text>
          </View>
          <View>
            <Text style={[ordering.label, {marginBottom: 0}]}>Стоимость доставки:</Text>
            <Text style={[ordering.title, {marginTop: 16,}]}>156 с</Text>
          </View>
        </View>
        <Text style={ordering.title}>Контактное лицо</Text>
        <Text style={ordering.label}>ФИО</Text>
        <TextInput style={ordering.input}/>
        <Text style={ordering.label}>Email</Text>
        <TextInput style={ordering.input}/>
        <Text style={ordering.label}>Телефон</Text>
        <TextInput style={ordering.input}/>
        <Text style={ordering.label}>Комментарии к заказу</Text>
        <TextInput style={[ordering.input, {marginBottom: 24}]} multiline/>
        <View style={[ordering.boxes, {marginBottom: 16}]}>
          <Text style={ordering.text}>Стоимость товара</Text>
          <Text style={ordering.text}>3050 с</Text>
        </View>
        <View style={[ordering.boxes, {marginBottom: 16}]}>
          <Text style={ordering.text}>Доставка</Text>
          <Text style={ordering.text}>156 с</Text>
        </View>
        <View style={[ordering.boxes, {marginBottom: 24}]}>
          <Text style={ordering.text}>К оплате</Text>
          <Text style={ordering.text}>3206 с</Text>
        </View>
        <TouchableOpacity
          style={cart.btn}>
          <Text style={cart.btnText}>Оформить заказ</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default Ordering;