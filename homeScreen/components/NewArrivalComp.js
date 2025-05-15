import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import NewArrival1 from '../../assests/images/newArrival/newArrival1.png';
import NewArrival2 from '../../assests/images/newArrival/newArrival2.png';
import NewArrival3 from '../../assests/images/newArrival/newArrival3.png';
import NewArrival4 from '../../assests/images/newArrival/newArrival4.png';
import {useNavigation} from '@react-navigation/native';

const NewArrivalItems = [
  {
    id: 1,
    name: '21WN reversible angora\ncardigan',
    price: 120,
    image: NewArrival1,
  },
  {
    id: 2,
    name: '22WN reversible angora\ncardigan',
    price: 120,
    image: NewArrival2,
  },
  {
    id: 3,
    name: '23WN reversible angora\ncardigan',
    price: 120,
    image: NewArrival3,
  },
  {id: 4, name: 'Oblong bag', price: 120, image: NewArrival4},
];

const NewArrivalComp = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductList', {
            name: item.name,
            price: item.price,
            image: item.image,
          })
        }>
        <View style={styles.newArrivalContainer}>
          <Image source={item.image} style={{width: 165, height: 200}} />
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'TenorSans-Regular',
              textAlign: 'center',
              marginTop: 10,
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'TenorSans-Regular',
              textAlign: 'center',
              marginTop: 5,
              marginBottom: 10,
              color: 'red',
            }}>
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.titleText}>NEW ARRIVAL</Text>
      <Image
        source={require('../../assests/images/designNewArrival.png')}
        style={{width: 130, height: 15}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30,
        }}>
        {['All', 'Apparel', 'Dress', 'Tshirt', 'Bag'].map((item, index) => (
          <Text
            key={index}
            style={{
              fontSize: 14,
              fontFamily: 'TenorSans-Regular',
              flex: 1,
              textAlign: 'center',
            }}>
            {item}
          </Text>
        ))}
      </View>

      <FlatList
        data={NewArrivalItems}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
        numColumns={2}
        contentContainerStyle={{marginTop: 20}}
      />

      <Text
        style={{
          fontSize: 18,
          fontFamily: 'TenorSans-Regular',
          marginTop: 40,
          marginBottom: 20,
        }}>
        Explore More
      </Text>
    </View>
  );
};

export default NewArrivalComp;

const styles = StyleSheet.create({
  viewContainer: {
    margin: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    marginTop: 30,
    fontSize: 20,
    fontFamily: 'TenorSans-Regular',
  },
  newArrivalContainer: {
    padding: 5,
  },
});
