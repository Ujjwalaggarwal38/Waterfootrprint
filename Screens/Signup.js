import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { registerUser } from './apiutility';
import { useTranslation } from 'react-i18next';



export default function SignUpScreen({ navigation }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    console.log('Registering user...');
    try {
      console.log('Payload:', { name, email, password });
      const response = await registerUser(name, email, password);
      console.log('Registration success:', response);
      // Alert.alert('Success', response.message);
      navigation.navigate('Otp', { email });
    } catch (error) {
      console.error('Registration error:', error.message);
      Alert.alert('Error', error.message || 'Registration failed');
    } finally {
      setLoading(false);
      console.log('Registration process finished');
    }
  };
  
  
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <ImageBackground
            source={require('../images/Signup.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.heading}>{t('signUp')}</Text>
          <View style={styles.overlay}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t('name')}</Text>
              <TextInput
                style={styles.input}
                placeholder={t('enterYourName')}
                value={name}
                onChangeText={setName}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t('email')}</Text>
              <TextInput
                style={styles.input}
                placeholder={t('enterYourEmail')} 
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>{t('password')}</Text>
              <TextInput
                style={styles.input}
                placeholder={t('enterYourPassword')}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleRegister}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ? t('creatingAccount') : t('createAccount')} 
              </Text>
            </TouchableOpacity>

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>{t('alreadyHaveAnAccount')}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signInLink}>{t('signInLink')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#313a41',
  },
  topSection: {
    flex: 3,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  bottomSection: {
    flex: 6,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  overlay: {
    marginBottom: 60,
    width: '100%',
    alignItems: 'center',
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
  input: {
    height: 50,
    borderBottomColor: '#000000',
    borderBottomWidth: 1,
    fontSize: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#4da6ff',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  signInText: {
    fontSize: 20,
    color: '#333',
  },
  signInLink: {
    color: '#4da6ff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
