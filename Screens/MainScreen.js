import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import './transalation/translation';

const images = [
  require('../images/firstsplash.png'),
  require('../images/secondsplash.png'),
  require('../images/thirdsplash.png')
];

const languages = [
  { label: 'English', code: 'en' },
  { label: 'हिंदी', code: 'hi' },
  { label: 'ಹಿಂದಿ', code: 'kn' },
];

const MainScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const selectLanguage = (code) => {
    i18n.changeLanguage(code); // Change the language
    setLanguageModalVisible(false);
  };


  return (
    <View style={styles.container}>
      {/* Top Section */}
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

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={styles.text}>{t('welcome')}</Text>
        <Text style={styles.text1}>{t('appName')}</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>{t('getStarted')}</Text>
        </TouchableOpacity>
        <View style={styles.signInContainer}>
          <Text style={styles.signInText}>{t('signInText')} </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <Text style={styles.signInLink}>{t('signInLink')}</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Language Selection Button */}
      <TouchableOpacity
        style={styles.languageButton}
        onPress={() => setLanguageModalVisible(true)}
      >
        <Text style={styles.languageText}>
          {t('selectLanguage')}: {languages.find((lang) => lang.code === i18n.language)?.label || 'English'}
        </Text>
      </TouchableOpacity>

      {/* Language Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{t('selectLanguage')}</Text>
            <FlatList
              data={languages}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.languageOption}
                  onPress={() => selectLanguage(item.code)}
                >
                  <Text style={styles.languageOptionText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setLanguageModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>{t('close')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#172536',
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
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#4da6ff',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    width: '100%',
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 4,
    padding: 20,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    backgroundColor: '#fff',
  },
  text: {
    textAlign: 'left',
    fontSize: 40,
    marginStart: 40,
    fontWeight: 'bold',
  },
  text1: {
    fontSize: 40,
    marginStart: 40,
    fontWeight: 'bold',
  },
  signInContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
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
  languageButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 10,
  },
  languageText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  languageOptionText: {
    fontSize: 18,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 10,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MainScreen;
