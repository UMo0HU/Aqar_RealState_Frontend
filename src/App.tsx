import { Routes, Route } from "react-router-dom";

import Home from "@/features/properties/pages/Home";

import AuthLayout from "@/features/auth/AuthLayout";
import SignupPage from "@/features/auth/pages/SignupPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import EmailVerificationPage from "@/features/auth/pages/EmailVerificationPage";
import ForgetPasswordPage from "@/features/auth/pages/ForgetPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Home />}/> 
          <Route path="/auth" element={<AuthLayout />}>
            <Route path="signup" element={<SignupPage />}/>
            <Route path="login" element={<LoginPage />}/>
            <Route path="reset-password/:token" element={<ResetPasswordPage />}/>
            <Route path="forget-password" element={<ForgetPasswordPage />}/>
            <Route path="verify-email" element={<EmailVerificationPage />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App;