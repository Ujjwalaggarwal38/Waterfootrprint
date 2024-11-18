import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';

export default function Dashboard({ navigation }) {
  const openChatbot = () => {
    Alert.alert("Camera", "Camera feature coming soon!");
  };

  return (
    <View style={styles.container}>
        <View style={styles.headerRow1}>
          <View style={styles.headerRow}>
          <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>Hello, Ujjwal!</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Notify')}>
          <Image
          source={require('../images/notification.png')}
          style={styles.logo1}
        />
          </TouchableOpacity>
        
      </View>

      {/* Goal & Consumption Section */}
      <View style={styles.goalContainer}>
        <View style={styles.profilePic}>
        <Image
          source={require('../images/profile_logo.png')}
          style={styles.logo2}
        />
 
        </View>
        <View>
          <Text style={styles.goalText}>Today's Goal Limit</Text>
          <Text style={styles.goalValue}>500 Liters</Text>
          <Text style={styles.consumedText}>Consumed</Text>
          <Text style={styles.consumedValue}>269 Liters</Text>
        </View>
      </View>

      {/* Menu Options */}
      <View style={styles.menuContainer}>
  <View style={styles.menuButton}>
    <TouchableOpacity onPress={() => console.log("Leader Board clicked")} style={styles.iconContainer4}>
      <Image
        source={require('../images/leaderboard_1.png')}
        style={styles.logo9}
      />
    </TouchableOpacity>
    <Text style={styles.menuText}>Leaderboard</Text>
  </View>
  
  <View style={styles.menuButton}>
    <TouchableOpacity onPress={() => navigation.navigate('calculator')} style={styles.iconContainer4}>
      <Image
        source={require('../images/books_2.png')}
        style={styles.logo9}
      />
    </TouchableOpacity >
    <Text style={styles.menuText} >Calculate</Text>
  </View>
  
  <View style={styles.menuButton}>
    <TouchableOpacity onPress={() => console.log("Educational Content clicked")} style={styles.iconContainer4}>
      <Image
        source={require('../images/calculator_1.png')}
        style={styles.logo9}
      />
    </TouchableOpacity>
    <Text style={styles.menuText}>Educational Content</Text>
  </View>
</View>




      {/* Tips Section */}
      <View style={styles.tipsContainer}>
        <Text style={styles.tipsText}>Tips</Text>
      </View>

      {/* {ChatBot Section} */}
      <View style={styles.rightAlignedContainer}>
  <TouchableOpacity onPress={() => navigation.navigate('chat')} >
    <Image
      source={require('../images/chatbot.png')}
    />
  </TouchableOpacity>
</View>


      {/* Footer (Imported from Dashboard) */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Dash')}>
          <Image source={require('../images/home.png')} style={styles.iconImage} />
          <Text style={[styles.iconText, styles.middleIconText]}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../images/community.png')} style={styles.iconImage} />
          <Text style={[styles.iconText, styles.middleIconText]}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middleIconContainer} onPress={openChatbot}>
          <Image source={require('../images/camera.png')} style={[styles.iconImage, styles.middleIconImage]} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Reward')}>
          <Image source={require('../images/rewards.png')} style={styles.iconImage} />
          <Text style={[styles.iconText, styles.middleIconText]}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../images/profile.png')} style={styles.iconImage} />
          <Text style={[styles.iconText, styles.middleIconText]}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E1D36',
    padding: 20,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRow1: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  logo1: {
    width: 40,
    height: 40,
    marginRight: 10, 
    resizeMode:'contain'// Space between logo and text
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10, 
    resizeMode:'contain'// Space between logo and text
  },
  headerText: {
    color: 'white',
    fontSize: 24,
  },
  goalContainer: {
    flexDirection: 'row',
    backgroundColor: '#1E2A44',
    padding: 20,
    borderRadius: 10,
    marginTop:50
  },
  logo2:{
    width: 100,
    height: 100,
    marginRight: 10, 
    resizeMode:'contain'
  },
  goalText: {
    color: 'white',
    fontSize: 20,
     textAlign:'center'
  },
  goalValue: {
    color: '#00BFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
  consumedText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
     textAlign:'center'
  },
  consumedValue: {
    color: '#FF6347',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign:'center'
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
  },
  menuButton: {
    alignItems: 'center',
    width: 80,
    height: 80,
  },
  menuText: {
    marginTop: 5,
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
  },
  logo9: {
    width: 50,
    height: 50,
    marginStart:15,
    marginTop:10,
    resizeMode:'contain',
  },
  iconContainer4:{
    height:80,
    width:80,
    backgroundColor:"#fff",
    borderRadius:50,
  },
  tipsContainer: {
    backgroundColor: '#FFFFFF',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop:100
  },
  tipsText: {
    fontSize: 28,
    color: 'black',
  },
  rightAlignedContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:100
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    position: 'absolute', // Position absolutely
    bottom: 0,            // Stick to the bottom of the screen
    left: 0,              // Stretch to the left edge
    right: 0,    
    paddingHorizontal: 20,      // Stretch to the right edge
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
    borderRadius: 40,
    padding: 8,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  iconText: {
    fontSize: 12,
    color: '#000',
  },
  middleIconImage: {
    width: 70,
    height: 70,
  },
});

