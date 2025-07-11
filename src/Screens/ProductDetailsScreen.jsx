import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import TopBarComp from '../Components/TopBarComp';
import ProductDetails from '../Components/ProductDetails';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductDetailsContent from '../Components/ProductDetailsContent';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addToCart} from '../redux/Slice/CartItemsSlice';

const ProductDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {product} = route.params;

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      image: product.image, // must be a string URL
    };

    dispatch(addToCart(cartItem));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopBarComp />
      <ScrollView contentContainerStyle={{}}>
        <ProductDetails product={product} />
        <ProductDetailsContent />
      </ScrollView>
      <TouchableOpacity onPress={handleAddToCart}>
        <View
          style={{
            width: '100%',
            height: 70,
            backgroundColor: 'black',
            flexDirection: 'row',

            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Ionicons name="add" color="white" size={30} />
          <Text
            style={{
              fontSize: 16,
              marginLeft: 80,
              fontFamily: 'TenorSans-Regular',
              color: 'white',
              marginRight: 100,
            }}>
            ADD TO BASKET
          </Text>
          <AntDesign name="hearto" color="white" size={25} />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({});
