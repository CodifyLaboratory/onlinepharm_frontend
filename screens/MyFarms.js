import React from 'react';
import FarmCard from "../components/FarmCard";
import {View, ScrollView, Text} from 'react-native';
import {myFarms} from "../styles/components/myFarms";

function MyFarms({navigation}) {
  return (
    <ScrollView>
      <View style={myFarms.container}>
        {/*<FarmCard navigation={navigation}/>*/}
        {/*<FarmCard navigation={navigation}/>*/}
        {/*<FarmCard navigation={navigation}/>*/}
        {/*<FarmCard navigation={navigation}/>*/}
      </View>
    </ScrollView>

  );
}

export default MyFarms;