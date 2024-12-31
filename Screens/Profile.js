import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, FlatList, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';
import { logoutUser } from './apiutility';

// Get screen dimensions
const { width, height } = Dimensions.get('window');

const Profile = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [languageModalVisible, setLanguageModalVisible] = useState(false);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode); // This will change the language of the whole app
    setLanguageModalVisible(false); // Close the modal after selecting the language
  };

  const languages = [
    { label: 'English', code: 'en' },
    { label: 'हिंदी', code: 'hi' },
    { label: 'ಕನ್ನಡ', code: 'kn' },
  ];

  // Logout function that triggers the logout API
  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      if (result) {
        // Redirect to the login screen after successful logout
        navigation.navigate('User'); // Make sure you have a 'Login' screen in your navigator
      }
    } catch (error) {
      console.error('Logout Error:', error);
      // Optionally, show an alert or error message to the user
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <View style={styles.profileHeader}>
              {/* Avatar */}
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>U</Text>
              </View>

              {/* Name and Edit Profile Button */}
              <View style={styles.profileInfo}>
                <Text style={styles.name}>Shaarvy</Text>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                  <Text style={styles.editProfile}>{t('editProfile')} ✎</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Stats */}
            <View style={styles.stats}>
              <View style={styles.statBox}>
                <Text style={styles.statTitle}>{t('totalWaterFootprint')}</Text>
                <Text style={styles.statValue}>1,400 gal</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statTitle}>{t('dailyAverage')}</Text>
                <Text style={styles.statValue}>35 gal</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.settingsSection}>
          <Text style={styles.settingsTitle}>{t('settings')}</Text>

          {/* Settings Options */}
          <View style={styles.settingsSection2}>
            <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('ChangePass')}>
              <Image source={require('../images/key.png')} style={styles.optionImage} />
              <Text style={styles.optionText}>{t('changePassword')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Image source={require('../images/folder.png')} style={styles.optionImage} />
              <Text style={styles.optionText}>{t('dataPrivacy')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={() => setLanguageModalVisible(true)}>
              <Image source={require('../images/globe.png')} style={styles.optionImage} />
              <Text style={styles.optionText}>{t('region')}</Text>
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
                        onPress={() => changeLanguage(item.code)}
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

            <TouchableOpacity style={styles.option}>
              <Image source={require('../images/building.png')} style={styles.optionImage} />
              <Text style={styles.optionText}>{t('helpCenter')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option}>
              <Image source={require('../images/telephone.png')} style={styles.optionImage} />
              <Text style={styles.optionText}>{t('contactUs')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.option} onPress={handleLogout}>
              <Text style={[styles.optionText, styles.logoutText]}>{t('logOut')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.option} onPress={handleLogout}>
              <Text style={[styles.optionText, styles.logoutText]}>{t('delete')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Footer */}
        <View style={styles.footerContainer}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Dash')}>
            <Image source={require('../images/home.png')} style={styles.iconImage} />
            <Text style={[styles.iconText, styles.middleIconText]}>{t('home')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer}>
            <Image source={require('../images/community.png')} style={styles.iconImage}  onPress={() => navigation.navigate('Commute')} />
            <Text style={[styles.iconText, styles.middleIconText]}>{t('community')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.middleIconContainer}>
            <Image source={require('../images/camera.png')} style={[styles.iconImage, styles.middleIconImage]} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Reward')}>
            <Image source={require('../images/rewards.png')} style={styles.iconImage} />
            <Text style={[styles.iconText, styles.middleIconText]}>{t('rewards')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../images/profile.png')} style={styles.iconImage} />
            <Text style={[styles.iconText, styles.middleIconText]}>{t('profile')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// Responsive Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E293B',
  },
  profileSection: {
    flex: 0.4,
    backgroundColor: '#00C4FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: width * 0.05, // Proportional padding
  },
  profileCard: {
    flex: 1,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
  },
  profileInfo: {
    alignItems: 'center',
    marginLeft: 10,
  },
  avatar: {
    width: width * 0.25, // Dynamic width based on screen size
    height: width * 0.25, // Dynamic height based on screen size
    borderRadius: width * 0.125, // Dynamic border radius
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: width * 0.05, // Dynamic margin
  },
  avatarText: {
    fontSize: width * 0.1, // Dynamic font size based on screen width
    fontWeight: 'bold',
    color: '#00C4FF',
  },
  name: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  editProfile: {
    fontSize: width * 0.04,
    color: '#F0F0F0',
    marginTop: 4,
    textDecorationLine: 'underline',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: width * 0.05,
    margin: width * 0.03,
  },
  statTitle: {
    fontSize: width * 0.05,
    color: '#101828',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  statValue: {
    fontSize: width * 0.05,
    color: '#00C4FF',
    fontWeight: 'bold',
    marginTop: 4,
    textAlign: 'center',
  },
  settingsSection: {
    flex: 0.7,
    backgroundColor: '#1E293B',
    padding: width * 0.05,
  },
  settingsSection2: {
    marginTop: 4,
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    padding: width * 0.05,
  },
  settingsTitle: {
    fontSize: width * 0.06,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.01,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  optionImage: {
    width: width * 0.06,
    height: width * 0.06,
    marginRight: width * 0.04,
  },
  optionText: {
    fontSize: width * 0.05,
    color: '#000',
  },
  logoutText: {
    color: '#FF6B6B',
    fontWeight: 'bold',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: height * 0.08,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: width * 0.05,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: -20,
    backgroundColor: '#fff',
    borderRadius: width * 0.15,
    padding: width * 0.02,
  },
  iconImage: {
    width: width * 0.08,
    height: width * 0.08,
  },
  iconText: {
    fontSize: width * 0.03,
    color: '#000',
  },
  middleIconImage: {
    width: width * 0.18,
    height: width * 0.18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Transparent background
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  languageOption: {
    padding: width * 0.04,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    alignItems: 'center',
  },
  languageOptionText: {
    fontSize: width * 0.04,
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 10,
  },
  modalCloseText: {
    color: '#fff',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export default Profile;
