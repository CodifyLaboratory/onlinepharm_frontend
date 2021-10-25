import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Stars from 'react-native-stars';
import {farmInfo} from "../styles/farmInfo";


var replacedStr = /-/gi;


const ReviewCard = ({data}) => {
  return (
    <View style={farmInfo.reviewsElem}>
      <View>
        <Image
          style={farmInfo.reviewsElemImg}
          source={
            data?.user?.user_profile?.photo === null ?
            require('./../assets/icons/profileDefault.png')
              :
              {uri: data?.user?.user_profile?.photo}
          }
        />
      </View>
      <View>
        <Text style={farmInfo.reviewsElemName}>
          {data.user.user_profile.first_name + ' ' + data.user.user_profile.last_name} ({data.pub_date.replace(replacedStr, '.')})
        </Text>
        <Text style={farmInfo.reviewsElemText}>
          {data.text}
        </Text>
        <View style={{alignItems: 'flex-start', marginLeft: -6}}>
          <Stars
            display={data.star}
            spacing={8}
            count={5}
            starSize={20}
            fullStar= {require('./../assets/icons/fullStar.png')}
            emptyStar= {require('./../assets/icons/emptyStar.png')}
          />
        </View>

      </View>
    </View>
  );
};

export default ReviewCard;
