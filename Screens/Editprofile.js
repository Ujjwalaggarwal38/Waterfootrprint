import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image,TouchableWithoutFeedback,Keyboard } from 'react-native';
import { Picker } from '@react-native-picker/picker'; 
import LinearGradient from 'react-native-linear-gradient';

const Editprofile = ({navigation}) => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <LinearGradient
      colors={['#FFFFFF', '#2C9CFF']}
      start={{ x: 0, y: 0.1 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
  <Image
    source={require('../images/editprofile.png')}
    style={styles.profileImage}
    resizeMode='contain'
  />
</View>
<TouchableOpacity style={styles.profileImageContainer3}>
  <Image
    source={require('../images/penedit.png')}
    style={styles.penedit}
  />
  <Text style={styles.edit}>Edit Image</Text>
</TouchableOpacity>


      {/* Form Fields */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Your Name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Date Of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="DD-MM-YYYY"
          value={dob}
          onChangeText={setDob}
        />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        <Text style={styles.label}>Mobile No.</Text>
        <View style={styles.alignmobile}>
  <Text style={styles.countryCode}>+91</Text>
  <TextInput
    style={styles.mobileInput}
    placeholder="Enter mobile number"
    keyboardType="numeric"
    value={mobile}
    onChangeText={setMobile}
  />
</View>

        

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="House No., Floor, Block, Locality, City, State..."
          value={address}
          onChangeText={setAddress}
        />
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </LinearGradient>
     </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 7,
  },
  profileImageContainer1: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderRadius: 50,
  },
  edit:{
    color:'#0047AB'
  },
  cameraIconContainer: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    backgroundColor: '#000',
    borderRadius: 15,
    padding: 5,
  },
  cameraIcon: {
    color: '#fff',
    fontSize: 14,
  },
  formContainer: {
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor:'#fff'
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor:'#fff'
  },
  picker: {
    height: 50,
    width: '100%',
  },
  saveButton: {
    backgroundColor: '#E9F6FF',
    borderRadius: 20,
    marginStart:20,
    marginEnd:20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  alignmobile: {
    backgroundColor:'#fff',
    flexDirection: 'row',       
    alignItems: 'center',       
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  countryCode: {
    marginRight: 10,            
    fontSize: 16,
    fontWeight: 'bold',
  },
  mobileInput: {
    flex: 1,          
    padding: 10,
  },
  profileImageContainer3: {
    flexDirection: 'row',       
    alignItems: 'center',      
    justifyContent: 'center',   
  },
  penedit: {
    marginRight: 5,             
  },
});

export default Editprofile;
