import axios from "@/api/axiosInstance";

export const login = (data: { email: string; password: string }) =>
  axios.post("/auth/login", data);

export const signup = (data: {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  confirmPassword: string;
}) => axios.post("/auth/signup", data);

// Marks user offline on the server — call before clearing local state
export const logout = () => axios.post("/auth/logout");

export const requestOtp = (email: string | null) =>
  axios.post("/auth/request-otp", { email });

export const verifyOtp = (email: string | null, otp: string) =>
  axios.post("/auth/verify-otp", { email, otp });

export const requestPasswordReset = (email: string) =>
  axios.post("/auth/request-reset", { email });

export const verifyResetToken = (token: string) =>
  axios.get(`/auth/verify-reset/${token}`);

export const resetPassword = (token: string | undefined, password: string) =>
  axios.post(`/auth/reset-password/${token}`, { newPassword: password });

export const getProfile = () => axios.get("/auth/profile");

export const updateProfile = (data: {
  firstName?: string;
  secondName?: string;
  email?: string;
  password?: string;
}) => axios.put("/auth/profile", data);