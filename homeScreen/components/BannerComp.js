import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const BannerComp = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
      <ImageBackground
        source={require('../../assests/images/image10.png')}
        style={styles.imageBackground}>
        <View style={styles.imageContainer}>
          <View style={{alignItems: 'center', marginTop: 200}}>
            <Text style={[styles.text, {marginBottom: -15, marginRight: 110}]}>
              LUXARY
            </Text>
            <Text style={[styles.text, {marginBottom: -15, marginRight: 70}]}>
              FASHION
            </Text>
            <Text style={styles.text}>
              <Text style={{fontSize: 30}}>&</Text>ACCESSORIES
            </Text>
          </View>

          <View style={styles.viewCard}>
            <Text
              style={{
                fontSize: 15,
                textAlign: 'center',
                color: 'white',
                opacity: 1,
                fontFamily: 'TenorSans-Regular',
              }}>
              EXPLORE COLLECTION
            </Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default BannerComp;

const styles = StyleSheet.create({
  imageBackground: {
    height: 620,
    width: 385,
  },
  text: {
    fontSize: 35,
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    color: '#333333',
    opacity: 0.7,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingVertical: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewCard: {
    height: 50,
    borderRadius: 50,
    width: 250,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
