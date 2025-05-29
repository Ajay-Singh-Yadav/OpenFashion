import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FooterComponent = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/images/Twitter.png')}
          style={styles.logos}
        />
        <Image
          source={require('../assets/images/Instagram2.png')}
          style={styles.logos}
        />
        <Image
          source={require('../assets/images/YouTube.png')}
          style={styles.logos}
        />
      </View>
      <Image
        source={require('../assets/images/line.png')}
        style={{width: 180, height: 20, marginLeft: 160, marginTop: 30}}
      />
      <Text style={[styles.text, {marginTop: 30}]}>support@openui.design</Text>
      <Text style={styles.text}>+60 825 876</Text>
      <Text style={styles.text}>08:00 - 22:00 - Everyday</Text>
      <Image
        source={require('../assets/images/line.png')}
        style={{width: 180, height: 20, marginLeft: 160, marginTop: 20}}
      />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginHorizontal: 20,
          marginTop: 30,
        }}>
        <Text style={styles.tex2}>About</Text>
        <Text style={styles.tex2}>Contact</Text>
        <Text style={styles.tex2}>Blog</Text>
      </View>
      <View
        style={{
          backgroundColor: '#C4C4C4',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
          marginTop: 30,
        }}>
        <Text style={styles.tex3}>Copyright© OpenUI All Rights Reserved.</Text>
      </View>
    </View>
  );
};

export default FooterComponent;

const styles = StyleSheet.create({
  mainContainer: {},
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 120,
    marginTop: 40,
  },
  logos: {
    height: 40,
    width: 40,
  },
  text: {
    fontSize: 20,
    fontFamily: 'TenorSans-Regular',
    alignSelf: 'center',
    marginBottom: 15,
  },
  tex2: {
    fontSize: 20,
    fontFamily: 'TenorSans-Regular',
    alignSelf: 'center',
    marginBottom: 15,
    color: '#000000',
    fontWeight: 400,
  },
  tex3: {
    fontSize: 16,
    fontFamily: 'TenorSans-Regular',
    marginBottom: 15,
    marginTop: 10,
    color: '#555555',
  },
});
