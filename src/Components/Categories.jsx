import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {category} from '../constant/data';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState('1');

  return (
    <View style={styles.arrivalContainer}>
      <Text style={styles.arrivalText}>New ARRIVAL</Text>
      <Image
        source={require('../assets/images/line.png')}
        style={{width: 160, height: 20}}
      />

      <View>
        {/* Category */}
        <ScrollView horizontal style={{marginHorizontal: 30}}>
          {category.map(item => {
            const isActive = item.id === selectedCategory;
            return (
              <TouchableOpacity
                key={item.id}
                onPress={() => setSelectedCategory(item.id)}
                style={[styles.tab]}>
                <Text
                  style={[
                    styles.tabText,
                    {color: isActive ? '#333' : '#888888'},
                  ]}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  arrivalContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  arrivalText: {
    fontSize: 30,
    fontFamily: 'TenorSans-Regular',
    fontWeight: '300',
  },
  tab: {
    paddingHorizontal: 30,
    borderRadius: 30,
    marginRight: 10,
    marginBottom: 30,
    justifyContent: 'center',
  },
  tabText: {
    // color: '#888888',
    fontFamily: 'TenorSans-Regular',
    fontSize: 18,
    fontWeight: '400',
  },
});
