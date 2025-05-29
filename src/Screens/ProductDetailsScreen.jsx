import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TopBarComp from '../Components/TopBarComp';
import ProductDetails from '../Components/ProductDetails';

const ProductDetailsScreen = ({route}) => {
  const {name, price, image} = route.params;
  return (
    <View style={{flex: 1}}>
      <TopBarComp />
      <ScrollView contentContainerStyle={{paddingBottom: 40}}>
        <ProductDetails name={name} price={price} image={image} />
      </ScrollView>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
