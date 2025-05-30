import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const CircleButton = ({type = 'plus', onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.icon}>{type === 'plus' ? '+' : '-'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F6ACAC',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 5,
  },
  icon: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CircleButton;
