import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const row1 = [
  {id: 1, tag: '2021'},
  {id: 2, tag: 'spring'},
  {id: 3, tag: 'collection'},
  {id: 4, tag: 'fall'},
];
const row2 = [
  {id: 1, tag: 'dress'},
  {id: 2, tag: 'autmncollection'},
  {id: 3, tag: 'openfashion'},
];
const TrendingComp = () => {
  const render1 = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 13,
        }}>
        <Text style={styles.tagText}>#{item.tag}</Text>
      </View>
    );
  };
  const render2 = ({item}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginHorizontal: 4,
        }}>
        <Text style={styles.tagText}>#{item.tag}</Text>
      </View>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>@TRENDING</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <FlatList
          data={row1}
          horizontal
          renderItem={render1}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          style={{marginTop: 30}}
        />
        <FlatList
          data={row2}
          horizontal
          renderItem={render2}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          style={{marginTop: 20}}
        />
      </View>
    </View>
  );
};

export default TrendingComp;

const styles = StyleSheet.create({
  viewContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 25,
    fontFamily: 'TenorSans-Regular',
  },
  tagText: {
    fontSize: 16,
    fontFamily: 'TenorSans-Regular',
  },
});
