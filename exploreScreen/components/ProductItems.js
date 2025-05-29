import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {products} from './ProductList';
import {FlatList} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FollowUsComp from '../../homeScreen/components/FollowUsComp';
import ListView from '../../assests/images/explore/Listview.png';
import GridView from '../../assests/images/explore/GridView.png';
import Filter from '../../assests/images/explore/Filter.png';
import Entypo from 'react-native-vector-icons/Entypo';

const {width} = Dimensions.get('window');
const itemWidth = width / 2 - 20;

const ProductItems = () => {
  const [isGrid, setIsGrid] = useState(true);
  const route = useRoute();
  const [selectedFilter, setSeletedFilter] = useState(null);

  useEffect(() => {
    if (route.params?.type) {
      setSeletedFilter(route.params.type);
    }
  }, [route.params?.type]);

  const repeatedProducts = Array.from({length: 5}).flatMap((_, index) =>
    products.map(product => ({
      ...product,
      id: `${product.id}-${index}`,
    })),
  );

  const filteredProducts = selectedFilter
    ? repeatedProducts.filter(product => product.type === selectedFilter)
    : repeatedProducts;

  const navigation = useNavigation();

  const toggleView = () => {
    setIsGrid(prev => !prev);
  };

  const renderGridItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductList', {
            id: item.id,
            name: item.title,
            price: item.price,
            image: item.image,
          })
        }>
        <View style={styles.card}>
          <Image source={item.image} style={{width: 170, height: 240}} />
          <Text
            style={{
              fontSize: 15,
              fontFamily: 'TenorSans-Regular',
              marginStart: 5,
              marginTop: 10,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: 'TenorSans-Regular',
              opacity: 0.6,
              marginTop: 5,
              marginStart: 5,
            }}>
            reversible angora cardian
          </Text>
          <Text
            style={{
              fontSize: 17,
              fontFamily: 'TenorSans-Regular',
              color: 'red',
              marginTop: 10,
              marginStart: 5,
            }}>
            ${item.price}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderListItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ProductList', {
            name: item.title,
            price: item.price,
            image: item.image,
          })
        }>
        <View
          style={{
            width: '100%',
            height: 170,
            margin: 15,
            flexDirection: 'row',
            alignItems: 'flex-start',
          }}>
          <View style={{height: 170, width: 130}}>
            <Image source={item.image} style={{width: 130, height: 170}} />
          </View>

          <View style={{flexDirection: 'column', marginStart: 10}}>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'TenorSans-Regular',
                marginStart: 5,
                marginTop: 10,
              }}>
              {item.title}
            </Text>
            <Text
              style={{
                fontSize: 14,
                fontFamily: 'TenorSans-Regular',
                opacity: 0.6,
                marginTop: 4,
                marginStart: 5,
              }}>
              reversible angora cardian
            </Text>
            <Text
              style={{
                fontSize: 17,
                fontFamily: 'TenorSans-Regular',
                color: 'red',
                marginTop: 5,
                marginStart: 5,
              }}>
              ${item.price}
            </Text>

            <View style={{flexDirection: 'row', marginTop: 8, marginStart: 5}}>
              <Entypo name="star" color="red" opacity={0.5} size={20} />
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'TenorSans-Regular',
                  opacity: 0.5,
                }}>
                {' '}
                4.8 Rating
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 15,
                marginStart: 5,
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'TenorSans-Regular',
                  opacity: 0.5,
                }}>
                Size
              </Text>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  borderWidth: 2,
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  marginLeft: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'TenorSans-Regular',
                    opacity: 0.5,
                  }}>
                  S
                </Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  borderWidth: 2,
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  marginLeft: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'TenorSans-Regular',
                    opacity: 0.5,
                  }}>
                  M
                </Text>
              </View>
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  borderWidth: 2,
                  borderColor: 'rgba(0, 0, 0, 0.2)',
                  marginLeft: 5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: 'TenorSans-Regular',
                    opacity: 0.5,
                  }}>
                  L
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View style={styles.topRow}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'TenorSans-Regular',
            marginLeft: 20,
          }}>
          4500 APPAREL
        </Text>

        <View
          style={{
            width: 70,
            height: 40,
            borderRadius: 25,
            flexDirection: 'row',
            backgroundColor: '#C4C4C42A',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 40,
          }}>
          <Text
            style={{
              fontFamily: 'TenorSans-Regular',
              opacity: 0.5,
              marginRight: 5,
            }}>
            New
          </Text>
          <AntDesign name="caretdown" size={11} opacity={0.6} />
        </View>
        <TouchableOpacity onPress={toggleView}>
          <View
            style={{
              width: 45,
              height: 45,
              borderRadius: 23,
              backgroundColor: '#C4C4C42A',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={isGrid ? ListView : GridView}
              style={{width: 25, height: 25}}
            />
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 23,
            backgroundColor: '#C4C4C42A',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 15,
          }}>
          <Image source={Filter} style={{width: 30, height: 30}} />
        </View>
      </View>

      {selectedFilter && (
        <TouchableOpacity onPress={() => setSeletedFilter(null)}>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: 10,
              marginLeft: 20,
              height: 40,
              width: 110,
              borderRadius: 20,
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, fontFamily: 'TenorSans-Regular'}}>
              {selectedFilter}
            </Text>
            <Entypo name="cross" size={20} style={{marginLeft: 10}} />
          </View>
        </TouchableOpacity>
      )}
      <ScrollView contentContainerStyle={{paddingBottom: 250}}>
        <FlatList
          key={isGrid ? 'grid' : 'list'}
          data={filteredProducts}
          keyExtractor={item => item.id}
          renderItem={isGrid ? renderGridItem : renderListItem}
          numColumns={isGrid ? 2 : 1}
          scrollEnabled={false}
        />
        <FollowUsComp />
      </ScrollView>
    </View>
  );
};

export default ProductItems;

const styles = StyleSheet.create({
  card: {
    width: itemWidth,
    marginBottom: 15,
    margin: 10,
    alignItems: 'flex-start',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 10,
  },
});
