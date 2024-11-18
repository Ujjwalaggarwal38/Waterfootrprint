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

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <Text style={styles.heading}>Sign Up</Text>
          <View style={styles.overlay}>
            
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your name"
                value={name}
                onChangeText={setName}
              />
            </View>
            
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
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dash')}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>

            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already Have An Account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signInLink}>Sign In.</Text>
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
    backgroundColor:'#313a41'
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
    overflow:'hidden'
  },
  heading:{
    fontSize:34,
    fontWeight:'bold',
    marginBottom:40
  },
  overlay: {
    marginBottom:60,
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
