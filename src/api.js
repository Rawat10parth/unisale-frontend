// api.js - Place this in a 'utils' or 'services' folder
import axios from 'axios';

import { API_BASE_URL } from './config';

// Create an axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Authentication endpoints
export const authAPI = {
  signup: (userData) => api.post('/signup', userData),
  getProfile: (email) => api.post('/get-profile', { email }),
  updatePhoneNumber: (userId, phoneNumber) => 
    api.post('/update-phone-number', { user_id: userId, phone_number: phoneNumber }),
};

// Product endpoints
export const productAPI = {
  uploadProduct: (formData) => {
    return axios.post(`${API_BASE_URL}/api/upload`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },
  getProducts: () => api.get('/products'),
};

// Profile endpoints
export const profileAPI = {
  updateProfilePicture: (formData) => {
    return axios.post(`${API_BASE_URL}/update-profile-picture`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
};

export default api;