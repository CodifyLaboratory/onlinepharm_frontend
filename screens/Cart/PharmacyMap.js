import React, { useState, useEffect } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    Dimensions,
    View,
    Text,
    Image,
} from 'react-native'
import MapView, { Marker, CalloutSubview, Callout } from 'react-native-maps'
import PharmMapMarker from '../../components/pharmMapMarker'

function PharmacyMap({ pharmacies, selectedFarm, navigation }) {

    const [pharmaData, setPharmaData] = useState([])

    console.log('PHARM', pharmaData)

    useEffect(() => {
        setPharmaData(
            pharmacies?.filter((item) => {
                if (
                    item.location?.latitude !== null &&
                    item.location?.longitude !== null
                ) {
                    return item
                }
            })
        )
    }, [])

    return (
        <SafeAreaView>
            <MapView
                style={styles.map}
                // loadingEnabled={true}
                initialRegion={{
                    latitude: 42.87337485103548,
                    longitude: 74.58667559756323,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {pharmaData
                    ?.filter((item) => {
                        if (selectedFarm === 0) {
                            return item
                        } else if (item?.pharmacy_profile?.brand) {
                            return (
                                item?.pharmacy_profile?.brand === selectedFarm
                            )
                        }
                    })
                    .map((item) => (
                        <PharmMapMarker
                            item={item}
                            key={item.id}
                            navigation={navigation}
                        />
                    ))}
            </MapView>
        </SafeAreaView>
    )
}
export default PharmacyMap

const styles = StyleSheet.create({
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 40,
    },
    description: {
        width: 200,
        height: 100,
        backgroundColor: '#1F8BA7',
        borderRadius: 10,
        // marginBottom: 20,
        padding: 12,
        zIndex: 12,
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
})
