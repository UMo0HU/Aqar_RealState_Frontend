import axios from "axios";
import { getAuthToken } from "@/api/tokenStore";
import { loadAuth } from "@/utils/authStorage";

// Use VITE_API_URL in your .env for production; falls back to localhost in dev
export const BASE_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Attach JWT on every request
axiosInstance.interceptors.request.use((config) => {
  const token = getAuthToken() ?? loadAuth()?.token;
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

// Auto-logout on expired / invalid token
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem("aqar_auth");
      window.location.href = "/auth/login";
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
