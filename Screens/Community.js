import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { createPost, likePost, getAllPosts } from './apiutility' // Import the API functions

const Community = () => {
  const [postText, setPostText] = useState('');
  const [posts, setPosts] = useState([]);

  // Fetch posts when the component mounts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await getAllPosts();
        console.log('Fetched Posts:', fetchedPosts); // Log the fetched posts to debug
        setPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
        Alert.alert('Error', 'Failed to load posts.');
      }
    };
  
    fetchPosts();
  }, []);
  
  // Handle creating a new post
  const handlePost = async () => {
    if (postText.trim()) {
      try {
        const newPost = await createPost(postText);
        console.log('Created Post:', newPost); // Log the new post to see the structure
        setPosts([newPost, ...posts]);
        setPostText('');
      } catch (error) {
        Alert.alert('Error', 'Failed to create post.');
      }
    }
  };
  

  // Handle liking or unliking a post
  const handleLike = async (postId) => {
    try {
      const result = await likePost(postId); // Call the API to like/unlike post
      if (result) {
        // Find the post and update the like status
        setPosts(posts.map(post => 
          post.id === postId ? { ...post, liked: !post.liked } : post
        ));
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to like post.');
    }
  };

  const renderPost = ({ item }) => (
    <View style={styles.postCard}>
      {/* <Text style={styles.postName}>{item.user.name || 'Anonymous'}</Text>  */}
      <Text style={styles.postContent}>{item.text || 'No content available'}</Text> {/* Ensure `item.content` exists */}
      <TouchableOpacity style={styles.likeButton} onPress={() => handleLike(item.id)}>
        <Text style={styles.likeText}>{item.liked ? '❤️ Liked' : '👍 Like'}</Text>
      </TouchableOpacity>
    </View>
  );
  

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="What's happening?"
          value={postText}
          onChangeText={setPostText}
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.postButtonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPost}
        contentContainerStyle={styles.postsList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    fontSize: 16,
  },
  postButton: {
    marginLeft: 10,
    backgroundColor: '#007bff',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  postButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  postsList: {
    paddingBottom: 20,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  postName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  likeButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f4ff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  likeText: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Community;
