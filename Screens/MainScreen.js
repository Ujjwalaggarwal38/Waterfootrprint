import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, ImageBackground, Image,TouchableOpacity } from 'react-native';

const images = [
  require('../images/firstsplash.png'),
  require('../images/secondsplash.png'),
  require('../images/thirdsplash.png')
];

const MainScreen = ({navigation}) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);  
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <ImageBackground
          source={images[currentImage]} 
          style={styles.imageBackground}
          resizeMode="stretch"
        >
          <Image
            source={require('../images/logo.png')}
            style={styles.logo}
          />
        </ImageBackground>
      </View>

      <View style={styles.bottomSection}>
        <Text style={styles.text}>Welcome to</Text>
        <Text style={styles.text1}>Aqua Metrics!</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.buttonText}>Get Started ➔</Text>
            </TouchableOpacity>
            <View style={styles.signInContainer}>
              <Text style={styles.signInText}>Already Have An Account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                <Text style={styles.signInLink}>Sign In.</Text>
              </TouchableOpacity>
            </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor:'#172536'
  },
  topSection: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    position: 'absolute',
    top: 10,
    left: 20,
    width: 30,
    height: 30,
    resizeMode:"contain"  
},
button: {
    backgroundColor: '#4da6ff',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    justifyContent:'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 3,
    padding: 20,
    borderTopLeftRadius:50,
    borderTopRightRadius:50,
    backgroundColor:'#fff'
  },
  text: {
    textAlign:'left',
    fontSize: 40,
    marginStart:40,
    fontWeight:'bold'
  },
  text1: {
    fontSize: 40,
    marginStart:40,
    fontWeight:'bold'
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent:'center'
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

export default MainScreen;
