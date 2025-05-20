import React from 'react';
import {View} from 'react-native';
import TopBarComp from './components/TopBarComp';
import DetailsComp from './components/DetailsComp';
import {ScrollView} from 'react-native-gesture-handler';

const ProducDetailScreen = ({route}) => {
  const {name, price, image} = route.params;
  return (
    <View style={{flex: 1}}>
      <TopBarComp />

      <ScrollView contentContainerStyle={{paddingBottom: 40}}>
        <DetailsComp name={name} price={price} image={image} />
      </ScrollView>
    </View>
  );
};

export default ProducDetailScreen;
