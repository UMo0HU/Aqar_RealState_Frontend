import axios from "@/api/axiosInstance"

type signupData = {
    firstName: string;
    secondName: string;
    email: string;
    password: string
}

export const login = (data: {email: string, password: string}) => 
    axios.post("/auth/login", data);

export const signup = (data: signupData) => 
    axios.post("/auth/signup", data);

export const requestOtp = (email: string | null) => 
    axios.post("/auth/request-otp", {email});

export const verifyOtp = (email: string | null, otp: string) => 
    axios.post("/auth/verify-otp", {email, otp});

export const resetPassword = (token: string | undefined, password: string) => 
    axios.post(`/auth/reset-password/${token}`, { newPassword: password });

export const getProfile = () => 
    axios.get("/auth/profile");