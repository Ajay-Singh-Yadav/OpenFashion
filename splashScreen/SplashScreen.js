import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, View} from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../assests/images/Logo.png')}
        style={{width: 190, height: 77}}
      />
    </View>
  );
};

export default SplashScreen;
