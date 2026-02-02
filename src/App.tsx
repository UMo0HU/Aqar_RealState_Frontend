import { Routes, Route } from "react-router-dom";
import EmailVerificationPage from "./pages/authentication/EmailVerificationPage";
import ForgetPasswordPage from "./pages/authentication/ForgetPasswordPage";
import LoginPage from "./pages/authentication/LoginPage";
import ResetPasswordPage from "./pages/authentication/ResetPasswordPage";
import SignupPage from "./pages/authentication/SignupPage";
import { UserAuthContextProvider } from "./context/userAuthContext";

function App() {
  return (
    <>
    <UserAuthContextProvider>
      <Routes>
          <Route path="/auth/signup" element={<SignupPage />}/>
          <Route path="/auth/login" element={<LoginPage />}/>
          <Route path="/auth/reset-password/:token" element={<ResetPasswordPage />}/>
          <Route path="/auth/forget-password" element={<ForgetPasswordPage />}/>
          <Route path="/auth/verify-email" element={<EmailVerificationPage />}/>
      </Routes>
    </UserAuthContextProvider>
    </>
  )
}

export default App;