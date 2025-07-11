// import {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  return (
    <View style={styles.ParentContainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      {/* BackGround Image */}
      <ImageBackground
        source={require('../assets/images/girl.png')}
        style={styles.BgImage}>
        {/* Logo and Text  */}
        <SafeAreaView style={styles.safeAreaview}>
          <View style={styles.CoffeeSoGoodConatiner}>
            <Text style={[styles.luxuryText, {marginLeft: 30}]}>LUXURY</Text>
            <Text style={[styles.luxuryText, {marginLeft: 50}]}>FASHION</Text>
            <Text style={[styles.luxuryText, {marginLeft: 50}]}>
              & ACCESSORIES{' '}
            </Text>
          </View>
          <LottieView
            source={require('../assets/animation/Loader.json')}
            autoPlay
            loop
            style={{width: 150, height: 150, alignSelf: 'center'}}
          />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  ParentContainer: {
    flex: 1,
  },
  BgImage: {
    flex: 1,
  },
  safeAreaview: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },

  CoffeeSoGoodConatiner: {
    paddingVertical: 20,
    marginTop: 10,
  },
  luxuryText: {
    fontFamily: 'TenorSans-Regular',
    color: 'black',
    fontWeight: '500',
    fontSize: 30,
  },
});
