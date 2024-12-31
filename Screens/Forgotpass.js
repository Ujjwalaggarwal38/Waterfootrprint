import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback,Keyboard } from 'react-native';
// import { forgotPassword } from './mainapi';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import { forgotPassword } from './apiutility';

const ForgotPassword = ({navigation}) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleForgotPassword = async () => {
    // Validate the email format
    if (!email || !email.includes('@')) {
      Alert.alert(t('validationError'), t('validEmailError'));
      return;
    }

    setIsLoading(true);
    try {
      // Call the forgotPassword API with the email
      const response = await forgotPassword(email);

      // Show success message and navigate to OTP screen
      Alert.alert(t('success'), response.message || t('otpSent'));
      navigation.navigate('Otp', { email }); // Navigate to OTP screen and pass the email

    } catch (error) {
      // Handle any errors (API error, network error, etc.)
      Alert.alert(t('error'), error.message || t('errorOccurred'));
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../images/otpimage.png')} 
          style={styles.icon}
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>{t('forgotPassword')}</Text>
        <TextInput
          style={styles.input}
          placeholder={t('enterYourEmail')}  
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleForgotPassword} disabled={isLoading}>
          <Text style={styles.submitText}> {isLoading ?  t('sendingOtp') : t('submit')}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}> 
          <Text style={styles.backToLogin}>{t('backToLogin')}</Text>
        </TouchableOpacity>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  topSection: {
    flex: 4, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex:6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 30,
  },
  icon: {
    width: 130,
    height: 130,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  submitButton: {
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backToLogin: {
    color: '#000',
    textAlign: 'center',
    fontSize: 14,
  },
});

export default ForgotPassword;
