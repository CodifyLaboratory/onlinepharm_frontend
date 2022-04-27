import React, { useState } from 'react'
import { Dimensions, Modal, Text, TouchableOpacity, View } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
import { cartStyle } from '../../styles/cart'
import { strings } from '../../localization'
import { Colors } from '../../constants/colors'
import { StatusBarHeight } from '../../constants/statusbarHeigth'
import axios from 'axios'

function MapModal({ visible, setShow, setValue }) {
    const [address, setAddress] = useState('')
    const [coords, setCoordinates] = useState({
        latitude: 42.87337485103548,
        longitude: 74.58667559756323,
    })

    const getAddress = async ({ latitude, longitude }) => {
        const params = {
            access_key: '39e5231d56d72ce02dece7c90cff1883',
            query: `${latitude},${longitude}`,
            limit: 1,
        }
        try {
            const { data } = await axios.get(
                'http://api.positionstack.com/v1/reverse',
                { params }
            )
            setAddress(data.data[0]?.label)
            setCoordinates({ latitude, longitude })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            style={{
                width: '100%',
                height: Dimensions.get('screen').height,
                alignSelf: 'center',
                paddingLeft: 16,
                paddingRight: 16,
                backgroundColor: Colors.white,
            }}
        >
            <MapView
                showsUserLocation={true}
                onPress={(e) => getAddress(e.nativeEvent.coordinate)}
                style={{
                    width: '100%',
                    alignSelf: 'center',
                    marginTop: StatusBarHeight + 25,
                    height: Dimensions.get('window').height - 128,
                }}
                loadingEnabled={true}
                initialRegion={{
                    latitude: 42.87337485103548,
                    longitude: 74.58667559756323,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    draggable={true}
                    coordinate={coords}
                    image={require('../../assets/marker_map_icon.png')}
                />
            </MapView>
            <View
                style={{
                    backgroundColor: Colors.white,
                    borderRadius: 3,
                    bottom: 130,
                    zIndex: 1,
                    width: '95%',
                    alignSelf: 'center',
                    borderWidth: 0.3,
                }}
            >
                <Text style={{ color: Colors.gray, padding: 5 }}>
                    {address || strings.cart.select_place}
                </Text>
            </View>
            <TouchableOpacity
                onPress={() => {
                    setValue(address)
                    setShow(false)
                }}
                style={{
                    ...cartStyle.btn,
                    marginTop: 20,
                    width: '95%',
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: 100,
                }}
                activeOpacity={0.8}
            >
                <Text style={cartStyle.btnText}>{strings.cart.choose}</Text>
            </TouchableOpacity>
        </Modal>
    )
}

export default MapModal
