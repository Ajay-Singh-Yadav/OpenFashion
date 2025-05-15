import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Group2 from '../../assests/images/followUs/Group2.png';
import Group3 from '../../assests/images/followUs/Group3.png';
import Group4 from '../../assests/images/followUs/Group4.png';
import Group5 from '../../assests/images/followUs/Group5.png';
import {useNavigation} from '@react-navigation/native';

const items = [
  {id: 1, image: Group2},
  {id: 2, image: Group3},
  {id: 3, image: Group4},
  {id: 4, image: Group5},
];

const FollowUsComp = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => {
    return (
      <View style={{padding: 5}}>
        <Image source={item.image} style={{height: 170, width: 170}} />
      </View>
    );
  };
  return (
    <View style={styles.viewContainer}>
      <Text style={styles.title}>FOLLOW US</Text>
      <Image
        source={require('../../assests/images/Vector.png')}
        style={{width: 28, height: 28, marginTop: 20, marginBottom: 20}}
      />
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        scrollEnabled={false}
      />
      <Image
        source={require('../../assests/images/followUs/Group29.png')}
        style={{height: 23, width: 165, marginTop: 30}}
      />
      <Image
        source={require('../../assests/images/designNewArrival.png')}
        style={{width: 130, height: 15, marginTop: 20, marginBottom: 20}}
      />
      <Text style={{fontSize: 17, fontFamily: 'TenorSans-Regular'}}>
        support@openui.design
      </Text>
      <Text
        style={{fontSize: 17, fontFamily: 'TenorSans-Regular', marginTop: 10}}>
        +60 825 876
      </Text>
      <Text
        style={{fontSize: 17, fontFamily: 'TenorSans-Regular', marginTop: 10}}>
        08:00 - 22:00 - Everyday
      </Text>
      <Image
        source={require('../../assests/images/designNewArrival.png')}
        style={{width: 130, height: 15, marginTop: 20, marginBottom: 50}}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity style={{flex: 1}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              textAlign: 'center',
              fontWeight: 600,
            }}>
            About
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              textAlign: 'center',
              fontWeight: 600,
            }}>
            Contact
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => navigation.navigate('Blog')}>
          <Text
            style={{
              fontSize: 18,
              fontFamily: 'TenorSans-Regular',
              textAlign: 'center',
              fontWeight: 600,
            }}>
            Blog
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: 50,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
          backgroundColor: '#C4C4C42A',
        }}>
        <Text
          style={{
            fontSize: 13,
            fontFamily: 'TenorSans-Regular',
            textAlign: 'center',
          }}>
          Copyright OpenUI All Right Reserved
        </Text>
      </View>
    </View>
  );
};

export default FollowUsComp;

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    letterSpacing: 2,
    fontFamily: 'TenorSans-Regular',
  },
});
