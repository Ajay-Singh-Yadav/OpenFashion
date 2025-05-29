import React from 'react';
import {Text, View} from 'react-native';
import TopBarComp from '../cartScreen/components/TopBarComp';
import AddressComp from './components/AddressComp';

const AddAddressScreen = () => {
  return (
    <View>
      <TopBarComp />
      <AddressComp />
    </View>
  );
};

export default AddAddressScreen;
