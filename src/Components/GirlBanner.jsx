import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const GirlBanner = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../assets/images/girl.png')}
      resizeMode="cover"
      style={styles.girlImage}>
      <View style={styles.girlContainer}>
        <Text style={styles.girlText}>LUXURY </Text>
        <Text style={styles.girlText}>{'  '}FASHION</Text>
        <Text style={styles.girlText}>& ACCESSORIES</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('ListGrid')}>
        <View style={styles.btnContainer}>
          <Text style={styles.btnText}>EXPLORE COLLECTION</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default GirlBanner;

const styles = StyleSheet.create({
  girlImage: {
    flex: 1,
    width: '100%',
    height: 900,
    marginTop: 0,
    alignItems: 'center',
  },
  girlContainer: {
    marginVertical: 250,
  },
  girlText: {
    fontSize: 40,
    fontFamily: 'BodoniModa_28pt-SemiBoldItalic',
    opacity: 0.7,
    color: '#333333',
    letterSpacing: 1.2,
    lineHeight: 43,
  },
  btnContainer: {
    borderRadius: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: 15,
    marginTop: 120,
  },
  btnText: {
    fontSize: 25,
    fontFamily: 'TenorSans-Regular',

    color: 'white',
    marginHorizontal: 30,
  },
});
