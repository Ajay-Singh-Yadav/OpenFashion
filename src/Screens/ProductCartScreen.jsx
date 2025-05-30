import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBarComp from '../Components/TopBarComp';
import {SafeAreaView} from 'react-native-safe-area-context';
import CartItems from '../Components/CartItems';

const ProductCartScreen = () => {
  return (
    <SafeAreaView>
      <TopBarComp />
      <CartItems />
    </SafeAreaView>
  );
};

export default ProductCartScreen;

const styles = StyleSheet.create({});
