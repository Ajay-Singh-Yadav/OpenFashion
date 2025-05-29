import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TopBarComp from './components/TopBarComp';
import CheckoutComp from './components/CheckoutComp';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TopBarComp />
      <CheckoutComp />
    </View>
  );
};

export default DeliveryScreen;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
