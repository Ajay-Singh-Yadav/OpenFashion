import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import {Formik} from 'formik';
import * as Yup from 'yup';

import {SafeAreaView} from 'react-native-safe-area-context';

import InputComp from '../../Components/LoginSignComp/InputComp';
import ButtonComp from '../../Components/LoginSignComp/ButtonComp';

const SignUpScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="dark-content"
        translucent
      />
      <Text style={styles.LoginText}>SignUp</Text>

      <Image
        source={require('../../assets/images/designNewArrival.png')}
        style={styles.lineImage}
      />
      <Text style={styles.createText}>Create an account</Text>
      <InputComp icon="user" placeholder="User Name" />

      <InputComp icon="mail" placeholder="Email" />

      <InputComp icon="lock" placeholder="Password" />

      <InputComp icon="mobile" placeholder="Mobile" />

      <ButtonComp title={'SinUp'} />

      <TouchableOpacity
        style={{
          marginTop: 70,
        }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'TenorSans-Regular',
          }}>
          Already have an account?
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

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  LoginText: {
    fontSize: 40,
    fontFamily: 'TenorSans-Regular',
    marginTop: 60,
  },
  lineImage: {
    marginTop: 10,
    width: 200,
    height: 20,
    marginBottom: 20,
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
  createText: {
    fontFamily: 'TenorSans-Regular',
    fontSize: 18,
    marginBottom: 20,
  },
});
