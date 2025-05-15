import React from 'react';
import {ScrollView, View} from 'react-native';
import {Text} from 'react-native-gesture-handler';
import TopBarComp from './components/TopBarComp';
import ProductItems from './components/ProductItems';
import FollowUsComp from '../homeScreen/components/FollowUsComp';

const ExploreScreen = () => {
  return (
    <View>
      <TopBarComp />

      <ProductItems />
    </View>
  );
};

export default ExploreScreen;
