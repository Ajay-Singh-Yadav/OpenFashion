import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Image1 from '../../assests/images/newArrival/newArrival1.png';
import Image2 from '../../assests/images/newArrival/newArrival2.png';
import Image3 from '../../assests/images/newArrival/newArrival3.png';
import Image4 from '../../assests/images/newArrival/newArrival4.png';

const items = [
  {id: 1, name: 'Harris Tweed Three button\nJacket', price: 120, image: Image1},
  {
    id: 2,
    name: 'Cashmere Blend Cropped\nJacket SW1WJ285-AM',
    price: 120,
    image: Image2,
  },
  {id: 3, name: 'Harris Tweed Three button\nJacket', price: 120, image: Image3},
  {id: 4, name: 'Harris Tweed Three button\nJacket', price: 120, image: Image4},
];

const JustForYouComp = () => {
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 5,
          }}>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.text}>{item.name}</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>JUST FOR YOU</Text>
      <Image
        source={require('../../assests/images/designNewArrival.png')}
        style={{width: 130, height: 15, marginTop: 20, marginBottom: 20}}
      />
      <FlatList
        data={items}
        horizontal
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        style={{padding: 5}}
      />
    </View>
  );
};

export default JustForYouComp;

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
  },
  title: {
    fontSize: 19,
    fontFamily: 'TenorSans-Regular',
    letterSpacing: 2,
  },
  image: {
    width: 255,
    height: 315,
  },
  text: {
    fontSize: 15,
    fontFamily: 'TenorSans-Regular',
    textAlign: 'center',
    marginTop: 10,
  },
  price: {
    fontSize: 18,
    color: 'red',
    marginTop: 10,
    fontFamily: 'TenorSans-Regular',
  },
});
