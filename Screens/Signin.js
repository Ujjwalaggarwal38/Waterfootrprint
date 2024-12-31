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
import { login } from './mainapi';
import { loginUser } from './apiutility';
import { useTranslation } from 'react-i18next';

const Signin = ({ navigation }) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert(t('validationError'), t('emptyFieldsError'));
      return;
    }

    setLoading(true);

    try {
      // API call to authenticate the user with backend
      const response = await loginUser(email, password);

      // On success, store the token and show success message
      Alert.alert(t('login'), t('loginSuccess'));

      // Store token to AsyncStorage for future use (e.g., to persist user session)
      // await AsyncStorage.setItem('token', response.token);

      // Navigate to the Dashboard screen (reset navigation to prevent back navigation)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Dash' }],
      });
    } catch (error) {
      Alert.alert(t('login'), error.message || `${t('login')} ${t('failed')}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <ImageBackground
            source={require('../images/signin.png')}
            style={styles.backgroundImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.bottomSection}>
          <Text style={styles.heading}>{t('signInText')}</Text>
          <View style={styles.overlay}>
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
               <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={styles.forgot}>{t('forgotPassword')}</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleLogin}
              disabled={loading}
            >
              <Text style={styles.buttonText}>
                {loading ?`${t('login')}...` : t('login')}
              </Text>
            </TouchableOpacity>

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>{t('newToAquaMetrics')}</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signInLink}>{t('signUp')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Dash')}>
                <Text style={styles.signInLink}>{t('guestLogin')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40bcd0',
  },
  topSection: {
    flex: 3,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  bottomSection: {
    flex: 7,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  heading: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 70,
  },
  overlay: {
    marginBottom: 70,
    width: '100%',
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 5,
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
  forgot: {
    textAlign: 'right',
  },
});

export default Signin;
