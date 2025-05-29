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

const ProductDetails = () => {
  return (
    <View style={{}}>
      <View
        style={{
          width: '100%',
          height: 510,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/images/newArrival1.png')}
          style={{width: 345, height: 480}}
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
        <Text style={styles.title}>21WN</Text>
        <Image
          source={require('../assets/images/Export.png')}
          style={{height: 25, width: 25, marginRight: 10}}
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
          paddingHorizontal: 30,
        }}>
        $ 120
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
