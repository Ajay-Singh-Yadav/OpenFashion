import React from 'react';
import TopBarComp from './components/TopBarComp';
import {ScrollView, View} from 'react-native';
import BannerComp from './components/BannerComp';
import NewArrivalComp from './components/NewArrivalComp';
import ExploreComp from './components/ExploreComp';
import CollectionComp from './components/CollectionsComp';
import JustForYouComp from './components/JustForYouComp';
import TrendingComp from './components/TrendingComp';
import OpenFashion from './components/OpenFashion';
import FollowUsComp from './components/FollowUsComp';

const HomeScreen = () => {
  return (
    <ScrollView>
      <View>
        <TopBarComp />
        <BannerComp />
        <NewArrivalComp />
        <ExploreComp />
        <CollectionComp />
        <JustForYouComp />
        <TrendingComp />
        <OpenFashion />
        <FollowUsComp />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
