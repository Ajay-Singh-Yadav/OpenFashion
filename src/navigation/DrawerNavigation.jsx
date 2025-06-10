import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {AuthGate} from '../services/AuthGate';
import CustomDrawerContent from '../Components/DrawerComponents/CustomDrawerContent';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="HomeStack"
        component={AuthGate}
        options={{drawerLabel: () => null, drawerIcon: () => null}}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
