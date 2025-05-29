import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {cardImages} from '../constant/data';

const FashionPage = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={{backgroundColor: '#C4C4C4', height: 700}}>
        <Image
          source={require('../assets/images/fashion.png')}
          style={styles.fashionImage}
        />
        <Text style={styles.fashionText}>
          {' '}
          Making a luxurious lifestyle accessible{' '}
        </Text>
        <Text style={styles.fashionText}>for a generous group of women is</Text>
        <Text style={[styles.fashionText, {marginBottom: 30}]}>
          {' '}
          our daily drive.
        </Text>
        <Image
          source={require('../assets/images/line.png')}
          style={{width: 180, height: 20, marginLeft: 130, marginBottom: 30}}
        />

        {/* Details  */}
        <View style={styles.detailsContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.card}>
              <Image
                source={require('../assets/images/blocks.png')}
                style={styles.logoImage}
              />
              <Text style={styles.cardText}>Fast shipping.</Text>
              <Text style={styles.cardText}> Free on orders over $25.</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require('../assets/images/tree.png')}
                style={styles.logoImage}
              />
              <Text style={styles.cardText}>Sustainable process</Text>
              <Text style={styles.cardText}>from start to finish.</Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.card}>
              <Image
                source={require('../assets/images/roll.png')}
                style={styles.logoImage}
              />
              <Text style={styles.cardText}>Unique designs</Text>
              <Text style={styles.cardText}>and high-quality materials.</Text>
            </View>
            <View style={styles.card}>
              <Image
                source={require('../assets/images/heart.png')}
                style={styles.logoImage}
              />
              <Text style={styles.cardText}>Fast shipping.</Text>
              <Text style={styles.cardText}>Free on orders over $25.</Text>
            </View>
          </View>
          <Image
            source={require('../assets/images/curveline.png')}
            style={{
              alignSelf: 'center',
              marginTop: 30,
              height: 60,
              width: 100,
              margin: 10,
            }}
          />
        </View>
      </View>

      {/* Follow US */}

      <View style={styles.followUsMainContainer}>
        {/* sub container */}
        <View style={styles.followUsSubContainer}>
          <Text style={styles.followText}>FOLLOW US</Text>
          <Image
            source={require('../assets/images/instagram.png')}
            style={styles.insta}
          />
        </View>

        {/* Image Cards */}

        <View style={styles.ImageCardContainer}>
          <FlatList
            data={cardImages}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <View>
                <TouchableOpacity style={{margin: 10}}>
                  <Image
                    source={item.image}
                    style={{height: 250, width: 234}}
                  />
                </TouchableOpacity>
              </View>
            )}
            scrollEnabled={false}
            numColumns={2}
          />
        </View>

        {/* footer */}
      </View>
    </View>
  );
};

export default FashionPage;

const styles = StyleSheet.create({
  mainContainer: {
    // borderWidth: 1,
  },
  fashionImage: {
    height: 65,
    width: 225,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 40,
    resizeMode: 'contain',
  },
  fashionText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'TenorSans-Regular',
    letterSpacing: 1,
    color: '#555555',
  },
  detailsContainer: {
    backgroundColor: '#C4C4C4',
  },
  logoImage: {
    height: 50,
    width: 70,
    marginBottom: 10,
  },
  card: {
    alignItems: 'center',
    marginTop: 30,
    // borderWidth: 1,
  },
  cardText: {
    fontFamily: 'TenorSans-Regular',
    color: '#555555',
    fontSize: 17,
  },
  followUsMainContainer: {
    // alignItems: 'center',
    marginTop: 30,
  },
  followUsSubContainer: {
    alignItems: 'center',
  },
  followText: {
    fontSize: 30,
    fontFamily: 'TenorSans-Regular',
  },
  insta: {
    width: 26,
    height: 26,
    padding: 10,
    margin: 20,
  },
});
