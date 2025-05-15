import React from 'react';
import HomeScreen from './homeScreen/HomeScreen';
import BlogScreen from './blogScreen/BlogScreen';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProducDetailScreen from './productDetailScreen/ProductDetailScreen';
import {Provider} from 'react-redux';
import {store} from './store/store';
import CartScreen from './cartScreen/CartScreen';
import ExploreScreen from './exploreScreen/ExploreScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Blog" component={BlogScreen} />
          <Stack.Screen name="ProductList" component={ProducDetailScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Explore" component={ExploreScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
