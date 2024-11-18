import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import React from 'react';

const Rewards = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <ImageBackground
          source={require('../images/rewardbck.png')}  // Replace with your background image path
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Image
              source={require('../images/logo.png')}  // Replace with your logo image path
              style={styles.logo}
            />
            <Text style={styles.topText}>Hello, Ujjwal!</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.rewardContainer}>
          <Image source={require('../images/camera.png')} style={styles.rewardImage} /> {/* Replace with actual image */}
          <View style={styles.rewardTextContainer}>
  <Text style={styles.rewardText}>Scan Products</Text>
  <Text style={styles.rewardSubText}>Scan Products and find their Water Footprint to earn drops</Text>
</View>

        </View>
        <View style={styles.rewardContainer}>
          <Image source={require('../images/points.png')} style={styles.rewardImage} /> {/* Replace with actual image */}
          <View style={styles.rewardTextContainer}>
  <Text style={styles.rewardText}>Collect Drops</Text>
  <Text style={styles.rewardSubText}>Complete Daily challenges to earn drops</Text>
</View>
        </View>
        <View style={styles.rewardContainer}>
          <Image source={require('../images/points2.png')} style={styles.rewardImage} /> {/* Replace with actual image */}
          <View style={styles.rewardTextContainer}>
  <Text style={styles.rewardText}>Redeem Drops</Text>
  <Text style={styles.rewardSubText}>Exchange Drops for your selected Rewards</Text>
</View>

        </View>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Reward2')}>
              <Text style={styles.buttonText}>Explore</Text>
            </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Dash')}>
          <Image source={require('../images/home.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../images/community.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.middleIconContainer}>
          <Image source={require('../images/camera.png')} style={[styles.iconImage, styles.middleIconImage]} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('Reward')}>
          <Image source={require('../images/rewards.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={require('../images/profile.png')} style={styles.iconImage} />
          <Text style={styles.iconText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#004f71'
  },
  topSection: {
    flex: 6, // 30% of the screen height
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',  // Align text at the top
  },
  overlay: {
    flexDirection:'row',
    padding: 20,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode:'contain'
  },
  topText: {
    color: '#fff',
    fontSize: 28,
  },
  bottomSection: {
    flex: 6, // 70% of the screen height
    backgroundColor: '#C3F5FF',
    paddingHorizontal: 30,
    paddingTop: 10,
    borderTopRightRadius:30,
    borderTopLeftRadius:30
  },
  rewardTextContainer:{
    paddingRight:60,
  },
  rewardContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  rewardImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    resizeMode:'contain'
  },
  rewardText: {
    fontSize: 18,
    color: '#000',
    fontWeight:'bold'
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
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
    borderRadius: 30,
    padding: 5,
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
  button: {
    backgroundColor: '#5EE4FF',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    width: '100%',
    marginTop: 3,
    borderColor:'#000',
    borderWidth:1
  },
  buttonText: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Rewards;
