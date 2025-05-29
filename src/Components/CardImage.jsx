import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {product} from '../constant/data';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const CARD_MARGIN = 10;
const NUM_COLUMNS = 2;
const CARD_WIDTH = (width - CARD_MARGIN * (NUM_COLUMNS * 2)) / NUM_COLUMNS;

const CardImage = () => {
  const renderItem = ({item}) => (
    <TouchableOpacity style={styles.container}>
      <Image source={item.image} style={styles.cardImage} resizeMode="cover" />
      <Text style={styles.nameText}>{item.name}</Text>
      <Text style={styles.priceText}>{'$' + item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={product}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        scrollEnabled={false} // disables internal scroll
        numColumns={NUM_COLUMNS}
      />

      <TouchableOpacity style={styles.exploreContainer}>
        <Text style={styles.exploreText}>Explore More</Text>
        <Image
          source={require('../assets/images/Arrow.png')}
          style={{height: 30, width: 30}}
        />
      </TouchableOpacity>

      <View style={styles.brandContainer}>
        <Image
          source={require('../assets/images/Brand.png')}
          style={styles.brandImage}
        />
      </View>
    </View>
  );
};

export default CardImage;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    margin: CARD_MARGIN,
    width: CARD_WIDTH,
  },
  cardImage: {
    width: 230,
    height: 350,
  },
  nameText: {
    fontFamily: 'TenorSans-Regular',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 10,
    fontWeight: 400,
  },
  priceText: {
    textAlign: 'center',
    fontFamily: 'TenorSans-Regular',
    fontSize: 17,
    color: '#DD8560',
    marginTop: 10,
  },
  exploreContainer: {
    //  borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
    gap: 10,
    padding: 20,
  },
  exploreText: {
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'TenorSans-Regular',
  },
  brandContainer: {
    flex: 1,
    flexDirection: 'row',

    // marginBottom: 40,
  },
  brandImage: {
    width: 450,
    height: 240,
    marginHorizontal: 10,
  },
});
