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

import {Formik} from 'formik';
import * as Yup from 'yup';

import {SafeAreaView} from 'react-native-safe-area-context';

import InputComp from '../../Components/LoginSignComp/InputComp';
import ButtonComp from '../../Components/LoginSignComp/ButtonComp';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {SignUp} from '../../services/auth';

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string()
    .matches(/^[a-z0-9]+[0-9]*@gmail\.com$/, 'Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      'Password must include upper, lower, number & special char',
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm Password is required'),
});

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = async (email, password, resetForm, navigation) => {
    try {
      const userCredential = await SignUp(email, password);
      resetForm();
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Registration Error', error.message);
    }
  };

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

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, {resetForm}) => {
          handleSignUp(values.email, values.password, resetForm, navigation);
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
                icon="user"
                placeholder="Full Name"
                value={values.fullName}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
              />
              {touched.fullName && errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName}</Text>
              )}
            </View>

            <View style={styles.inputFormikContainer}>
              <InputComp
                icon="mail"
                placeholder="Email"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
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

            <View style={styles.inputFormikContainer}>
              <InputComp
                icon="lock"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                secureTextEntry={!showConfirmPassword}
                onEyePress={() => setShowConfirmPassword(!showConfirmPassword)}
                showPassword={showConfirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>

            <ButtonComp title="Sign Up" onPress={handleSubmit} />
          </>
        )}
      </Formik>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
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
    marginTop: 50,
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
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginBottom: 5,
  },
  inputFormikContainer: {
    height: 90,
    marginBottom: 20,
  },
});
