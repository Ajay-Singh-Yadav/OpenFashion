import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthGate} from '../services/AuthGate';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeStack" component={AuthGate} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
