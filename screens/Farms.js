import React, {useEffect, useMemo, useState, useRef} from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Map from './Map';
import {farms} from "../styles/farms";
import Api from '../API';
import FarmsCard from "../components/FarmsCard";


const Farms = ({navigation}) => {
  const [type, setType] = useState(true)
  const [pharmacies, setPharmacies] = useState([])
  const [brands, setBrands] = useState([])
  const [selectedFarm, setSelectedFarm] = useState(1);

  useEffect(() => {
    Api.getData('pharms/')
      .then(res => setPharmacies(res.data))
    Api.getData('pharm-brands/')
      .then(res => setBrands(res.data))
  }, [])

  const pickerRef = useRef();
  function open() {
    pickerRef.current.focus();
  }
  function close() {
    pickerRef.current.blur();
  }

  const farmsList = useMemo(
    () =>
    pharmacies
      .filter((item) => {
        if(selectedFarm === 0) {
          return item
        }
        else return item?.pharmacy_profile?.brand === selectedFarm;
      })
      .map((item) => (
      <FarmsCard
        key={item.id}
        navigation={navigation}
        data={item}
      />
      )
    )
    ,[pharmacies, selectedFarm]
)

  return (
    <ScrollView style={{backgroundColor: '#E6EFF9'}}>
      <View style={farms.container}>
        <View style={farms.type}>
          <TouchableOpacity
            style={type ? farms.typeElemActive : farms.typeElem}
            onPress={() => setType(!type)}
          >
            <Text style={type ? farms.typeTextActive : farms.typeText}>Список</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={!type ? farms.typeElemActive : farms.typeElem}
            onPress={() => setType(!type)}
          >
            <Text  style={!type ? farms.typeTextActive : farms.typeText}>На карте</Text>
          </TouchableOpacity>
        </View>

        <Picker
          style={{width: '94%',height: 40, backgroundColor: '#fff', borderRadius: 5, marginBottom: 24}}
          ref={pickerRef}
          selectedValue={selectedFarm}
          onValueChange={(itemValue, itemIndex) =>
            setSelectedFarm(itemValue)
          }>
          <Picker.Item label="Все аптеки" value={0}/>
          {brands.map((item) => <Picker.Item label={item.title} value={item.id} key={item.id}/> )}
        </Picker>

        {
          type
            ?
            farmsList
            : <Map />

        }

      </View>
    </ScrollView>
  );
};

export default Farms;

