import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Alert,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';

const CameraScreen = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const uploadImage = async (imagePath) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('image', {
        uri: imagePath,
        name: 'photo.jpg',
        type: 'image/jpeg',
      });

      const response = await fetch('http://172.17.18.235:3000/upload', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setResult(data);
        Alert.alert('Success', 'Image processed successfully!');
      } else {
        Alert.alert('Error', data.error || 'Failed to process image.');
      }
    } catch (error) {
      setLoading(false);
      console.error('Error uploading image:', error);
      Alert.alert('Error', 'An error occurred while uploading the image.');
    }
  };

  const selectImage = async (fromCamera) => {
    try {
      const options = {
        width: 800,
        height: 800,
        cropping: true,
        compressImageQuality: 0.8,
      };

      const selectedImage = fromCamera
        ? await ImageCropPicker.openCamera(options)
        : await ImageCropPicker.openPicker(options);

      const imagePath = selectedImage.path;
      setImage(imagePath);

      // Upload the selected image
      uploadImage(imagePath);
    } catch (error) {
      console.error('Error selecting image:', error);
      Alert.alert('Error', 'Failed to select image.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Image Selector</Text>
      <Button
        title="Select Image"
        onPress={() =>
          Alert.alert('Select Image', 'Choose an option', [
            { text: 'Camera', onPress: () => selectImage(true) },
            { text: 'Gallery', onPress: () => selectImage(false) },
            { text: 'Cancel', style: 'cancel' },
          ])
        }
      />
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {image && <Image source={{ uri: image }} style={styles.image} />}
      {result && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Result: {JSON.stringify(result)}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
    borderRadius: 8,
  },
  resultContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  resultText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CameraScreen;