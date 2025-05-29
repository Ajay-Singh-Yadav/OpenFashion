import {DrawerContentScrollView} from '@react-navigation/drawer';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const ProductDrawer = props => {
  const navigation = useNavigation();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCategoryList = () => {
    setIsExpanded(prev => !prev);
  };

  const handleCategoryPress = type => {
    navigation.navigate('Explore', {type});
    navigation.dispatch(DrawerActions.closeDrawer);
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.closeDrawer)}>
          <Entypo name="cross" size={30} opacity={0.6} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              marginTop: 50,
            }}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleCategoryList}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 20,
            }}>
            <Text style={{fontSize: 18, fontFamily: 'TenorSans-Regular'}}>
              Category
            </Text>
            <Entypo
              name={isExpanded ? 'chevron-down' : 'chevron-up'}
              size={25}
              style={{marginLeft: 110}}
            />
          </View>
        </TouchableOpacity>

        {isExpanded && (
          <View style={{marginTop: 10, marginLeft: 40}}>
            {['women', 'men', 'children'].map(category => (
              <TouchableOpacity
                key={category}
                onPress={() => handleCategoryPress(category)}>
                <Text
                  style={{
                    fontSize: 17,
                    fontFamily: 'TenorSans-Regular',
                    marginTop: 15,
                    opacity: 0.6,
                  }}>
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              marginTop: 30,
            }}>
            Cart
          </Text>
        </TouchableOpacity>

        <Image
          source={require('../../assests/images/designNewArrival.png')}
          style={{width: 180, height: 15, marginTop: 30, marginBottom: 20}}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default ProductDrawer;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'flex-start',
  },
});
