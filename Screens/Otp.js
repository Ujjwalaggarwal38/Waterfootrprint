import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useTranslation } from 'react-i18next'; 

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { verifyOtp } from './apiutility';
// import { verifyOtp } from './mainapi';

const OTPVerificationScreen = ({route, navigation}) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { email } = route.params || {}; 
  const [isResending, setIsResending] = useState(false); // To handle resend OTP loading state


    // Handle OTP Submission
    const handleOtpSubmit = async () => {
      if (otp.length !== 6) {
        Alert.alert(t('otpError'));
        return;
      }
  
      setIsLoading(true);
      try {
        console.log("Submitting OTP", { email, otp });
        const data = await verifyOtp(email, otp);  // API call to verify OTP
        Alert.alert(t('otpSuccessMessage'));
        navigation.reset({
          index: 0,  // Set index to 0 to reset the stack to just the 'Dash' screen
          routes: [{ name: 'Dash' }],  // 'Dash' is the screen the user should navigate to
        });
  
      } catch (error) {
        Alert.alert(t('otpErrorMessage'));
        console.error('OTP Verification Error:', error);
      } finally {
        setIsLoading(false);
      }
    };
  
     // Handle OTP Input Change

    const handleChange = (text) => {
      if (/^\d*$/.test(text) && text.length <= 6) {  // Only allow numeric input and limit length to 6
        setOtp(text);
      }
    };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Top Section: 30% */}
        <View style={styles.topSection}>
          <Image
            source={require('../images/otpverify.png')} // Replace with the OTP icon URL or local image
            style={styles.icon}
          />
        </View>

        {/* Bottom Section: 70% */}
        <View style={styles.bottomSection}>
          <Text style={styles.title}>{t('otpVerificationTitle')}</Text>
          <Text style={styles.subtitle}>
          {t('otpVerificationSubtitle', { email })}
          </Text>

          {/* OTP Input Field */}
          <TextInput
            style={styles.otpInput}
            value={otp}
            onChangeText={handleChange}
            keyboardType="numeric"
            maxLength={6}
            autoFocus
            placeholder={t('otpPlaceholder')}
            placeholderTextColor="#aaa"
          />

          {/* Resend OTP Section */}
          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>{t('otpResendPrompt')} </Text>
            <TouchableOpacity>
              <Text style={styles.resendLink}>{t('otpResendLink')}</Text>
            </TouchableOpacity>
          </View>

          {/* Verify OTP Button */}
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleOtpSubmit}
            disabled={isLoading}
          >
            <Text style={styles.verifyText}>
            {isLoading ? t('verifyingOtp') : t('verifyOtp')}
                </Text>
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
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
  },
  icon: {
    width: 150,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'left',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'left',
    marginBottom: 20,
  },
  otpInput: {
    height: 50,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    borderRadius: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
    textAlign:'center'
  },
  resendContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  resendText: {
    fontSize: 14,
    color: '#555',
  },
  resendLink: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
  verifyButton: {
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verifyText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OTPVerificationScreen;
