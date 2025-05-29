import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/Header.png')}
        style={styles.container}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '%100',
    height: 80,
    marginBottom: -6,
  },
  icon: {},
  logoContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  serach: {
    marginRight: 10,
  },
  shopping: {
    marginLeft: 8,
  },
});
