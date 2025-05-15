import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import Sticker1 from '../../assests/images/openFashion/MiroodlesSticker.png';
import Sticker2 from '../../assests/images/openFashion/MiroodlesSticker2.png';
import Sticker3 from '../../assests/images/openFashion/MiroodlesSticker3.png';
import Sticker4 from '../../assests/images/openFashion/MiroodlesSticker4.png';
import {Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const ITEM_WIDTH = (screenWidth - 60) / 2;

const items = [
  {id: 1, value: 'Fast shipping. Free on\norders over $25.', image: Sticker1},
  {id: 2, value: 'Sustainable process\nfrom start to finish.', image: Sticker2},
  {
    id: 3,
    value: 'Unique designs\nand high-quality materials.',
    image: Sticker3,
  },
  {id: 4, value: 'Fast shipping.\nFree on orders over $25.', image: Sticker4},
];
const OpenFashion = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={item.image} style={{width: 55, height: 50}} />
        <Text
          style={{
            fontSize: 12,
            fontFamily: 'TenorSans-Regular',
            marginTop: 10,
            textAlign: 'center',
          }}>
          {item.value}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Image
        source={require('../../assests/images/Logo.png')}
        style={{height: 41, width: 100, marginTop: 20}}
      />
      <Text style={styles.textDesc}>
        Making a luxurious lifestyle accessible{'\n'}for a generous group of
        women is our{'\n'}daily drive.
      </Text>
      <Image
        source={require('../../assests/images/designNewArrival.png')}
        style={{width: 130, height: 15, marginTop: 20, marginBottom: 10}}
      />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        scrollEnabled={false}
        numColumns={2}
        contentContainerStyle={{marginTop: 20}}
      />

      <Image
        source={require('../../assests/images/openFashion/Sticker.png')}
        style={{height: 50, width: 85, marginTop: 30, marginBottom: 30}}
      />
    </View>
  );
};

export default OpenFashion;

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(242, 242, 242, 0.5)',
  },
  textDesc: {
    marginTop: 30,
    fontSize: 14,
    fontFamily: 'TenorSans-Regular',
    textAlign: 'center',
  },
  itemContainer: {
    margin: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: ITEM_WIDTH,
  },
});
