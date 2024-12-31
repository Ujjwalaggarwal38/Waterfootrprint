import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, TouchableWithoutFeedback, Keyboard, Dimensions } from 'react-native';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window'); // Get screen width

const EducationalScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* Search Bar */}
        <TextInput style={styles.searchBar} placeholder={t('search')} />

        {/* Content Cards */}
        <View style={styles.cardsContainer}>
          {/* Books Card */}
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Book')}>
              <Image
                source={require('../images/book.png')} // Replace with actual book icon path
                style={styles.icon}
              />
            </TouchableOpacity>
            <Text style={styles.cardText}>{t('books')}</Text>
          </View>

          {/* Videos Card */}
          <View style={styles.card}>
            <Text style={styles.cardText1}>{t('videos')}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Video')}>
              <Image
                source={require('../images/video.png')} // Replace with actual video icon path
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>

          {/* Case Studies Card */}
          <View style={styles.card}>
            <TouchableOpacity onPress={() => navigation.navigate('Case')}>
              <Image
                source={require('../images/casestudy.png')} // Replace with actual case study icon path
                style={styles.icon}
              />
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.cardText}>{t('case')}</Text>
              <Text style={styles.cardText}>{t('study')}</Text>
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
    padding: width * 0.05, // Use percentage for padding to make it responsive
  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    fontSize: width * 0.04, // Responsive font size for search bar
  },
  cardsContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  card: {
    flexDirection: 'row', // Aligns items horizontally
    alignItems: 'center', // Centers items vertically
    borderRadius: 10,
    padding: width * 0.04, // Responsive padding
    marginBottom: 15,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
  },
  icon: {
    marginRight: width * 0.1, // Responsive margin to keep spacing intact
  },
  cardText: {
    fontSize: width * 0.05, // Responsive font size for text
    fontWeight: 'bold',
    color: '#000',
  },
  cardText1: {
    fontSize: width * 0.05, // Responsive font size for text
    fontWeight: 'bold',
    color: '#000',
    marginRight: width * 0.1, // Responsive margin
  },
  textContainer: {
    flexDirection: 'column', 
  },
});

export default EducationalScreen;
