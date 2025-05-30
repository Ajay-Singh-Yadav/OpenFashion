import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/Slice/CartItemsSlice';

const ProductDetails = ({product}) => {
  const dispatch = useDispatch();

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  return (
    <View style={{}}>
      <View
        style={{
          width: 450,
          height: 480,
          borderRadius: 20,
          marginTop: 10,
          marginLeft: 20,
          elevation: 5,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 4,
          overflow: 'hidden', // to clip image corners
        }}>
        <Image
          source={product.image}
          style={{width: '100%', height: '100%'}}
          resizeMode="cover"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 20,
          paddingHorizontal: 20,
        }}>
        <Text style={styles.title}>{product.brand}</Text>
        <Image
          source={require('../assets/images/Export.png')}
          style={{height: 25, width: 25, marginRight: 10}}
        />
      </View>

      <Text style={[styles.text, {opacity: 0.6}]}>{product.name}</Text>

      <Text
        style={{
          fontSize: 19,
          fontFamily: 'TenorSans-Regular',
          marginTop: 10,
          color: 'red',
          paddingHorizontal: 30,
        }}>
        {product.price}
      </Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'TenorSans-Regular',
    paddingHorizontal: 15,
  },
  text: {
    fontSize: 16,
    fontFamily: 'TenorSans-Regular',
    marginTop: 10,
    paddingHorizontal: 30,
  },
});
