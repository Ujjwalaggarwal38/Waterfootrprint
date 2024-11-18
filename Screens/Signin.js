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
} from 'react-native';

const Signin = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Text style={styles.heading}>Sign In</Text>
          <View style={styles.overlay}>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
              <Text style={styles.forgot}>Forgot Password?</Text>
            </View>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>New to Aqua Metrics </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.signInLink}>Sign Up.</Text>
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
    backgroundColor:'#40bcd0'
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
    overflow:'hidden'
  },
  heading:{
    fontSize:34,
    fontWeight:'bold',
    marginBottom:70
  },
  overlay: {
    marginBottom:70,
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
  forgot:{
    textAlign:'right'
  }
});

export default Signin
