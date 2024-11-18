import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Pressable, Image } from 'react-native';

const challenges = [
  { id: '1', title: 'Challenge 1' },
  { id: '2', title: 'Challenge 2' },
  { id: '3', title: 'Challenge 3' },
  { id: '4', title: 'Challenge 4' },
  { id: '5', title: 'Challenge 5' },
  { id: '6', title: 'Challenge 6' },
];

export default function Rewards2({ navigation }) {
    const [activeTab, setActiveTab] = React.useState('Challenges');
    
    const handleTabPress = (tabName, screenName) => {
        setActiveTab(tabName);
        navigation.navigate(screenName); // Navigate to the respective screen
    };
    
  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Pressable onPress={() => navigation.navigate('Reward')} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>X</Text>
          </Pressable>
          <Text style={styles.headerText}>My Dropps</Text>
        </View>

        {/* Reward Information */}
        <View style={styles.rewardContainer}>
          <Text style={styles.rewardText}>Your Available reward Dropps:</Text>
          <View style={styles.droppsBox}>
            <Text style={styles.droppsText}>150</Text>
          </View>
        </View>
      </View>

      {/* Tab Section */}
      <View style={styles.tabContainer}>
        <TouchableOpacity onPress={() => handleTabPress('Challenges', 'Reward2')}>
          <Text style={[styles.tab, activeTab === 'Challenges' && styles.activeTab]}>Challenges</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Rewards', 'Reward3')}>
          <Text style={[styles.tab, activeTab === 'Rewards' && styles.activeTab]}>Rewards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('Redeem', 'Reward4')}>
          <Text style={[styles.tab, activeTab === 'Redeem' && styles.activeTab]}>Redeem</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleTabPress('History', 'Reward5')}>
          <Text style={[styles.tab, activeTab === 'History' && styles.activeTab]}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <FlatList
          data={challenges}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.challengeCard}>
              <View style={styles.challengeRow}>
                <Image source={require('../images/points.png')} style={styles.logo} />
                <View style={styles.challengeTextContainer}>
                  <Text style={styles.challengeTitle}>{item.title}</Text>
                  <Text style={styles.challengeText}>Scan products and find their Water footprint to earn Dropps 💧</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#172536',
  },
  header: {
    flex: 3,
    backgroundColor: '#172536',
    padding: 20,
    justifyContent: 'flex-start',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    left: 0,
    top: 0,
  },
  closeButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
     color:'#fff',
    marginTop: 0, // align with the top of the row
  },
  rewardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginTop: 50,
  },
  rewardText: {
    fontSize: 20,
    color:'#fff'
  },
  droppsBox: {
    marginLeft: 8,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  droppsText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#172536',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: 20,
    marginTop: -20,
  },
  tab: {
    fontSize: 16,
    color: '#fff',
  },
  activeTab: {
    color: '#fff',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  content: {
    flex: 7,
    padding: 20,
    marginLeft:10,
    marginRight:10,
    backgroundColor: '#B8F3FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  challengeCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  challengeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  challengeTextContainer: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  challengeText: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});
