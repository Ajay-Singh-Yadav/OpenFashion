import {createStackNavigator} from '@react-navigation/stack';

import auth from '@react-native-firebase/auth';
import {useEffect, useState} from 'react';
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import ProductListGridScreen from '../Screens/ProductListGridScreen';
import ProductDetailsScreen from '../Screens/ProductDetailsScreen';
import ProductCartScreen from '../Screens/ProductCartScreen';
import SignUpScreen from '../Screens/LogInSignup/SignUpScreen';
import LogInScreen from '../Screens/LogInSignup/LogInScreen';

const Stack = createStackNavigator();

export const AuthGate = () => {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      setUser(user);
      if (initializing) setInitializing(false);
    });
    return unsubscribe;
  }, []);

  if (initializing) return <SplashScreen />;

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {user ? (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="ListGrid" component={ProductListGridScreen} />
          <Stack.Screen name="ProductScreen" component={ProductDetailsScreen} />
          <Stack.Screen name="CartScreen" component={ProductCartScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={LogInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
