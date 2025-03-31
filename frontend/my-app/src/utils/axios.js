import axios from 'axios';

const axiosClient = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1`,
});

// Add a request interceptor to add token to all requests
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = `Bearer ${token}`
    return config;
  }
);

axiosClient.interceptors.response.use((response) => {
  return response
}, (error) => {
  const {response} = error
  if(response === 401) {
    localStorage.removeItem('token')
  }

  throw error
})

export default axiosClient; 

//having issues setting this up...would find a solution to it later