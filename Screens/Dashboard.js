import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert} from 'react-native';
import { getProfile } from './mainapi';
import { useTranslation } from 'react-i18next';
// import { Camera,useCameraDevices } from 'react-native-vision-camera';

export default function Dashboard({ navigation }) {
  const { t } = useTranslation();
  const [currentTipImage, setCurrentTipImage] = useState(0);
  const [username, setUsername] = useState('');

  const tipImages = [
    require('../images/Tip1.png'),
    require('../images/Tip2.png'),
    require('../images/Tip3.png'),
    require('../images/Tip4.png'),
    require('../images/Tip5.png'),
    require('../images/Tip6.png'),
    require('../images/Tip7.png'),
    require('../images/Tip8.png'),
    // Add more images as needed
  ];

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentTipImage((prevImage) => (prevImage + 1) % tipImages.length);
    }, 3000); // Change image every 5 seconds

    // Clear interval on component unmount
    return () => clearInterval(imageInterval);
  }, []);


  useEffect(() => {
    const fetchUsername = async () => {
      try {
        // Replace 'your-token' with the actual token management logic
        const token = 'your-token'; // Fetch from secure storage or context
        const profileData = await getProfile(token);
        setUsername(profileData.name); // Assuming the profile API returns a `name` field
      } catch (error) {
        // console.error('Error fetching profile:', error.message);
      }
    };

    fetchUsername();
  }, []);
  const openChatbot = () => {
    Alert.alert(t('cameraFeatureComingSoon'));
  };

  return (
    <View style={styles.container}>
        <View style={styles.headerRow1}>
          <View style={styles.headerRow}>
          <Image
          source={require('../images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.headerText}>{t('hello')}, {username || t('guest')}!</Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('Notify')}>
          <Image
          source={require('../images/notification.png')}
          style={styles.logo1}
        />
          </TouchableOpacity>
        
      </View>
<TouchableOpacity>
<View style={styles.goalContainer}>
        <View style={styles.profilePic}>
        <Image
          source={require('../images/profile_logo.png')}
          style={styles.logo2}
        />
        </View>
        <View>
          <Text style={styles.goalText}>{t('todaysGoalLimit')}</Text>
          <Text style={styles.goalValue}>500 {t('liters')}</Text>
          <Text style={styles.consumedText}>{t('consumed')}</Text>
          <Text style={styles.consumedValue}>269 {t('liters')}</Text>
        </View>
      </View>
</TouchableOpacity>
      

      {/* Menu Options */}
      <View style={styles.menuContainer}>
  <View style={styles.menuButton}>
    <TouchableOpacity onPress={() => navigation.navigate('Leader')} style={styles.iconContainer4}>
      <Image
        source={require('../images/leaderboard_1.png')}
        style={styles.logo9}
      />
    </TouchableOpacity>
    <Text style={styles.menuText}>{t('leaderboard')}</Text>
  </View>
  
  <View style={styles.menuButton}>
    <TouchableOpacity onPress={() => navigation.navigate('calculator')} style={styles.iconContainer4}>
      <Image
        source={require('../images/books_2.png')}
        style={styles.logo9}
      />
    </TouchableOpacity >
    <Text style={styles.menuText} >{t('calculate')}</Text>
  </View>
  
  <View style={styles.menuButton}>
    <TouchableOpacity onPress={() => navigation.navigate('Education')} style={styles.iconContainer4}>
      <Image
        source={require('../images/calculator_1.png')}
        style={styles.logo9}
      />
    </TouchableOpacity>
    <Text style={styles.menuText}>{t('educationalContent')}</Text>
  </View>
</View>




       {/* Tips Section with rotating images */}
       <View style={styles.tipsContainer}>
        <Image source={tipImages[currentTipImage]} style={styles.tipsImage} />
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
          <Text style={[styles.iconText, styles.middleIconText]}>{t('home')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}  onPress={() => navigation.navigate('Commute')}>
          <Image source={require('../images/community.png')} style={styles.iconImage}/>
          <Text style={[styles.iconText, styles.middleIconText]}>{t('community')}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middleIconContainer} onPress={() => navigation.navigate('Cameras')}>
          <Image source={require('../images/scanner.png')} style={[styles.iconImage, styles.middleIconImage]} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Reward')}>
          <Image source={require('../images/rewards.png')} style={styles.iconImage} />
          <Text style={[styles.iconText, styles.middleIconText]}>{t('rewards')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Profile')}>
          <Image source={require('../images/profile.png')} style={styles.iconImage} />
          <Text style={[styles.iconText, styles.middleIconText]}>{t('profile')}</Text>
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
    backgroundColor: '#0E1D36',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop:100
  },
  rightAlignedContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop:50
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
    width: 40,
    height: 40,
  },
  cameraContainer: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    bottom: 50,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

