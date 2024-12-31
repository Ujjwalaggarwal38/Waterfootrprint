import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { searchCropByName } from './apiutility';

const Calculator = () => {
  const { t } = useTranslation();
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState({
    blue: '',
    green: '',
    grey: '',
    totalWaterFootprint: '',
    location: '',
    scarcity: '',
  });

  const handleCalculate = async () => {
    // Validate product name and quantity
    if (!productName || !quantity) {
      Alert.alert(t('errorInvalidInput'));
      return;
    }
  
    if (isNaN(quantity) || parseFloat(quantity) <= 0) {
      Alert.alert(t('errorInvalidQuantity'));
      return;
    }
  
    try {
      // Fetch data based on product name
      const data = await searchCropByName(productName);
  
      // Ensure data is valid
      if (!data) {
        Alert.alert(t('errorNoDataFound'));
        return;
      }
  
      // Check if product data is available
      console.log("API Data:", data);
  
      // Ensure data fields are numbers
      const quantityInTons = parseFloat(quantity) / 1000; // Convert kg to tons
      const blueWF = parseFloat(data["Blue WF (m³/ton)"]);
      const greenWF = parseFloat(data["Green WF (m³/ton)"]);
      const greyWF = parseFloat(data["Grey WF (m³/ton)"]);
      const totalWF = parseFloat(data["Total WF (m³/ton)"]);
  
      // Handle invalid data (NaN values)
      if (isNaN(blueWF) || isNaN(greenWF) || isNaN(greyWF) || isNaN(totalWF)) {
        Alert.alert(t('errorInvalidData'));
        return;
      }
  
      // Update result with calculated values
      setResult({
        blue: (blueWF * quantityInTons).toFixed(2),
        green: (greenWF * quantityInTons).toFixed(2),
        grey: (greyWF * quantityInTons).toFixed(2),
        totalWaterFootprint: (totalWF * quantityInTons).toFixed(2),
        location: data["Major Growing Locations"] || 'Location not available',
        scarcity: data["Water Scarcity Status"] || 'Scarcity status not available',
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      Alert.alert(t('errorFetchingData'));
    }
  };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{t('enterProductName')}</Text>
          <TextInput
            style={styles.input}
            placeholder={t('enterProductName')}
            value={productName}
            onChangeText={setProductName}
          />

          <Text style={styles.label}>{t('addQuantity')}</Text>
          <View style={styles.quantityContainer}>
            <TextInput
              style={[styles.input, styles.quantityInput]}
              placeholder={t('quantityPlaceholder')}
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />
            <Text style={styles.unit}>{t('kg')}</Text>
          </View>

          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>{t('calculate')}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>{t('addProduct')}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>{t('resultTitle')}</Text>
          <Text style={styles.resultText}>{`${t('blueWaterFootprint')}: ${result.blue || 'N/A'} m³`}</Text>
          <Text style={styles.resultText}>{`${t('greenWaterFootprint')}: ${result.green || 'N/A'} m³`}</Text>
          <Text style={styles.resultText}>{`${t('greyWaterFootprint')}: ${result.grey || 'N/A'} m³`}</Text>
          <Text style={styles.resultText}>{`${t('totalWaterFootprint')}: ${result.totalWaterFootprint || 'N/A'} m³`}</Text>
          <Text style={styles.resultText}>{`${t('majorGrowingRegions')}: ${result.location || 'N/A'}`}</Text>
          <Text style={styles.resultText}>{`${t('scarcityStatus')}: ${result.scarcity || 'N/A'}`}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2238',
    padding: 20,
  },
  inputContainer: {
    marginTop: 40,
    backgroundColor: '#3e4959',
    borderRadius: 10,
    padding: 15,
  },
  label: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    color: 'black',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityInput: {
    flex: 1,
    marginRight: 10,
    borderColor: 'purple',
    borderWidth: 2,
  },
  unit: {
    color: 'white',
    fontSize: 20,
  },
  calculateButton: {
    backgroundColor: '#01A0DC',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  calculateButtonText: {
    fontSize: 20,
    color: '#fff',
  },
  resultContainer: {
    backgroundColor: '#3e4959',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  resultTitle: {
    color: 'white',
    fontSize: 24,
    marginBottom: 10,
  },
  resultText: {
    color: 'white',
    fontSize: 20,
    marginVertical: 2,
  },
});

export default Calculator;
