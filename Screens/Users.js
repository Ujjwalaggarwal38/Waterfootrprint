import React from 'react';
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image,Modal,FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import './transalation/translation';

const languages = [
  { label: 'English', code: 'en' },
  { label: 'हिंदी', code: 'hi' },
  { label: 'ಹಿಂದಿ', code: 'kn' },
];



const Users = ({ navigation }) => {
  const { t,i18n} = useTranslation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const selectLanguage = (code) => {
    i18n.changeLanguage(code); // Change the language
    setLanguageModalVisible(false);
  };
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerRow1}>
        <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>AquaMetrics</Text>
      </View>

      {/* Main Button Section */}
      <View style={styles.buttonContainer}>
        <Text style={styles.welcomeText}>{t('welcome')} {t('appName')}</Text>
        
        {/* Farmers Button */}
        <TouchableOpacity
          style={[styles.button, styles.farmersButton]}
          onPress={() => navigation.navigate('SignupFarmer')}
        >
          <Text style={styles.buttonText}>{t('farmer')}</Text>
        </TouchableOpacity>

        {/* Consumers Button */}
        <TouchableOpacity
          style={[styles.button, styles.consumersButton]}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={styles.buttonText}>{t('consumer')}</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#B8F3FF',
    justifyContent: 'flex-start', // Center content vertically
    paddingHorizontal: 20,
  },
  headerRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 50,
    paddingTop: 20,
    justifyContent: 'flex-start', // Align logo and text to the left
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginRight: 10,
  },

  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#006D77',
    letterSpacing: 1,
  },
  welcomeText: {
    marginTop:200,
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 30,
    color: '#006D77',
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center', 
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    borderRadius: 8,
    width: '100%', 
    elevation: 3, 
  },
  farmersButton: {
    backgroundColor: '#00B8A9',
  },
  consumersButton: {
    backgroundColor: '#006D77',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  languageButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#028090',
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

export default Users;
