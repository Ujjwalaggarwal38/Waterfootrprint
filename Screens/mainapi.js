const BASE_URL = 'http://192.168.245.76:3000'; // Update with your backend's deployed URL in production

// Helper function for fetch
const fetchAPI = async (url, options = {}) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'An error occurred');
    }
    return data;
  } catch (error) {
    throw error;
  }
};

// Authentication APIs
export const register = (data) =>
  fetchAPI('/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const login = (data) =>
  fetchAPI('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const forgotPassword = (data) =>
  fetchAPI('/forgot-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

export const verifyOtp = (email,otp) =>
  fetchAPI('/verify-otp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({email,otp}),
  });

export const resetPassword = (data) =>
  fetchAPI('/reset-password', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });


export const getProfile = async (token) =>
  fetchAPI('/profile', {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  });

export const editProfile = (data, token) =>
  fetchAPI('/profile/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

export const logout = (token) =>
  fetchAPI('/logout', {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}` },
  });

  
  export const getUsername = async (token) => {
    return fetchAPI('/current-user', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
  }