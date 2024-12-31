// utils/api.js
const BASE_URL = 'http://172.17.18.251:5000'; // Replace with your backend URL

// Register user
export const registerUser = async (name, email, password) => {
  try {
    console.log('Registering user with payload:', { name, email, password });
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });

    let result;
    try {
      result = await response.json();
    } catch (e) {
      throw new Error('Invalid response from server');
    }

    console.log('Server Response:', result);

    if (response.ok) {
      return result; // Successfully registered
    } else {
      throw new Error(result.message || 'Error during registration');
    }
  } catch (error) {
    console.error('Registration Error:', error.message);
    throw new Error(
      error.message === 'Failed to fetch'
        ? 'Cannot connect to the server. Please check your network or try again later.'
        : error.message
    );
  }
};

// Login user
export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || 'Error during login');
    }
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

// Forgot password
export const forgotPassword = async (email) => {
  try {
    const response = await fetch(`${BASE_URL}/forgot-password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || 'Error during password recovery');
    }
  } catch (error) {
    console.error('Forgot Password Error:', error);
    throw error;
  }
};

// Verify OTP
export const verifyOtp = async (email, otp) => {
  try {
    const response = await fetch(`${BASE_URL}/verify-otp`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, otp }),
    });

    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || 'Invalid OTP');
    }
  } catch (error) {
    console.error('OTP Verification Error:', error);
    throw error;
  }
};

// Reset password
// export const resetPassword = async (email, newPassword) => {
//   try {
//     const response = await fetch(`${BASE_URL}/reset-password`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ email, newPassword }),
//     });

//     const result = await response.json();

//     if (response.ok) {
//       return result;
//     } else {
//       throw new Error(result.message || 'Error resetting password');
//     }
//   } catch (error) {
//     console.error('Reset Password Error:', error);
//     throw error;
//   }
// };

//logout
export const logoutUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message || 'Error during logout');
      }
    } catch (error) {
      console.error('Logout Error:', error);
      throw error;
    }
  };
  
  // Edit Profile (Authenticated)
  export const editProfile = async (name, dateOfBirth, gender, mobile, address) => {
    try {
      const response = await fetch(`${BASE_URL}/profile/edit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, dateOfBirth, gender, mobile, address }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message || 'Error updating profile');
      }
    } catch (error) {
      console.error('Profile Edit Error:', error);
      throw error;
    }
  };
  
  // Check Profile Completion
  export const checkProfileCompletion = async () => {
    try {
      const response = await fetch(`${BASE_URL}/check-profile-completion`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message || 'Error checking profile completion');
      }
    } catch (error) {
      console.error('Profile Completion Check Error:', error);
      throw error;
    }
  };
  
  // Get Rewards and Streak Details
  export const getRewards = async () => {
    try {
      const response = await fetch(`${BASE_URL}/rewards`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message || 'Error fetching rewards');
      }
    } catch (error) {
      console.error('Rewards Error:', error);
      throw error;
    }
  };
  
  // Get Reward History
  export const getRewardHistory = async () => {
    try {
      const response = await fetch(`${BASE_URL}/history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message || 'Error fetching reward history');
      }
    } catch (error) {
      console.error('Reward History Error:', error);
      throw error;
    }
  };
  export const getCurrentUser = async () => {
    try {
      const response = await fetch(`${BASE_URL}/current-user`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result.username;
      } else {
        throw new Error(result.message || 'Error fetching current user');
      }
    } catch (error) {
      console.error('Current User Fetch Error:', error);
      throw error;
    }
  };
  
  // Create a new text post
  export const createPost = async (text) => {
    try {
      const response = await fetch(`${BASE_URL}/community/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result.post;
      } else {
        throw new Error(result.message || 'Error creating post');
      }
    } catch (error) {
      console.error('Create Post Error:', error);
      throw error;
    }
  };
  
  // Like or unlike a post
  export const likePost = async (postId) => {
    try {
      const response = await fetch(`${BASE_URL}/community/like/${postId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result;
      } else {
        throw new Error(result.message || 'Error liking/unliking post');
      }
    } catch (error) {
      console.error('Like Post Error:', error);
      throw error;
    }
  };
  
  // Get all posts
  export const getAllPosts = async () => {
    try {
      const response = await fetch(`${BASE_URL}/community/all`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result.posts;
      } else {
        throw new Error(result.message || 'Error fetching posts');
      }
    } catch (error) {
      console.error('Get All Posts Error:', error);
      throw error;
    }
  };
  
  // Delete Account
  export const deleteAccount = async () => {
    try {
      const response = await fetch(`${BASE_URL}/profile/delete`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json();
  
      if (response.ok) {
        return result.message;
      } else {
        throw new Error(result.message || 'Error deleting account');
      }
    } catch (error) {
      console.error('Delete Account Error:', error);
      throw error;
    }
  };  

  // Get all data from the water footprint API
  export const fetchData = async (productName) => {
    try {
      const response = await fetch(`${BASE_URL}/api/data/search?name=${productName}`, {
        method: 'GET',
      });
      const result = await response.json();
      if (response.ok) {
        return result; // Return the fetched product data
      } else {
        throw new Error(result.message || 'Error fetching product data');
      }
    } catch (error) {
      console.error('Fetch Data Error:', error);
      throw error;
    }
  };
  

// Get specific data by ID
export const fetchDataById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/data/${id}`, {
      method: 'GET',
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || 'Error fetching data by ID');
    }
  } catch (error) {
    console.error('Fetch Data By ID Error:', error);
    throw error;
  }
};

// Get areas for a specific crop by ID
export const fetchAreasById = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/api/data/${id}/areas`, {
      method: 'GET',
    });
    const result = await response.json();
    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || 'Error fetching areas by ID');
    }
  } catch (error) {
    console.error('Fetch Areas By ID Error:', error);
    throw error;
  }
};

export const searchCropByName = async (name) => {
  try {
    // Update the endpoint to use the product name as a URL parameter
    const response = await fetch(`${BASE_URL}/api/crops/${name}`, {
      method: 'GET',
    });

    const result = await response.json();

    if (response.ok) {
      return result; // Return the fetched product data
    } else {
      throw new Error(result.message || 'Error searching for crop');
    }
  } catch (error) {
    console.error('Search Crop Error:', error);
    throw error;
  }
};



export const fetchCrops = async (queryParams) => {
  try {
    const query = new URLSearchParams(queryParams).toString();
    const response = await fetch(`${BASE_URL}/fetch-crop?${query}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const result = await response.json();

    if (response.ok) {
      return result; // Return the fetched crop name(s) or message
    } else {
      throw new Error(result.message || 'Error fetching crop data');
    }
  } catch (error) {
    console.error('Fetch Crops Error:', error);
    throw error;
  }
};



