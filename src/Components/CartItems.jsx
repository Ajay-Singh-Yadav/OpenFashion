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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircleButton from './CircleButton';

const CartItems = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <View style={{alignItems: 'center'}}>
      <Text style={styles.titleText}>CHECKOUT</Text>
      <Image
        source={require('../assets/images/designNewArrival.png')}
        style={{width: 150, height: 15, marginBottom: 30}}
      />

      <View style={styles.scrollContainer}>
        <ScrollView>
          <View style={styles.cartItemContainer}>
            <Image
              source={require('../assets/images/Frame2.png')}
              style={{height: 210, width: 165, borderRadius: 10}}
            />
            <View style={styles.cartItemDetails}>
              <Text style={{marginBottom: 5, fontSize: 18}}>
                Ajay Singh Yadav
              </Text>
              <Text style={{marginBottom: 30}}>
                Ajay Singh Yadav Ajay Singh Yadav
              </Text>
              <View style={styles.circleButtonContainer}>
                <CircleButton
                  type="minus"
                  onPress={() => setQuantity(q => Math.max(1, q - 1))}
                />
                <Text style={styles.quantity}>{quantity}</Text>
                <CircleButton
                  type="plus"
                  onPress={() => setQuantity(q => q + 1)}
                />
              </View>
              <Text style={{color: 'red'}}>$ 120</Text>
            </View>
          </View>

          <View
            style={{
              marginTop: 15,
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
        </ScrollView>
      </View>

      <View style={{width: '100%', marginTop: 200}}>
        <View
          style={{
            padding: 15,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
    height: 500,
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
