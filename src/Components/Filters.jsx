import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Filters = () => {
  return (
    <View>
      <View style={{flexDirection: 'row', marginBottom: 20, marginLeft: 20}}>
        <View style={styles.row}>
          <Text style={{fontFamily: 'TenorSans-Regular'}}>Women</Text>
          <AntDesign
            name="close"
            size={20}
            color="#333"
            style={{marginLeft: 8}}
          />
        </View>
        <View style={styles.row}>
          <Text style={{fontFamily: 'TenorSans-Regular'}}>All apparel</Text>
          <AntDesign
            name="close"
            size={20}
            color="#333"
            style={{marginLeft: 8}}
          />
        </View>
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  row: {
    marginRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20,
  },
});
