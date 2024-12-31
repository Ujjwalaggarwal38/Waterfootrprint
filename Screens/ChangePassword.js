import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, TouchableWithoutFeedback,Keyboard } from 'react-native';
import { useTranslation } from 'react-i18next';
import { resetPassword } from './apiutility';

const ChangePassword = ({navigation,route}) => {
  const { t } = useTranslation();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../images/chanepass.png')} 
          style={styles.icon}
        />
      </View>
      <View style={styles.bottomSection}>
        <Text style={styles.title}>{t('changePasswordTitle')}</Text>
        <View style={styles.inputContainer}>
              <Text style={styles.label}>{t('oldPassword')}</Text>
              <TextInput
                style={styles.input1}
                placeholder={t('enterOldPassword')}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t('newPassword')}</Text>
              <TextInput
                style={styles.input1}
                placeholder={t('enterNewPassword')}
                keyboardType="email-address"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t('confirmPassword')}</Text>
              <TextInput
                style={styles.input1}
                placeholder={t('enterConfirmPassword')}
              />
            </View>
        
        <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Otp')}>
          <Text style={styles.submitText}>{t('submit')}</Text>
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
  input1: {
    height: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 16,
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 3,
  },
  submitButton: {
    height: 50,
    backgroundColor: '#007BFF',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    marginTop:20
  },
  submitText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});

export default ChangePassword;
