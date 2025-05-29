import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

const DetailsComp = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    navigation.navigate('Home');
  };

  const onError = errors => {
    const firstErrorKey = Object.keys(errors)[0];
    const message = errors[firstErrorKey]?.message || 'Validation error';
    ToastAndroid.showWithGravity(
      message,
      ToastAndroid.SHORT,
      ToastAndroid.TOP,
      0,
      100,
    );
  };

  return (
    <View style={{marginTop: 40, alignItems: 'center'}}>
      <Text style={styles.text}>LOGIN</Text>
      <Image
        source={require('../../../assests/images/designNewArrival.png')}
        style={{width: 110, height: 18, marginTop: 10}}
      />
      <Controller
        control={control}
        name="username"
        rules={{
          required: 'Username is required',
        }}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <TextInput
            placeholder="Username"
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            style={[styles.textInput, {marginTop: 50}]}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{
          required: 'Password is required',
        }}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <TextInput
            placeholder="Password"
            onChangeText={onChange}
            secureTextEntry
            onBlur={onBlur}
            value={value}
            style={[styles.textInput, {marginTop: 40}]}
          />
        )}
      />

      <Text
        style={{
          fontSize: 17,
          opacity: 0.6,
          fontFamily: 'TenorSans-Regular',
          marginTop: 40,
        }}>
        OR
      </Text>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 15,
            opacity: 0.6,
            fontFamily: 'TenorSans-Regular',
          }}>
          Didn't have account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text
            style={{
              marginLeft: 5,
              fontSize: 16,
              fontFamily: 'TenorSans-Regular',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleSubmit(onSubmit, onError)}
        style={{
          width: '100%',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          marginTop: 318,
        }}>
        <Text style={[styles.text, {color: 'white'}]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailsComp;

const styles = StyleSheet.create({
  text: {
    fontSize: 19,
    fontFamily: 'TenorSans-Regular',
    letterSpacing: 2,
  },
  textInput: {
    fontSize: 17,
    fontFamily: 'TenorSans-Regular',
    borderBottomWidth: 1,
    width: '80%',
    opacity: 0.7,
  },
});
