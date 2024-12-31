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
} from 'react-native';

const books = [
  {
    id: '1',
    title:
      'Water Footprint: Assessment and Case Studies (Environmental Footprints and Eco-design of Products and Processes)',
    author: 'by Arjen Y. Hoekstra, Min Hollan, and Richard Connor',
    // image: require('../images/book1.png'), // Replace with the actual book image
    url: 'https://example.com/water-footprint',
  },
  {
    id: '2',
    title: 'Blue Gold: The Water Wars',
    author: 'by Maude Barlow and Tony Clarke',
    // image: require('../images/book2.png'), // Replace with the actual book image
    url: 'https://example.com/water-footprint',
  },
];

const VideoScreen = () => {
    const openBookURL = (url) => {
        Linking.openURL(url).catch((err) =>
          console.error('Failed to open URL:', err)
        );
      };

  const renderBook = ({ item }) => (
    <TouchableOpacity onPress={() => openBookURL(item.url)} style={styles.bookCard}>
    <View style={styles.bookCard}>
      <Text style={styles.bookNumber}>{item.id}.</Text>
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{item.title}</Text>
        <Text style={styles.bookAuthor}>{item.author}</Text>
      </View>
      <Image source={item.image} style={styles.bookImage} />
    </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <TextInput style={styles.searchBar} placeholder="Search" />

      {/* Book List */}
      <FlatList
        data={books}
        renderItem={renderBook}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* Background Image */}
      <Image
        source={require('../images/videoback.png')} // Replace with actual background image
        style={styles.backgroundImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#D4F1FF',
    borderRadius: 10,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
  },
  searchBar: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  listContainer: {
    paddingBottom: 50,
  },
  bookCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    elevation: 3, // For shadow on Android
    shadowColor: '#000', // For shadow on iOS
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  bookNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#000',
  },
  bookDetails: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#000',
  },
  bookAuthor: {
    fontSize: 14,
    color: '#555',
  },
  bookImage: {
    width: 50,
    height: 70,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  backgroundImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
    opacity: 0.8, // Adjust transparency if needed
  },
});

export default VideoScreen;
