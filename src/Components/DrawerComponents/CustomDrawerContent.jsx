import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import auth from '@react-native-firebase/auth';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {DrawerContentScrollView} from '@react-navigation/drawer';

const CustomDrawerContent = ({navigation}) => {
  const user = auth().currentUser;

  const handleLogOut = async () => {
    await auth().signOut();
    navigation.replace('Login');
  };

  return (
    <DrawerContentScrollView contentContainerStyle={{flex: 1}}>
      <View style={styles.header}>
        <EvilIcons name="user" size={50} color="black" />
        <Text style={styles.emailText}>{user?.email}</Text>
      </View>
      <TouchableOpacity style={styles.logOut} onPress={handleLogOut}>
        <AntDesign name="logout" size={30} color="black" />
        <Text style={styles.logoutText}>LogOut</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  emailText: {
    fontSize: 18,
    fontFamily: 'TenorSans-Regular',
    marginLeft: 5,
  },
  logOut: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 10,
  },
  logoutIcon: {},
  logoutText: {
    marginLeft: 10,
    fontFamily: 'TenorSans-Regular',
  },
});
