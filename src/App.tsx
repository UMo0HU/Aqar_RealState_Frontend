import EmailVerificationPage from "./pages/authentication/EmailVerificationPage";
import ForgetPasswordPage from "./pages/authentication/ForgetPasswordPage";
import LoginPage from "./pages/authentication/LoginPage";
import ResetPasswordPage from "./pages/authentication/ResetPasswordPage";
import ResetPasswordSuccessPage from "./pages/authentication/ResetPasswordSuccessPage";
import SignupPage from "./pages/authentication/SignupPage";

function App() {
  return (
    <>
      <SignupPage />
      <LoginPage />
      <ResetPasswordPage />
      <ForgetPasswordPage />
      <ResetPasswordSuccessPage />
      <EmailVerificationPage /> 
    </>
  )
}

export default App;