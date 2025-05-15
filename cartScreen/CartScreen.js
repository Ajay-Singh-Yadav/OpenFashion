import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

import TopBarComp from './components/TopBarComp';
import CartItems from './components/CartItems';

const CartScreen = () => {
  return (
    <View>
      <TopBarComp />
      <CartItems />
    </View>
  );
};

export default CartScreen;
