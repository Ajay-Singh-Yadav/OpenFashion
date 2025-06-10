import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

import {LogBox} from 'react-native';
import {AuthGate} from './src/services/AuthGate';
import DrawerNavigation from './src/navigation/DrawerNavigation';

const Stack = createStackNavigator();

const App = () => {
  LogBox.ignoreLogs(['This method is deprecated']);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
