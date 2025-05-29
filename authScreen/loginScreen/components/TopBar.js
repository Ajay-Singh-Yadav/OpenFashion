import React from 'react';
import {View, Image} from 'react-native';

const TopBar = () => {
  return (
    <View style={{alignItems: 'center', margin: 10}}>
      <Image
        source={require('../../../assests/images/Logo.png')}
        style={{height: 35, width: 87}}
      />
    </View>
  );
};

export default TopBar;
