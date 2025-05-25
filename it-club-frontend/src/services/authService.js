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
      
      if (response.data && response.data.token) {
        // Store token
        localStorage.setItem('token', response.data.token);
        
        // Store user info
        localStorage.setItem('user', JSON.stringify({
          username: response.data.username,
          fullName: response.data.fullName,
          isAdmin: response.data.isAdmin
        }));
      } else {
        console.warn('Login response does not contain token:', response.data);
      }
      
      return response.data;
    } catch (error) {
      console.error('Login error in service:', error);
      if (error.response) {
        console.error('Server response:', error.response.data);
      }
      throw error;
    }
  },
  
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },
  
  isAuthenticated: () => {
    const token = localStorage.getItem('token');
    return token && token.trim() !== '';
  },
  
  isAdmin: () => {
    try {
      const userStr = localStorage.getItem('user');
      if (!userStr) return false;
      
      const user = JSON.parse(userStr);
      return user && user.isAdmin === true;
    } catch (e) {
      console.error('Error checking admin status:', e);
      return false;
    }
  },
  
  getUser: () => {
    try {
      return JSON.parse(localStorage.getItem('user') || '{}');
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