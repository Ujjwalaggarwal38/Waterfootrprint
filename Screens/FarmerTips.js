import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';

const FarmersTips = ({ navigation }) => {
  const { t } = useTranslation();

  // Example tips data
  const tipsData = {
    smartFarming: [
      'Adopt precision farming techniques for higher yields with less input.',
      'Use drones for crop monitoring and pesticide spraying.',
      'Implement IoT devices for real-time monitoring of soil and crop health.',
    ],
    smartIrrigation: [
      'Install drip irrigation to conserve water and improve efficiency.',
      'Use soil moisture sensors to optimize watering schedules.',
      'Implement rainwater harvesting systems to reduce dependency on external water sources.',
    ],
    aquaponics: [
      'Integrate fish farming with plant cultivation in aquaponic systems.',
      'Ensure proper water filtration and nutrient balance between plants and fish.',
      'Monitor water temperature and pH levels to optimize plant and fish health.',
    ],
    hydroponics: [
      'Grow crops without soil using a nutrient-rich water solution.',
      'Monitor pH levels and nutrient concentration for healthy plant growth.',
      'Use vertical farming techniques to maximize space in hydroponic systems.',
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* Welcome Message */}

      {/* Smart Farming Tips */}
      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Smart Farming Tips</Text>
        {tipsData.smartFarming.map((tip, index) => (
          <Text key={index} style={styles.tipItem}>• {tip}</Text>
        ))}
      </View>

      {/* Smart Irrigation Methods */}
      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Smart Irrigation Methods</Text>
        {tipsData.smartIrrigation.map((tip, index) => (
          <Text key={index} style={styles.tipItem}>• {tip}</Text>
        ))}
      </View>

      {/* Aquaponics Tips */}
      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Aquaponics</Text>
        {tipsData.aquaponics.map((tip, index) => (
          <Text key={index} style={styles.tipItem}>• {tip}</Text>
        ))}
      </View>

      {/* Hydroponics Tips */}
      <View style={styles.tipsContainer}>
        <Text style={styles.sectionTitle}>Hydroponics</Text>
        {tipsData.hydroponics.map((tip, index) => (
          <Text key={index} style={styles.tipItem}>• {tip}</Text>
        ))}
      </View>

      {/* Access Calculator Button */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Farmerscal')}
      >
        <Text style={styles.buttonText}>Access Calculator</Text>
      </TouchableOpacity> */}

      {/* Community Section */}
      {/* <TouchableOpacity
        style={styles.communityContainer}
        onPress={() => navigation.navigate('Commute')}
      >
        <Text style={styles.sectionTitle}>Farmer To Farmer</Text>
        <Text style={styles.communityText}>Connect, share, and grow with fellow farmers.</Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  welcomeContainer: {
    marginTop: 10,
    backgroundColor: '#E0F7FA',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '700',
    color: '#006D77',
    marginBottom: 5,
  },
  subWelcomeText: {
    fontSize: 16,
    color: '#555',
  },
  tipsContainer: {
    marginTop:20,
    backgroundColor: '#E8F5E9',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  tipItem: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#006D77',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  communityContainer: {
    backgroundColor: '#E0F7FA',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  communityText: {
    fontSize: 16,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default FarmersTips;
