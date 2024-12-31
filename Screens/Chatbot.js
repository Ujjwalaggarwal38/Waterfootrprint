import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { sendMessageToChatbot } from './api'; // Import the API function

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]); // Store all messages (both user and chatbot)
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [language, setLanguage] = useState('en'); // Default to English

  const sendMessage = async () => {
    if (message.trim() === '') return; // Prevent empty messages from being sent

    // Add the user's message to the chat
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, sender: 'user' },
    ]);

    // Set loading state to true while waiting for response
    setIsLoading(true);
    setError('');  // Clear previous errors
    setMessage(''); // Clear message input

    try {
      // Call the sendMessageToChatbot function from api.js
      const chatbotResponse = await sendMessageToChatbot(message, language);

      // Add the chatbot's response to the chat
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: chatbotResponse, sender: 'chatbot' },
      ]);
    } catch (error) {
      console.error('Error sending message:', error);
      setError(error.message || 'Failed to send message');  // Handle network or other errors
    } finally {
      setIsLoading(false);  // Hide loading indicator once the request completes
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.chatContainer}>
        {/* Display chat messages */}
        {messages.map((msg, index) => (
          <View
            key={index}
            style={[
              styles.messageBubble,
              msg.sender === 'user' ? styles.userMessage : styles.chatbotMessage,
            ]}
          >
            <Text style={styles.messageText}>{msg.text}</Text>
          </View>
        ))}

        {/* Loading spinner */}
        {isLoading && <ActivityIndicator size="large" color="#0000ff" style={styles.loading} />}
        
        {/* Display error message if any */}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </ScrollView>

      {/* Language input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Enter language (e.g., en, fr, es)"
          value={language}
          onChangeText={setLanguage}
        />
      </View>

      {/* Message input */}
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Type your message"
          value={message}
          onChangeText={setMessage}
          onSubmitEditing={sendMessage} // Send message when pressing "Enter"
        />
      </View>

      {/* Send button */}
      <View style={styles.buttonWrapper}>
        <Button title="Send" onPress={sendMessage} color="#4CAF50" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end', // Push input box to the bottom
    padding: 16,
    backgroundColor: '#F9F9F9', // Light background for the whole screen
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end', // Align messages at the bottom of the screen
    paddingBottom: 20, // Padding for better visibility of the last message
  },
  messageBubble: {
    maxWidth: '75%',
    padding: 12,
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },
  userMessage: {
    backgroundColor: '#4CAF50', // Green for user messages
    alignSelf: 'flex-end', // Align user messages to the right
    borderBottomRightRadius: 0,
  },
  chatbotMessage: {
    backgroundColor: '#E5E5E5', // Light gray for chatbot messages
    alignSelf: 'flex-start', // Align chatbot messages to the left
    borderBottomLeftRadius: 0,
  },
  messageText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  inputWrapper: {
    marginBottom: 15,
    marginHorizontal: 10,
  },
  input: {
    height: 45,
    width: '100%',
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  buttonWrapper: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  loading: {
    marginTop: 20,
  },
  errorText: {
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },
});

export default ChatBot;