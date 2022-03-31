import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import { Marker, MapView, Callout } from 'react-native-maps'
import MarkerSvg from './../assets/marker2.svg'
import PhoneSvg from './../assets/phoneIcon.svg'
import ClockIcon from './../assets/clockIcon.svg'

const PharmMapMarker = ({ item, navigation }) => {
    const [descStatus, setDescStatus] = useState(false)

    const changeStatus = () => setDescStatus(true)

    const {basket_medications, store_medications} = item

    const countStockPositions = () => {
        return basket_medications.filter(item => store_medications.some(s => item.medication.id === s.medication.id))
    }


    return (
        <Marker
            coordinate={{
                latitude: item?.location?.latitude,
                longitude: item?.location?.longitude,
            }}
            onPress={changeStatus}
            style={styles.marker}
            key={item.id}
            // icon={require('./../assets/marker.png')}
        >
            {descStatus ? (
                <Callout onPress={()=>navigation.push('Ordering', {basket: countStockPositions(), id: item?.id})} tooltip={true}>
                <TouchableOpacity
                style={styles.description}>
                    <View style={styles.box}>
                        <MarkerSvg /> 
                        <Text style={styles.text}>
                            {item?.location?.address}
                        </Text>
                    </View>
                    <View style={styles.box}>
                        <PhoneSvg />
                        <Text style={styles.text}>+996 755 65 43 57</Text>
                    </View>

                    <View style={styles.box}>
                        <ClockIcon />
                        <Text style={styles.text}>Сегодня 08:00 - 18:00</Text>
                    </View>
                </TouchableOpacity>
                </Callout>
              
            ) : (
                <Image
                    source={require('./../assets/marker.png')}
                    style={{ height: 35, width: 35, position: 'absolute', bottom: 0 }}
                />
            )}
        </Marker>
    )
}

export default PharmMapMarker

const styles = StyleSheet.create({
    marker: {
        height: 130,
        zIndex: 1,
        // position: 'relative'
    },
    description: {
        // width: 200,
        // height: 100,
        backgroundColor: '#1F8BA7',
        borderRadius: 10,
        padding: 6,
        zIndex: 33
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 9,
    },
    text: {
        color: '#ffffff',
        fontSize: 12,
        marginLeft: 10,
    },
    btn: {
        marginLeft: 8,
        alignItems: 'center',
        justifyContent: 'center',
        width: 90,
        height: 20,
        position: 'relative',
        zIndex: 99,
    },
    textBtn: {
        color: '#ffffff',
        fontSize: 11,
        marginTop: -5,
    },
})