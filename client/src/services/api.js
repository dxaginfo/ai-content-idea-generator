import axios from 'axios';

// Create axios instance with base URL and default settings
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for API calls
api.interceptors.request.use(
  (config) => {
    // You can add auth token here if needed
    // const token = localStorage.getItem('token');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for API calls
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Handle specific error codes
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error('API Error:', error.response.data);
      
      // Handle 401 Unauthorized errors
      if (error.response.status === 401 && !originalRequest._retry) {
        // Handle token refresh or redirect to login
      }
    } else if (error.request) {
      // The request was made but no response was received
      console.error('API Request Error:', error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error('API Setup Error:', error.message);
    }
    
    return Promise.reject(error);
  }
);

// API services
const ideaService = {
  // Generate new ideas
  generateIdeas: (data) => api.post('/ideas/generate', data),
  
  // Save an idea
  saveIdea: (idea) => api.post('/ideas', idea),
  
  // Get all saved ideas
  getSavedIdeas: () => api.get('/ideas'),
  
  // Delete a saved idea
  deleteIdea: (id) => api.delete(`/ideas/${id}`),
};

export { ideaService };
export default api;
