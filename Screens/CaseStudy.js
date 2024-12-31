import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';

const resources = [
  {
    id: '1',
    title:
      'This 80-Year-Old Goes from One Building to Another Saving Every Drop of Water He Can',
    author: 'by Tanaya Singh',
    url: 'https://thebetterindia.com/29341/aabid-surti-drop-dead-foundation/',
  },
  {
    id: '2',
    title: 'How One Woman Made 100 Villages in Rajasthan Fertile Using Traditional Water Harvesting Methods',
    author: 'by  TBI (Technology Business Incubators) teams',
    url: 'https://thebetterindia.com/21899/amla-ruia-check-dams-rajasthan-aakar-charitable-trust/t',
  },
  {
    id: '3',
    title: 'India’s Water Warrior Has a Solution for India’s Droughts. The Best Part – We Can Play a Role Too!',
    author: 'by Meryl Garcia',
    url: 'https://thebetterindia.com/48298/ayyappa-masagi-water-warrior-conservation-rainwater-harvesting-water-gandhi-water-literacy-foundation/',
  },
  {
    id: '4',
    title: 'Addressing water quality in water footprinting: current status, methods and limitations',
    author: 'by Natalia Mikosch, Markus Berger & Matthias Finkbeiner ',
    url: 'https://link.springer.com/article/10.1007/s11367-020-01838-1',
  },
  {
    id: '5',
    title: 'Ex-Engineer’s Low-Cost Solution Helps Recycle Greywater at Home in 6 Easy Steps',
    author: 'by Shivani Gupta',
    url: 'https://thebetterindia.com/322812/pune-engineer-innovates-affordable-greywater-recycling-systems-for-indian-households/',
  },
  {
    id: '6',
    title: 'Fair Water Footprints',
    author: 'by Patrick Fuller &  Clare Gorman',
    url: 'https://fairwaterfootprints.org/2021/11/08/cop26-landmark-fair-water-footprints-declaration-sets-out-to-tackle-world-water-crisis/',
  },
];

const CaseStudyScreen = () => {
  const openResourceURL = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error('Failed to open URL:', err)
    );
  };

  const renderResource = ({ item }) => (
    <TouchableOpacity onPress={() => openResourceURL(item.url)} style={styles.resourceCard}>
      <View style={styles.resourceCardContent}>
        <Text style={styles.resourceNumber}>{item.id}.</Text>
        <View style={styles.resourceDetails}>
          <Text style={styles.resourceTitle}>{item.title}</Text>
          <Text style={styles.resourceAuthor}>{item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for resources..."
        placeholderTextColor="#888"
      />
      <FlatList
        data={resources}
        renderItem={renderResource}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <Image
        source={require('../images/caseback.png')} // Replace with actual background image
        style={styles.backgroundImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF4F4',
    padding: 20,
  },
  header: {
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#00796B',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
    color: '#000',
  },
  listContainer: {
    paddingBottom: 100,
  },
  resourceCard: {
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  resourceCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  resourceNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00796B',
    marginRight: 10,
  },
  resourceDetails: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  resourceAuthor: {
    fontSize: 14,
    color: '#555',
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
    opacity: 0.15,
    width: '100%',
    height: 200,
  },
});

export default CaseStudyScreen;
