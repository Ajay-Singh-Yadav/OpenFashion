import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Filters from '../Components/Filters';
import {products} from '../data/data';
import TopBarComp from '../Components/TopBarComp';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';

export default function ProductListGridScreen() {
  const navigation = useNavigation();
  const [isGridView, setIsGridView] = useState(true);
  const screenWidth = Dimensions.get('window').width;
  const gridItemWidth = (screenWidth - 30) / 2;

  //  Grid View
  const renderGridItem = ({item}) => (
    <TouchableOpacity onPress={() => navigation.navigate('ProductScreen')}>
      <View style={[styles.gridItem, {width: gridItemWidth}]}>
        <ImageBackground
          source={item.image}
          style={styles.gridImage}
          imageStyle={{borderRadius: 10}}>
          <TouchableOpacity style={styles.gridHeartIcon}>
            <Ionicons name="heart-outline" size={22} color="#DD8560" />
          </TouchableOpacity>
        </ImageBackground>

        <Text style={styles.brandText}>{item.brand}</Text>
        <Text style={styles.nameText}>{item.name}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  // List View
  const renderListItem = ({item}) => (
    <TouchableOpacity>
      <View style={styles.listItem}>
        <Image source={item.image} style={styles.listImage} />
        <View style={styles.listInfo}>
          <Text style={styles.brandText}>{item.brand}</Text>
          <Text style={styles.nameText}>{item.name}</Text>
          <Text style={styles.priceText}>{item.price}</Text>
          <Text style={styles.ratingText}>⭐ {item.rating} Ratings</Text>
          <View style={styles.sizeRow}>
            <Text style={{fontSize: 16, marginRight: 10}}>Size</Text>
            {item.sizes.map(size => (
              <View key={size} style={styles.sizeBox}>
                <Text>{size}</Text>
              </View>
            ))}
            <TouchableOpacity style={styles.heartIcon}>
              <Ionicons name="heart-outline" size={22} color="#DD8560" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TopBarComp />

      {/* Top Header */}
      <View style={{backgroundColor: '#fff'}}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>4500 APPAREL</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={styles.New}>
              <Text style={styles.newText}>New</Text>
              <AntDesign
                name="caretdown"
                size={10}
                color="gray"
                style={{marginLeft: 8}}
              />
            </View>
            <View style={styles.icons}>
              {/* Single Toggle Icon */}
              <TouchableOpacity
                onPress={() => setIsGridView(!isGridView)}
                style={styles.toggleIcon}>
                <Image
                  source={
                    isGridView
                      ? require('../assets/images/List.png')
                      : require('../assets/images/grid.png')
                  }
                  style={{width: 30, height: 30}}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                height: 50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#e5e5e5',
                borderRadius: 30,
              }}>
              <Image
                source={
                  require('../assets/images/Filter.png') // Show List icon if in grid
                }
                style={[styles.toggleIcon, {width: 30, height: 30}]}
              />
            </View>
          </View>
        </View>

        {/* filters */}
        <Filters />
      </View>

      {/* Product List */}
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={isGridView ? renderGridItem : renderListItem}
        key={isGridView ? 'grid' : 'list'}
        numColumns={isGridView ? 2 : 1}
        contentContainerStyle={{paddingBottom: 30}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontFamily: 'TenorSans-Regular',
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
    borderRadius: 30,
    marginRight: 15,
  },
  toggleIcon: {
    padding: 10,
    alignItems: 'center',
  },

  // Grid View
  gridItem: {
    margin: 5,
    borderRadius: 10,
    padding: 10,
    textAlign: 'left',
  },
  gridImage: {
    width: 200,
    height: 200,
    borderRadius: 8,
    aspectRatio: 1,
    resizeMode: 'contains',
  },

  // List View
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start',
  },
  listImage: {
    width: 200,
    height: 250,
    borderRadius: 8,
    marginRight: 10,
  },
  listInfo: {
    marginTop: 30,
    flex: 1,
  },
  heartIcon: {
    marginLeft: 50,
  },

  // Common Text
  brandText: {
    fontSize: 14,
    marginTop: 10,
    fontFamily: 'TenorSans-Regular',
    marginBottom: 2,
  },
  nameText: {
    fontSize: 12,
    fontFamily: 'TenorSans-Regular',
    marginBottom: 4,
    color: 'gray',
  },
  priceText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: 15,
    color: '#DD8560',
    marginBottom: 4,
  },
  ratingText: {
    fontSize: 12,
    fontFamily: 'TenorSans-Regular',
    color: '#888',
    marginBottom: 6,
  },
  sizeRow: {
    flexDirection: 'row',
    gap: 6,
  },
  sizeBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginRight: 6,
  },
  New: {
    flexDirection: 'row',
    backgroundColor: '#e5e5e5',
    padding: 8,
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  newText: {
    color: 'gray',
    fontSize: 18,
    fontFamily: 'TenorSans-Regular',
  },

  // grid view heart Icon
  gridImageContainer: {
    position: 'relative',
  },

  gridImage: {
    width: '100%',
    height: 240, // Or adjust based on your design
    justifyContent: 'flex-end', // to position icon at the bottom
  },

  gridHeartIcon: {
    position: 'absolute',
    right: 5, // Optional: dark circle behind icon
    padding: 5,
  },
});
