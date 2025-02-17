// API configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Other configuration options
export const config = {
  apiUrl: API_URL,
  defaultImagePlaceholder: '/images/placeholder.jpg',
  maxRetries: 3,
  timeoutMs: 5000,
};