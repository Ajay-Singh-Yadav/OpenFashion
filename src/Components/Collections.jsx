import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Collections = () => {
  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>COLLECTIONS</Text>
      <Image
        source={require('./../assets/images/Frame.png')}
        style={styles.image}
      />

      <ImageBackground
        source={require('./../assets/images/autumnCollection.png')}
        style={styles.autumnCollection}>
        <Text style={styles.autumnText}>Autumn</Text>
        <Text style={styles.collectionText}>COLLECTION</Text>
      </ImageBackground>

      <Image
        source={require('./../assets/images/Video.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  conatiner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginBottom: 20,
    fontSize: 30,
    letterSpacing: 4,
    fontFamily: 'TenorSans-Regular',
  },
  image: {
    width: 510,
    height: 320,
    marginBottom: 50,
    marginHorizontal: 30,
  },
  autumnCollection: {
    width: 400,
    height: 550,
    marginBottom: 50,
    marginHorizontal: 30,
  },
  autumnText: {
    fontSize: 60,
    opacity: 0.7,
    fontFamily: 'BodoniModa_28pt-BoldItalic',
    marginTop: 60,
    marginLeft: 100,
  },
  collectionText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: 20,
    opacity: 0.7,
    letterSpacing: 5.31,
    marginLeft: 130,
  },
});
