import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const ExploreComp = () => {
  return (
    <View style={styles.viewContainer}>
      <Image
        source={require('../../assests/images/designNewArrival.png')}
        style={{width: 130, height: 15, marginTop: 20, marginBottom: 20}}
      />
      <View style={[styles.row, {marginTop: 10}]}>
        <View style={styles.imageBox}>
          <Image
            source={require('../../assests/images/exporeMore/Prada.png')}
            style={{height: 14, width: 90}}
          />
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require('../../assests/images/exporeMore/Burberry.png')}
            style={{height: 10, width: 130}}
          />
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require('../../assests/images/exporeMore/Boss.png')}
            style={{height: 30, width: 80}}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.imageBox}>
          <Image
            source={require('../../assests/images/exporeMore/Catier.png')}
            style={{height: 25, width: 87}}
          />
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require('../../assests/images/exporeMore/Gucci.png')}
            style={{height: 16, width: 100}}
          />
        </View>
        <View style={styles.imageBox}>
          <Image
            source={require('../../assests/images/exporeMore/Tiffany.png')}
            style={{height: 13, width: 100}}
          />
        </View>
      </View>
      <Image
        source={require('../../assests/images/designNewArrival.png')}
        style={{width: 130, height: 15, marginTop: 20, marginBottom: 20}}
      />
    </View>
  );
};

export default ExploreComp;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  row: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 30,
  },
  imageBox: {
    flex: 1,
    alignItems: 'center',
  },
});
