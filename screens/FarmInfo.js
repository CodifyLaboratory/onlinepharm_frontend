import React, {useEffect, useState, useMemo} from 'react';
import { Text, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Api from './../API/index'
import Stars from 'react-native-stars';
import ReviewCard from './../components/ReviewCard'
import {farmInfo} from "../styles/farmInfo";
import Marker from './../assets/icons/marker.svg'
import Clock from './../assets/icons/clock.svg'
import Phone from './../assets/icons/phone.svg'
import { getFarmInformation } from '../api';
import Loader from '../components/Loader';


function FarmInfo({navigation, route}) {

  const [farmData, setFarmData] = useState(null)

  const id = route.params

  useEffect(() => {
    // Api.getData(`pharms/${id}`)
    //   .then(res => setFarmData(res.data))
    //   .catch(e => console.log(e))
      loadFarmInfo()
  }, []);

  


  const loadFarmInfo = async() => {
    try {
        const res = await getFarmInformation(id)
        console.log('RES++++++', res)
        setFarmData(res)
    } catch(e) {
      console.log(e)
    } 
  }

  const reviewList = useMemo(() => (
    farmData?.feedbacks?.map((item) => (
      <ReviewCard data={item} key={item.id} />
    ))
  ), [farmData])


  if(!farmData) return <Loader />

  return (
    <ScrollView>

      <View style={farmInfo.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            height={61} width={100}
            style={farmInfo.logo}
            source={{uri: farmData?.pharmacy_profile?.logo}}
          />
          <Text style={farmInfo.title}>{farmData?.pharmacy_profile?.brand?.title}</Text>
        </View>

        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 28}}>
          <Marker />
          <Text style={farmInfo.time} onPress={() => navigation.navigate('Map')}>
            {farmData?.location?.address}
          {/*  add adress from back */}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 28}}>
          <Clock />
          <Text style={farmInfo.time}>{farmData?.pharmacy_profile?.schedule}</Text>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 25}}>
          <Phone />
          <View>
            <Text style={farmInfo.time}>+996 555 323 145</Text>
          {/*  add numbers from back */}
          </View>
        </View>

        <View style={farmInfo.starBox}>
          <Stars
            display={farmData.middle_star}
            spacing={8}
            count={5}
            disabled={true}
            starSize={20}
            fullStar={require('./../assets/icons/fullStar.png')}
            emptyStar={require('./../assets/icons/emptyStar.png')}
          />
          <Text style={farmInfo.starCount}>{farmData?.feedbacks_count} отзыва</Text>
        </View>

        <View style={farmInfo.reviewsBox}>
          <Text style={farmInfo.reviewsTitle}>Отзывы</Text>
          <TouchableOpacity
            style={farmInfo.reviewBtn}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('LeaveReview', farmData)}
          >
            <Text style={farmInfo.reviewBtnText}>Оставить отзыв</Text>
          </TouchableOpacity>

          {reviewList}
        </View>
      </View>

    </ScrollView>
  );
}

export default FarmInfo;

const styles = StyleSheet.create({

})
