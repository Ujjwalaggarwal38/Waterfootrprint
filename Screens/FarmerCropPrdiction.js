import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { fetchCrops } from './apiutility';

const FarmerCropPrediction = () => {
  const [region, setRegion] = useState('');
  const [soilType, setSoilType] = useState('');
  const [rainfall, setRainfall] = useState('');
  const [season, setSeason] = useState('');
  const [cropType, setCropType] = useState('');
  const [results, setResults] = useState(null); 
  const [loading, setLoading] = useState(false); 

  const handlePredict = async () => {
    // Validate inputs and highlight missing fields
    // const errors = [];
    // if (!region.trim()) errors.push('Region is required.');
    // if (!soilType.trim()) errors.push('Soil Type is required.');
    // if (!rainfall.trim()) errors.push('Rainfall is required.');
    // if (!season.trim()) errors.push('Season is required.');
    // if (!cropType.trim()) errors.push('Crop Type is required.');
  
    // if (errors.length > 0) {
    //   Alert.alert('Validation Error', errors.join('\n'));
    //   return;
    // }
  
    const queryParams = { rainfall, season, cropType, soilType, region };
  
    setLoading(true); 
    setResults(null); 
  
    try {
      console.log('Sending request with parameters:', queryParams); // Log the request
      const result = await fetchCrops(queryParams); // Call API to fetch crop data
      console.log('API response:', result); // Log the API response
  
      if (result.message) {
        Alert.alert('Error', result.message); // Show the error message if no crop found
        return;
      }
      setResults(result); // Update the results state with API data
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch crop predictions. Please try again later.');
      console.error('Error fetching crops:', error); // Log the error
    } finally {
      setLoading(false); // End loading state
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crop Prediction</Text>

      {/* Input Fields */}
      <TextInput style={styles.input} placeholder="Region" placeholderTextColor="#888" value={region} onChangeText={setRegion} />
      <TextInput style={styles.input} placeholder="Soil Type" placeholderTextColor="#888" value={soilType} onChangeText={setSoilType} />
      <TextInput style={styles.input} placeholder="Rainfall (in mm)" placeholderTextColor="#888" keyboardType="numeric" value={rainfall} onChangeText={setRainfall} />
      <TextInput style={styles.input} placeholder="Season" placeholderTextColor="#888" value={season} onChangeText={setSeason} />
      <TextInput style={styles.input} placeholder="Type of Crop" placeholderTextColor="#888" value={cropType} onChangeText={setCropType} />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handlePredict} disabled={loading}>
        {loading ? <ActivityIndicator size="small" color="#fff" /> : <Text style={styles.buttonText}>Predict</Text>}
      </TouchableOpacity>

      {/* Results Section */}
      {results && (
        <View style={styles.resultsContainer}>
          {results.crop ? (
            <>
              <Text style={styles.resultsTitle}>Recommended Crop:</Text>
              <Text style={styles.cropName}>{results.crop}</Text>
            </>
          ) : (
            <Text style={styles.noResults}>{results.message || 'No crops found matching the criteria.'}</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default FarmerCropPrediction;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F3F8FC',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006D77',
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#00B8A9',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#006D77',
    paddingVertical: 15,
    width: '100%',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  resultsContainer: {
    marginTop: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  resultsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  noResults: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
  },
  cropName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#006D77',
  },
});
