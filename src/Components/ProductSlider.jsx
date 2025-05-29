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
import Icon from 'react-native-vector-icons/Entypo';

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
      <Text style={styles.text}>JUST FOR YOU</Text>
      <Image
        source={require('../assets/images/line.png')}
        style={{width: 180, height: 20, marginLeft: 160, marginBottom: 30}}
      />
      <FlatList
        data={product}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        scrollEnabled={true} // disables internal scroll
      />

      <Text style={styles.trendingText}>@ TERNDING</Text>

      <View style={styles.trendingContainer}>
        <View
          style={{
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            padding: 10,
          }}>
          <Text style={styles.trendingSubText}>#2021</Text>
        </View>

        <View
          style={{
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            marginLeft: 10,
          }}>
          <Text style={styles.trendingSubText}>#spring</Text>
        </View>
        <View
          style={{
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            marginLeft: 10,
          }}>
          <Text style={styles.trendingSubText}>#collection</Text>
        </View>

        <View
          style={{
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            marginLeft: 10,
          }}>
          <Text style={styles.trendingSubText}>#fall</Text>
        </View>
      </View>

      {/* tranding 2 */}
      <View style={styles.trendingContainer2}>
        <View
          style={{
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            padding: 10,
          }}>
          <Text style={styles.trendingSubText}>#dress</Text>
        </View>

        <View
          style={{
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            marginLeft: 10,
          }}>
          <Text style={styles.trendingSubText}>#autumncollection</Text>
        </View>
        <View
          style={{
            borderRadius: 30,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#F9F9F9',
            marginLeft: 10,
          }}>
          <Text style={styles.trendingSubText}>#openfashion</Text>
        </View>
      </View>

      {/* Last view */}
    </View>
  );
};

export default CardImage;

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    margin: CARD_MARGIN,
    width: CARD_WIDTH,
    marginBottom: 60,
  },
  cardImage: {
    width: 230,
    height: 350,
  },
  text: {
    fontSize: 25,
    fontFamily: 'TenorSans-Regular',
    alignSelf: 'center',
    letterSpacing: 4,
    marginBottom: 20,
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
  trendingText: {
    alignSelf: 'center',
    fontSize: 25,
    fontFamily: 'TenorSans-Regular',
    letterSpacing: 4,
  },
  trendingSubText: {
    fontSize: 16,
    letterSpacing: 1,
    fontFamily: 'TenorSans-Regular',
    marginHorizontal: 15,
    borderRadius: 30,
  },
  trendingContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 20,
    marginLeft: 15,
  },
  trendingContainer2: {
    flexDirection: 'row',
    // borderWidth: 1,
    marginTop: 0,
    marginBottom: 40,
    marginHorizontal: 20,
    marginLeft: 15,
  },
});
