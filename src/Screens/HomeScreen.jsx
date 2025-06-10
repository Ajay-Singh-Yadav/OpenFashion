import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Components/Header';
import GirlBanner from '../Components/GirlBanner';
import CardImage from '../Components/CardImage';
import Categories from '../Components/Categories';
import Collections from '../Components/Collections';
import ProductSlider from '../Components/ProductSlider';
import FashionPage from '../Components/FashionPage';
import FooterComponent from '../Components/footer';
import TopBarComp from '../Components/TopBarComp';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [userEmail, setUserEmail] = useState('');

  const handleLogOut = async () => {
    await auth().signOut();
    navigation.replace('Login');
  };

  return (
    <View style={styles.Maincontainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <SafeAreaView style={{flex: 1}}>
        {/* Header */}
        <TopBarComp onPress={handleLogOut} />
        {/* <Header /> */}

        <ScrollView style={{flex: 1}}>
          {/* Image Slider */}
          <GirlBanner />

          {/* New Arrival and Categories */}
          <Categories />

          {/* New Product Cards and Brands */}
          <CardImage />

          {/* Collections */}
          <Collections />

          {/* Product Slider  */}

          <ProductSlider />

          {/* Fashion Page Component */}

          <FashionPage />

          {/* Footer  */}

          <FooterComponent />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  Maincontainer: {
    flex: 1,
  },
  arrivalContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  arrivalText: {
    fontSize: 30,
    fontWeight: '300',
    marginBottom: 30,
  },
  categoryText: {
    fontSize: 20,
    marginHorizontal: 20,
  },
});
