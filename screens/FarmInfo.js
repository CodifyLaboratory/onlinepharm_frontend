import React, {useEffect, useState, useMemo} from 'react'
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native'
import Api from './../API/index'
import Stars from 'react-native-stars'
import ReviewCard from './../components/ReviewCard'
import {farmInfo} from '../styles/farmInfo'
import Marker from './../assets/icons/marker.svg'
import Clock from './../assets/icons/clock.svg'
import Phone from './../assets/icons/phone.svg'
import {getFarmInformation} from '../api'
import Loader from '../components/Loader'
import {useDispatch, useSelector} from "react-redux";
import {setAuthorization} from "../store/actions";
import {Colors} from "../constants/colors";
import {strings} from "../localization";

function FarmInfo({navigation, route}) {
    const dispatch = useDispatch()

    const { is_guest } = useSelector(state => state.data)


    const [farmData, setFarmData] = useState(null)

    console.log("FARM DATA", farmData)

    const id = route.params

    useEffect(() => {
        // Api.getData(`pharms/${id}`)
        //   .then(res => setFarmData(res.data))
        //   .catch(e => console.log(e))
        loadFarmInfo()
    }, [])

    const loadFarmInfo = async () => {
        try {
            const res = await getFarmInformation(id)
            setFarmData(res)
        } catch (e) {
            console.log(e)
        }
    }

    const reviewList = useMemo(
        () =>
            farmData?.feedbacks?.map((item) => (
                <ReviewCard data={item} key={item.id}/>
            )),
        [farmData]
    )

    if (!farmData) return <Loader/>

    return (
        <ScrollView>
            <View style={farmInfo.container}>
                <View style={{flexDirection: 'row', alignItems: 'center', height: 40, width: 200, marginTop: 20, marginBottom: 24}}>
                    <Image
                        style={farmInfo.logo}
                        source={{uri: farmData?.pharmacy_profile?.logo}}
                    />

                    <Text style={farmInfo.title}>
                        {farmData?.pharmacy_profile?.title}
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 28,
                    }}
                >
                    <Marker/>
                    <Text
                        style={farmInfo.time}
                        onPress={() => navigation.navigate('Map')}
                    >
                        {farmData?.location?.address}
                        {/*  add adress from back */}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 28,
                    }}
                >
                    <Clock/>
                    <Text style={farmInfo.time}>
                        {farmData?.pharmacy_profile?.schedule}
                    </Text>
                </View>
                <View style={{flexDirection: 'row', marginBottom: 25}}>
                    <Phone/>
                    <View>
                        <Text style={farmInfo.time}>{farmData?.pharmacy_profile?.phone || ''}</Text>
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
                    <Text
                        style={[farmInfo.starCount, {color: !farmData?.feedbacks_count ? Colors.gray_light : Colors.black}]}>
                        {strings.main.review_count}: {farmData?.feedbacks_count}
                    </Text>
                </View>

                {!!farmData?.feedbacks_count
                    ? <Text style={farmInfo.withFeedback}>{strings.main.reviews}</Text>
                    : <Text style={farmInfo.withoutFeedback}>{strings.main.without_feedbacks_pharmacy}</Text>
                }
                <View style={farmInfo.reviewsBox}>

                    <TouchableOpacity
                        style={farmInfo.reviewBtn}
                        activeOpacity={0.7}
                        onPress={() => {
                            !is_guest
                                ? navigation.navigate('LeaveReview', farmData)
                                : dispatch(setAuthorization(false))
                        }
                    }
                    >
                        <Text style={farmInfo.reviewBtnText}>
                            {strings.main.leave_feedback}
                        </Text>
                    </TouchableOpacity>

                    {reviewList}
                </View>
            </View>
        </ScrollView>
    )
}

export default FarmInfo


