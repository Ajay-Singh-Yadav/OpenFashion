import React from 'react';
import {Image, StyleSheet, View, Text, ImageBackground} from 'react-native';

const CollectionComp = () => {
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.textTitle}>COLLECTIONS</Text>
      <Image
        source={require('../../assests/images/collectionComp/Frame2.png')}
        style={styles.frame2Image}
      />

      <ImageBackground
        source={require('../../assests/images/collectionComp/image9.png')}
        style={styles.image9Image}>
        <View style={styles.viewText}>
          <Text style={styles.text1}>Autumn</Text>
          <Text style={styles.text2}>COLLECTION</Text>
        </View>
      </ImageBackground>

      <Image
        source={require('../../assests/images/collectionComp/Video.png')}
        style={{height: 180, width: '100%', marginTop: 60}}
      />
    </View>
  );
};

export default CollectionComp;

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 30,
    marginBottom: 40,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame2Image: {
    height: 240,
    width: '100%',
  },
  image9Image: {
    marginTop: 60,
    height: 300,
    width: 260,
  },
  textTitle: {
    fontSize: 22,
    fontFamily: 'TenorSans-Regular',
    marginBottom: 40,
  },
  viewText: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 170,
    marginLeft: 70,
  },
  text1: {
    fontSize: 42,
    fontFamily: 'BodoniModa_28pt-MediumItalic',
    color: '#333333',
    opacity: 0.8,
  },
  text2: {
    fontSize: 13,
    fontFamily: 'TenorSans-Regular',
    marginTop: -5,
    letterSpacing: 2,
  },
});
