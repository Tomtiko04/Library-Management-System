import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            // Handle 401 Unauthorized
            if (error.response.status === 401) {
                localStorage.removeItem('token');
                window.location.href = '/auth/signin';
            }
            
            // Handle 403 Forbidden
            if (error.response.status === 403) {
                // Handle forbidden access
                window.location.href = '/unauthorized';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance; 