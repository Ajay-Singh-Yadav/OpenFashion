import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';

const TopBarComp = () => {
  const navigation = useNavigation();

  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.length;
  return (
    <View style={[styles.row, {margin: 20}]}>
      <Image
        source={require('../assets/images/Menu1.png')}
        style={{height: 30, width: 30}}
      />

      <Image
        source={require('../assets/images/Logo1.png')}
        style={{height: 35, width: 87, marginLeft: 30}}
      />

      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../assets/images/Search.png')}
          style={{height: 30, width: 30}}
        />
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <View>
            <Image
              source={require('../assets/images/bag.png')}
              style={{height: 30, width: 30, marginLeft: 10}}
            />
            {totalItems > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{totalItems}</Text>
              </View>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBarComp;

const styles = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 20,
  },
  badge: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: 'red',
    right: -28,
    top: -33,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
