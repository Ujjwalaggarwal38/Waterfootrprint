// api.js
const API_BASE_URL = 'http://172.17.18.235:3000'; // Update with your Node.js server URL

// Function to handle the chat request
export const sendMessageToChatbot = async (message, language) => {
  try {
    const response = await fetch(`${API_BASE_URL}/chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message, language }),
    });

    if (!response.ok) {
      throw new Error('Error from server: ' + response.statusText);
    }

    const data = await response.json();
    return data.response; // Return the response from the backend
  } catch (error) {
    throw new Error(error.message || 'Failed to send message');
  }
};
