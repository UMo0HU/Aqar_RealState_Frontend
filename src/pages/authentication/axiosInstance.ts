import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : "http://localhost:8000/auth/",
    timeout : 1500,
})

export default axiosInstance;