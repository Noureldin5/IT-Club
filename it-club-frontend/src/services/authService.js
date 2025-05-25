import api from './api';

const authService = {
  login: async (credentials) => {
    console.log('Sending login request with:', { username: credentials.username, password: '***' });
    try {
      // Make sure to send exactly what backend expects
      const requestData = {
        username: credentials.username,
        password: credentials.password
      };
      
      const response = await api.post('/api/auth/login', requestData);
      console.log('Login response status:', response.status);
      console.log('Login response data:', response.data);
      
      if (response.data && response.data.token) {
        // Store token
        localStorage.setItem('token', response.data.token);
        console.log('Token saved to localStorage');
        
        // Store user info
        const userInfo = {
          username: response.data.username,
          fullName: response.data.fullName,
          isAdmin: response.data.admin  // Change this line from isAdmin to admin
        };
        localStorage.setItem('user', JSON.stringify(userInfo));
        console.log('User info saved:', userInfo);
      } else {
        console.warn('Login response does not contain token:', response.data);
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error in service:', error);
      if (error.response) {
        console.error('Server response status:', error.response.status);
        console.error('Server response data:', error.response.data);
        console.error('Server response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log('User logged out, localStorage cleared');
  },
  
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    const isAuth = token && token.trim() !== '';
    console.log('Authentication check:', isAuth);
    return isAuth;
  },
  
  isAdmin: () => {
    try {
      const userStr = localStorage.getItem('user');
      if (!userStr) {
        console.log('No user data found in localStorage');
        return false;
      }
      
      const user = JSON.parse(userStr);
      const isAdmin = user && user.isAdmin === true;
      console.log('Admin status check:', isAdmin);
      return isAdmin;
    } catch (e) {
      console.error('Error checking admin status:', e);
      return false;
    }
  },
  
  getUser: () => {
    try {
      const userData = JSON.parse(localStorage.getItem('user') || '{}');
      console.log('Retrieved user data:', userData);
      return userData;
    } catch (e) {
      console.error('Error getting user:', e);
      return {};
    }
  },
  
  register: async (userData) => {
    try {
      const response = await api.post('/api/auth/register', userData);
      return response.data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }
};

export default authService;