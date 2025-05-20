import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DetailScreenContent = () => {
  return (
    <View style={{marginTop: 20, padding: 13}}>
      <Text style={styles.textTitle}>MATERIALS</Text>
      <Text style={styles.text}>
        We work with monitoring programmes to ensure compliance with safety,
        health and quality standards for our products.{' '}
      </Text>
      <Text style={[styles.textTitle, {marginTop: 30}]}>CARE</Text>
      <Text style={styles.text}>
        To keep your jackets and coats clean, you only need to freshen them up
        and go over them with a cloth or a clothes brush. If you need to dry
        clean a garment, look for a dry cleaner that uses technologies that are
        respectful of the environment.{' '}
      </Text>
    </View>
  );
};

export default DetailScreenContent;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    fontFamily: 'TenorSans-Regular',
    marginBottom: 15,
  },
  text: {
    fontSize: 15,
    fontFamily: 'TenorSans-Regular',
    marginBottom: 10,
    lineHeight: 24,
  },
});
