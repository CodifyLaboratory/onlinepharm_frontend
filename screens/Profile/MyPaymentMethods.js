import React, {useEffect, useState} from 'react'
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {strings} from "../../localization";

import {paymentMethods} from "../../styles/paymentMethods";
import PaymentCard from "../../components/PaymentCard";
import {cartStyle} from "../../styles/cart";

const MyPaymentMethods = ({navigation}) => {

    return (

        <View style={paymentMethods.container}>
                <ScrollView>
                    <PaymentCard number='43243432' type='Visa'/>
                    <PaymentCard number='43243432' type='Visa'/>
                </ScrollView>
                <View style={paymentMethods.bottomButton}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('AddPaymentCard')
                        }}
                        style={cartStyle.btn}
                        activeOpacity={0.8}
                    >

                        <Text style={cartStyle.btnText}>
                            {strings.cart.add_card}
                        </Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}

export default MyPaymentMethods


