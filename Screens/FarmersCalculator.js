import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const FarmersCalculator = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        {/* Button 1 */}
        <TouchableOpacity style={[styles.button, styles.firstButton]}  onPress={() => navigation.navigate('Farmerfoot')}>
          <Text style={styles.buttonText}>Water Footprint Calculator</Text>
        </TouchableOpacity>

        {/* Button 2 */}
        <TouchableOpacity style={[styles.button, styles.secondButton]} onPress={() => navigation.navigate('FarmerCrop')}>
          <Text style={styles.buttonText}>Crop Prediction</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8FF',  // Light blue background color
    justifyContent: 'flex-start',     // Vertically center the content
    paddingHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#006D77', // Dark teal for the title
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent:'center',
    marginTop:200 // Center buttons horizontally
  },
  button: {
    width: '80%',          // Buttons take up 80% of the width
    paddingVertical: 15,
    marginVertical: 15,
    borderRadius: 8,
    elevation: 3,          // Shadow for a raised effect
  },
  firstButton: {
    backgroundColor: '#00B8A9', // Teal color for the first button
  },
  secondButton: {
    backgroundColor: '#006D77', // Dark teal for the second button
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default FarmersCalculator;
