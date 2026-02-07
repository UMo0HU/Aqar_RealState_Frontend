import axios from 'axios';
import { getAuthToken } from '@/api/tokenStore';

const axiosInstance = axios.create({
    baseURL : "http://localhost:8000",
    timeout : 10000,
})


axiosInstance.interceptors.request.use((config) => {
    const token = getAuthToken();

    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
})

export default axiosInstance;