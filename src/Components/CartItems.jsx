import React, {useState} from 'react';
import {
  View,
  FlatList,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import CircleButton from './CircleButton';
import {
  increaseQuantity,
  decreaseQuantity,
} from '../redux/Slice/CartItemsSlice';
import {useDispatch, useSelector} from 'react-redux';

const CartItems = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const renderItem = ({item}) => (
    <View style={styles.cartItemContainer}>
      <Image
        source={item.image}
        style={{height: 210, width: 165, borderRadius: 10}}
      />
      <View style={styles.cartItemDetails}>
        <Text style={{marginBottom: 5, fontSize: 18}}>{item.brand}</Text>
        <Text style={{marginBottom: 30}}>{item.name}</Text>

        <View style={styles.circleButtonContainer}>
          <CircleButton
            type="minus"
            onPress={() => dispatch(decreaseQuantity(item))}
          />
          <Text style={styles.quantity}>{item.quantity}</Text>
          <CircleButton
            type="plus"
            onPress={() => dispatch(increaseQuantity(item))}
          />
        </View>

        <Text style={{color: 'red'}}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.titleText}>CHECKOUT</Text>
      <Image
        source={require('../assets/images/designNewArrival.png')}
        style={{width: 150, height: 15, marginBottom: 10}}
      />

      <View style={styles.scrollContainer}>
        {cartItems.length === 0 ? (
          <Text style={styles.emptyText}>Your cart is empty</Text>
        ) : (
          <View>
            <FlatList
              data={cartItems}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
            />
          </View>
        )}

        <View
          style={{
            marginTop: 3,
            borderWidth: 0.6,
            width: 500,
            borderColor: '#BABABA',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 30,
            marginTop: 10,
          }}>
          <Image
            source={require('../assets/images/Voucher.png')}
            style={{width: 34, height: 33}}
          />
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              opacity: 0.7,
            }}>
            Add promo code
          </Text>
        </View>

        <View
          style={{
            marginTop: 15,
            borderWidth: 0.6,
            width: 500,
            borderColor: '#BABABA',
          }}
        />

        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 30,
              marginTop: 15,
            }}>
            <Image
              source={require('../assets/images/delivery.png')}
              style={{width: 28, height: 35}}
            />
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'TenorSans-Regular',
                opacity: 0.7,
                marginLeft: 20,
                marginRight: 150,
              }}>
              Delivery
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 20,
                fontFamily: 'TenorSans-Regular',
                opacity: 0.3,
                marginLeft: 90,
              }}>
              Free
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 15,
            borderWidth: 0.6,
            width: 500,
            borderColor: '#BABABA',
          }}
        />
      </View>

      <View style={{width: '100%', marginTop: 220}}>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              letterSpacing: 1,
            }}>
            EST. TOTAl
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              letterSpacing: 1,
              color: 'red',
            }}>
            $120
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#000',
            height: 70,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              letterSpacing: 1,
              color: 'white',
            }}>
            CHECKOUT
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContainer: {
    height: 600,
    width: '100%',
    paddingHorizontal: 16,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 16,
    opacity: 0.6,
  },
  cartItem: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 0.7,
    borderBottomColor: '#BABABA',
    paddingBottom: 20,
  },
  image: {
    width: 120,
    height: 150,
    marginRight: 12,
  },
  details: {
    justifyContent: 'center',
    flexShrink: 1,
    marginLeft: 5,
    marginBottom: 40,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'TenorSans-Regular',
  },
  name2: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 10,
    opacity: 0.5,
    fontFamily: 'TenorSans-Regular',
  },
  price: {
    fontSize: 18,
    color: 'red',
    marginTop: 10,
    fontFamily: 'TenorSans-Regular',
  },
  titleText: {
    fontSize: 25,
    letterSpacing: 1,
    fontFamily: 'TenorSans-Regular',
    marginTop: 20,
  },
  cartItemContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginBottom: 15,
  },
  cartItemDetails: {
    marginLeft: 20,
  },
  quantity: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  circleButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
});
