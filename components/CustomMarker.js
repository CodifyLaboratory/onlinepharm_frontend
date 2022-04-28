import React from 'react'
import {
    StyleSheet,
    Dimensions,
    View,
    Text,
    TouchableOpacity
} from 'react-native'
import { Marker, Callout } from 'react-native-maps'
import MarkerSvg from './../assets/marker2.svg'
import PhoneSvg from './../assets/phoneIcon.svg'
import ClockIcon from './../assets/clockIcon.svg'

const CustomMarker = ({ item, navigation }) => {

    if(!item?.location?.longitude || !item?.location?.latitude) return null
    return (
        <Marker
            coordinate={{
                latitude: item?.location?.latitude,
                longitude: item?.location?.longitude,
            }}
            key={item.id}
            anchor={{x: 1, y: 1}}
            pointerEvents='auto'
        >

                <Callout onPress={() => {
                    navigation.navigate('FarmInfo', {pharmacy_id: item?.id})}}
                         tooltip={true} style={{flex: 1, position: 'absolute'}}>
                    <View style={styles.description}>
                            <View style={styles.box}>
                                <MarkerSvg />
                                <Text style={styles.text}>
                                    {item?.location?.address}
                                </Text>
                            </View>
                            <View style={styles.box}>
                                <PhoneSvg />
                                <Text style={styles.text}>{' - '}</Text>
                            </View>

                            <View style={styles.box}>
                                <ClockIcon />
                                <Text style={styles.text}>{' - '}</Text>
                            </View>

                            <TouchableOpacity
                                style={styles.btn}
                            >
                                <Text style={styles.textBtn}>Подробнее</Text>
                            </TouchableOpacity>
                        </View>
                </Callout>
        </Marker>
    )
}

export default CustomMarker

const styles = StyleSheet.create({
    marker: {
        height: 50,
        width: 50,
    },
    description: {
        width: Dimensions.get('screen').width - 100,
        backgroundColor: '#1F8BA7',
        borderRadius: 10,
        padding: 10
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
        height: 24,
        position: 'relative',
        zIndex: 99,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 4
    },
    textBtn: {
        color: '#000',
        fontSize: 11,
        marginTop: -5,
        textAlign: 'center',
        height: 13
    },
})
