import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import InputComp from '../../Components/LoginSignComp/InputComp';
import ButtonComp from '../../Components/LoginSignComp/ButtonComp';
import {useNavigation} from '@react-navigation/native';

const LogInScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Text style={styles.LoginText}>LogIn</Text>
      <Image
        source={require('../../assets/images/designNewArrival.png')}
        style={styles.lineImage}
      />
      <InputComp icon="user" placeholder="User Name" />

      <InputComp icon="lock" placeholder="Password" />

      <TouchableOpacity
        style={{
          marginLeft: 280,
          marginBottom: 50,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'TenorSans-Regular',
          }}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <ButtonComp title={'LogIn'} />

      <TouchableOpacity
        // onPress={() => navigation.navigate('SignUp')}
        style={{
          marginTop: 70,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'TenorSans-Regular',
          }}>
          Don't have an account?
        </Text>
      </TouchableOpacity>

      <View style={styles.IconsLoginContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/facebook.png')}
            style={styles.LoginIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/Google.png')}
            style={styles.LoginIcons}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/Twitter.png')}
            style={styles.LoginIcons}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  LoginText: {
    fontSize: 40,
    fontFamily: 'TenorSans-Regular',
    marginTop: 160,
  },
  lineImage: {
    marginTop: 10,
    width: 200,
    height: 20,
    marginBottom: 70,
  },
  IconsLoginContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: 300,
    justifyContent: 'space-around',
  },
  LoginIcons: {
    width: 50,
    height: 50,
  },
});
