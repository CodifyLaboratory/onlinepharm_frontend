import React from 'react'
import {Text, TouchableOpacity, View} from "react-native";
import {ordering} from "../styles/ordering";
import VisaIcon from "../assets/icons/visa.svg";
import {paymentMethods} from "../styles/paymentMethods";
import CloseIcon from '../assets/icons/close.svg'

const PaymentCard = ({type, number}) => {
    return (
        <View style={paymentMethods.cardContainer}>
            <View style={paymentMethods.paymentIcon}>
                <VisaIcon/>
            </View>
            <View>
                <Text style={paymentMethods.cardName}>{type}</Text>
                <Text style={paymentMethods.cardNumber}>{number}</Text>
            </View>
            <TouchableOpacity style={paymentMethods.close}>
             <CloseIcon />
            </TouchableOpacity>

        </View>
    )
}

export default PaymentCard
