import React from 'react';
import HomeScreen from './homeScreen/HomeScreen';
import BlogScreen from './blogScreen/BlogScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import ProducDetailScreen from './productDetailScreen/ProductDetailScreen';
import {Provider} from 'react-redux';
import {store} from './store/store';
import CartScreen from './cartScreen/CartScreen';
import ExploreScreen from './exploreScreen/ExploreScreen';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProductDrawer from './exploreScreen/DrawerNav/ProductDrawer';
import DeliveryScreen from './deliveryScreen/DeliveryScreen';
import AddAddressScreen from './deliveryScreen/AddAddressScreen';
import SplashScreen from './splashScreen/SplashScreen';
import LoginScreen from './authScreen/loginScreen/LoginScreen';
import RegisterScreen from './authScreen/registerScreen/RegisterScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Splash" component={SplashScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Blog" component={BlogScreen} />
    <Stack.Screen name="ProductList" component={ProducDetailScreen} />
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Explore" component={ExploreScreen} />
    <Stack.Screen name="Delivery" component={DeliveryScreen} />

    <Stack.Screen name="AddAddress" component={AddAddressScreen} />
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
