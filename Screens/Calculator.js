// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Keyboard,
//   TouchableWithoutFeedback,
//   Alert,
// } from 'react-native';
// import { fetchProductByName } from './api'; // Import the function

// const Calculator = () => {
//   const [productName, setProductName] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [result, setResult] = useState({
//     blue: '',
//     green: '',
//     grey: '',
//     waterFootprint: '',
//   });

//   const handleCalculate = async () => {
//     if (!productName || !quantity) {
//       Alert.alert("Error", "Please fill in both the product name and quantity.");
//       return;
//     }

//     try {
//       const data = await fetchProductByName(productName); // Fetch product data by name

//       if (data) {
//         // Calculate the results based on quantity and the fetched product data
//         setResult({
//           blue: data.blue* quantity,
//           green: data.green * quantity,
//           grey: data.grey * quantity,
//           Total: (data.blue+data.green+data.grey) * quantity,
//         });
//       } 
//     } catch (error) {
//       console.error(error);
//       Alert.alert("Error", "Failed to fetch data from the server.");
//     }
//   };

//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View style={styles.container}>
//         <View style={styles.inputContainer}>
//           <Text style={styles.label}>Enter Name of product:</Text>
//           <TextInput
//             style={styles.input}
//             placeholder="Product Name"
//             value={productName}
//             onChangeText={setProductName}
//           />

//           <Text style={styles.label}>Add Quantity:</Text>
//           <View style={styles.quantityContainer}>
//             <TextInput
//               style={[styles.input, styles.quantityInput]}
//               placeholder="0"
//               keyboardType="numeric"
//               value={quantity}
//               onChangeText={setQuantity}
//             />
//             <Text style={styles.unit}>Kg</Text>
//           </View>

//           <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
//             <Text style={styles.calculateButtonText}>Calculate</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.resultContainer}>
//           <Text style={styles.resultTitle}>Result:</Text>
//           <Text style={styles.resultText}>Blue: {result.blue}</Text>
//           <Text style={styles.resultText}>Green: {result.green}</Text>
//           <Text style={styles.resultText}>Grey: {result.grey}</Text>
//           <Text style={styles.resultText}>Total: {result.Total}</Text>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1a2238',
//     padding: 20,
//   },
//   inputContainer: {
//     marginTop: 40,
//     backgroundColor: '#3e4959',
//     borderRadius: 10,
//     padding: 15,
//   },
//   label: {
//     color: 'white',
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   input: {
//     backgroundColor: 'white',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 15,
//     color: 'black',
//   },
//   quantityContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   quantityInput: {
//     flex: 1,
//     marginRight: 10,
//     borderColor: 'purple',
//     borderWidth: 2,
//   },
//   unit: {
//     color: 'white',
//     fontSize: 20,
//   },
//   calculateButton: {
//     backgroundColor: '#01A0DC',
//     borderRadius: 5,
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   calculateButtonText: {
//     fontSize: 20,
//     color: '#000',
//   },
//   resultContainer: {
//     backgroundColor: '#3e4959',
//     borderRadius: 10,
//     padding: 15,
//     marginTop: 20,
//   },
//   resultTitle: {
//     color: 'white',
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   resultText: {
//     color: 'white',
//     fontSize: 16,
//     marginVertical: 2,
//   },
// });

// export default Calculator;
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
import { fetchProductByName } from './api';

const Calculator = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [result, setResult] = useState({
    blue: '',
    green: '',
    grey: '',
    totalWaterFootprint: '',
    location:'',
    scarcity:''
  });
  
  const handleCalculate = async () => {
    if (!productName || !quantity) {
      Alert.alert("Error", "Please fill in both the product name and quantity.");
      return;
    }

    try {
      const data = await fetchProductByName(productName);

      if (data) {
        const quantityInTons = parseFloat(quantity);

        setResult({
          blue: (data["Blue WF (m³/ton)"] * quantityInTons).toFixed(2),
          green: (data["Green WF (m³/ton)"] * quantityInTons).toFixed(2),
          grey: (data["Grey WF (m³/ton)"] * quantityInTons).toFixed(2),
          totalWaterFootprint: (data["Total WF (m³/ton)"] * quantityInTons).toFixed(2),
          location:(data["Major Growing Locations"]),
          scarcity:(data["Water Scarcity Status"])
        });
      } else {
        Alert.alert("Error", "Product not found.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Failed to fetch data from the server.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Enter Name of product:</Text>
          <TextInput
            style={styles.input}
            placeholder="Product Name"
            value={productName}
            onChangeText={setProductName}
          />

          <Text style={styles.label}>Add Quantity (in Kg):</Text>
          <View style={styles.quantityContainer}>
            <TextInput
              style={[styles.input, styles.quantityInput]}
              placeholder="0"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />
            <Text style={styles.unit}>Kg</Text>
          </View>

          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>Calculate</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.calculateButton} onPress={handleCalculate}>
            <Text style={styles.calculateButtonText}>Add Product</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Result:</Text>
          <Text style={styles.resultText}>Blue Water Footprint: {result.blue} m³</Text>
          <Text style={styles.resultText}>Green Water Footprint: {result.green} m³</Text>
          <Text style={styles.resultText}>Grey Water Foorprint: {result.grey} m³</Text>
          <Text style={styles.resultText}>Total Water Footprint: {result.totalWaterFootprint} m³</Text>
          <Text style={styles.resultText}>Major Growing Regions: {result.location}</Text>
          <Text style={styles.resultText}>Scarcity Status: {result.scarcity} </Text>
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
