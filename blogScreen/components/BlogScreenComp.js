import React from 'react';
import {StyleSheet, View} from 'react-native';

const BlogScreenComp = () => {
  return (
    <View style={{padding: 5, marginTop: 20}}>
      <Text style={styles.textTitle}>BLOG</Text>
    </View>
  );
};

export default BlogScreenComp;

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 20,
    fontFamily: 'TenorSans-Regular',
    letterSpacing: 2,
  },
});
