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
import {addToCart} from '../../store/slice/cartSlice';

const DetailsComp = ({name, price, image}) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({name, image, price}));
  };
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <View
          style={{
            width: '100%',
            height: 510,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={image} style={{width: 345, height: 480}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 20,
            paddingHorizontal: 6,
          }}>
          <Text style={styles.title}>{name}</Text>
          <Image
            source={require('../../assests/images/Export.png')}
            style={{height: 25, width: 25}}
          />
        </View>

        <Text style={[styles.text, {opacity: 0.6}]}>
          Recycle Boucle Knit Cardigan Pink
        </Text>

        <Text
          style={{
            fontSize: 19,
            fontFamily: 'TenorSans-Regular',
            marginTop: 10,
            color: 'red',
            paddingHorizontal: 15,
          }}>
          ${price}
        </Text>

        <TouchableOpacity onPress={handleAddToCart}>
          <View
            style={{
              width: '100%',
              height: 70,
              backgroundColor: 'black',
              flexDirection: 'row',
              marginTop: 30,
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}>
            <Ionicons name="add" color="white" size={30} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: 'TenorSans-Regular',
                color: 'white',
                marginRight: 100,
              }}>
              ADD TO BASKET
            </Text>
            <AntDesign name="hearto" color="white" size={25} />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default DetailsComp;

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
    paddingHorizontal: 15,
  },
});
