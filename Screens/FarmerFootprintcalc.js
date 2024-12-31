import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const FarmerFootprintcalc = () => {
  const [cropName, setCropName] = useState('');
  const [farmSize, setFarmSize] = useState('');
  const [soilType, setSoilType] = useState('');
  const [region, setRegion] = useState('');
  const [irrigationMethod, setIrrigationMethod] = useState('');
  const [growthStage, setGrowthStage] = useState('');
  const [result, setResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [temper, setTemper] = useState('');

  const validateInputs = () => {
    const errors = [];

    if (!cropName.trim()) errors.push('Crop Name is required.');
    if (!farmSize.trim()) errors.push('Farm Size is required.');
    else if (isNaN(Number(farmSize)) || Number(farmSize) <= 0) errors.push('Farm Size must be a positive number.');

    if (!soilType.trim()) errors.push('Soil Type is required.');
    if (!region.trim()) errors.push('Region/State is required.');
    if (!irrigationMethod.trim()) errors.push('Irrigation Method is required.');
    if (!growthStage.trim()) errors.push('Current Growth Stage is required.');

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateInputs();
    if (errors.length > 0) {
      setErrorMessage(errors.join('\n'));
      setResult(null);
      return;
    }

    try {
      const response = await fetch('http://172.17.18.251:5000/api/crop-info', { // Updated endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          crop_name: cropName,
          soil_type: soilType,
          state: region,
          crop_stage: growthStage,
          rainfall_mm: temper, // Assuming temper is the rainfall in mm
          farm_size: parseFloat(farmSize),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to calculate irrigation. Please try again.');
      }

      const data = await response.json();
      setResult(data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      setResult(null);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Crop Name Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Crop Name</Text>
        <TextInput
          style={styles.input}
          value={cropName}
          onChangeText={setCropName}
          placeholder="Enter crop name"
        />
      </View>

      {/* Farm Size Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Farm Size (in Hectare)</Text>
        <TextInput
          style={styles.input}
          value={farmSize}
          onChangeText={setFarmSize}
          placeholder="Enter farm size"
          keyboardType="numeric"
        />
      </View>

      {/* Soil Type Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Soil Type</Text>
        <TextInput
          style={styles.input}
          value={soilType}
          onChangeText={setSoilType}
          placeholder="Enter soil type"
        />
      </View>

      {/* Region Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Region/State</Text>
        <TextInput
          style={styles.input}
          value={region}
          onChangeText={setRegion}
          placeholder="Enter region"
        />
      </View>

      {/* Irrigation Method Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Irrigation Method</Text>
        <TextInput
          style={styles.input}
          value={irrigationMethod}
          onChangeText={setIrrigationMethod}
          placeholder="Enter irrigation method (e.g. Drip, Sprinkler)"
        />
      </View>

      {/* Growth Stage Input */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Current Growth Stage</Text>
        <TextInput
          style={styles.input}
          value={growthStage}
          onChangeText={setGrowthStage}
          placeholder="Enter growth stage"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Temperature</Text>
        <TextInput
          style={styles.input}
          value={temper}
          onChangeText={setTemper}
          placeholder="Enter rainfall in mm"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Error Message */}
      {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}

      {/* Result Display */}
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultHeader}>Calculation Results</Text>
          <Text style={styles.resultText}>Crop: {result.crop}</Text>
          <Text style={styles.resultText}>Stage: {result.stage}</Text>
          <Text style={styles.resultText}>Farm Size: {result.farmSize} hectares</Text>
          <Text style={styles.resultText}>Soil Type: {result.soilType}</Text>
          <Text style={styles.resultText}>Region: {result.region}</Text>
          <Text style={styles.resultText}>Irrigation Method: {result.irrigationMethod}</Text>
          <Text style={styles.resultText}>Total Water Required: {result.totalWaterRequired} liters</Text>
          <Text style={styles.resultText}>Effective Rainfall: {result.effectiveRainfall} liters</Text>
          <Text style={styles.resultText}>Net Irrigation Requirement: {result.netIrrigationRequirement} liters</Text>
          <Text style={styles.resultText}>Adjusted Irrigation: {result.adjustedIrrigation} liters</Text>
          <Text style={styles.resultText}>Water Saved: {result.waterSaved} liters</Text>
          <Text style={styles.resultText}>Message: {result.message}</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: '#F5F5F5',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#006D77',
      marginBottom: 20,
      textAlign: 'center',
    },
    inputContainer: {
      marginBottom: 15,
    },
    label: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333',
      marginBottom: 5,
    },
    input: {
      height: 50,
      borderColor: '#006D77',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 10,
      backgroundColor: '#FFFFFF',
      fontSize: 16,
    },
    button: {
      backgroundColor: '#006D77',
      paddingVertical: 15,
      borderRadius: 8,
      alignItems: 'center',
      marginTop: 20,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: '600',
    },
    errorText: {
      color: 'red',
      fontSize: 14,
      marginTop: 10,
    },
    resultContainer: {
      marginTop: 20,
      padding: 15,
      borderRadius: 8,
      backgroundColor: '#E8F6F3',
    },
    resultHeader: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: '#006D77',
    },
    resultText: {
      fontSize: 16,
      marginBottom: 5,
      color: '#333',
    },
  });
  
  

export default FarmerFootprintcalc;
