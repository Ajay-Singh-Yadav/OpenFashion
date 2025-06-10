import {
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import InputComp from '../../Components/LoginSignComp/InputComp';
import ButtonComp from '../../Components/LoginSignComp/ButtonComp';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {login} from '../../services/auth';
import LottieView from 'lottie-react-native';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .matches(/^[a-z0-9]+[0-9]*@gmail\.com$/, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must include upper, lower, number & special char',
    )
    .required('Password is required'),
});

const LogInScreen = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (email, password, navigation, resetForm) => {
    try {
      setLoading(true);
      const user = await login(email, password);
      resetForm();
    } catch (error) {
      Alert.alert('LogIn  Error', error.message);
    } finally {
      setLoading(false);
    }
  };

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

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, {resetForm}) => {
          handleLogin(values.email, values.password, navigation, resetForm);
        }}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <View style={styles.inputFormikContainer}>
              <InputComp
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                secureTextEntry={false}
                keyboardType="email-address"
              />

              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>

            <View style={styles.inputFormikContainer}>
              <InputComp
                icon="lock"
                placeholder="Password"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                secureTextEntry={!showPassword}
                onEyePress={() => setShowPassword(!showPassword)}
                showPassword={showPassword}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 20,
                width: 100,
              }}>
              {loading && (
                <LottieView
                  source={require('../../assets/animation/Loader.json')}
                  autoPlay
                  loop
                  style={{width: 100, height: 100}}
                />
              )}
            </View>

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

            <ButtonComp title="Log In" icon="login" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
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
    marginTop: 100,
  },
  lineImage: {
    marginTop: 10,
    width: 200,
    height: 20,
    marginBottom: 40,
  },
  LoginIcons: {
    width: 50,
    height: 50,
  },
  inputFormikContainer: {
    height: 90,
    marginBottom: 40,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 5,
  },
  IconsLoginContainer: {
    flexDirection: 'row',
    marginTop: 50,
    width: 300,
    justifyContent: 'space-around',
  },
});
