import React from 'react';
import {Text, View} from 'react-native';
import TopBar from './components/TopBar';
import DetailsComp from './components/DetailsComp';

const LoginScreen = () => {
  return (
    <View>
      <TopBar />
      <DetailsComp />
    </View>
  );
};

export default LoginScreen;
