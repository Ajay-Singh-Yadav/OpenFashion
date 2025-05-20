import React from 'react';
import {TouchableOpacity} from 'react-native';

const FilterDrawer = ({navigation, setFiilter}) => {
  const handleFilter = type => {
    setFiilter(type);
  };

  return (
    <View>
      <Text>Filter By Type</Text>
      {['all', 'men', 'women', 'children'].map(type => (
        <TouchableOpacity key={type} onPress={() => handleFilter(type)}>
          <Text>{type.toUpperCase}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default FilterDrawer;
