import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ProductListGridScreen from './src/Screens/ProductListGridScreen';
import ProductDetailsScreen from './src/Screens/ProductDetailsScreen';
import ProductCartScreen from './src/Screens/ProductCartScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ListGrid" component={ProductListGridScreen} />
          <Stack.Screen name="ProductScreen" component={ProductDetailsScreen} />
          <Stack.Screen name="CartScreen" component={ProductCartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
