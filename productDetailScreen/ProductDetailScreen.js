import React from 'react';
import {View} from 'react-native';
import TopBarComp from './components/TopBarComp';
import DetailsComp from './components/DetailsComp';

const ProducDetailScreen = ({route}) => {
  const {name, price, image} = route.params;
  return (
    <View>
      <TopBarComp />
      <DetailsComp name={name} price={price} image={image} />
    </View>
  );
};

export default ProducDetailScreen;
