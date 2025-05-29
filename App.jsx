import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {Provider} from 'react-redux';
import {store} from './store/store';

import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductDrawer from './exploreScreen/DrawerNav/ProductDrawer';

import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ProductListGridScreen from './src/Screens/ProductListGridScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ListGrid" component={ProductListGridScreen} />
  </Stack.Navigator>
);
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => <ProductDrawer {...props} />}
          screenOptions={{headerShown: false}}>
          <Drawer.Screen
            name="Main"
            component={MainStack}
            options={{
              drawerLabel: () => null,
              title: null,
              drawerItemStyle: {height: 0},
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
