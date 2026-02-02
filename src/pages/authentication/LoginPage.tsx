import { useContext, useState, type FormEvent} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios'

import CreateAccount from "../../components/authentication/CreateAccount";
import Form from "../../components/authentication/Form";
import FormContainer from "../../components/authentication/FormContainer";
import FormDivider from "../../components/authentication/FormDivider";
import Header from "../../components/authentication/Header";
import Input from "../../components/authentication/Input";
import OAuthOptions from "../../components/authentication/OAuthOptions";
import SubmitButton from "../../components/authentication/SubmitButton";

import { UserAuthContext } from "../../context/userAuthContext";

import axiosInstance from "./axiosInstance";
import Card from "../../components/authentication/Card";

export default function LoginPage() {
  const {user, inputErrors, setInputErrors} = useContext(UserAuthContext); 
  const [emailSent, setEmailSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  
  async function submitHandler(e : FormEvent<HTMLFormElement>) {
      e.preventDefault();
      for(const error of Object.values(inputErrors)) {
        if(error) return
      }

      try {
          const res = await axiosInstance.post('/login', {
                  email : user.email,
                  password : user.password,
              })
          
          console.log(res);
          setErrorMsg("");
      }
      catch (error) {
          if(axios.isAxiosError(error)) {
              const errorMsg = error.response?.data.msg
              if(errorMsg === "Please verify your email before logging in") {
                setEmailSent(true);
              }
              else if(errorMsg === "Invalid email or password") {
                setErrorMsg(`${errorMsg}.`);
              }
          }
          else {
              throw new Error("Failed to send data");
          }
      }
  }

  const handleRequestOTP = async () => {
      try {
          await axiosInstance.post("/request-otp", {
            email: user.email
          }, {timeout: 15000});

          localStorage.setItem("email", user.email);

          navigate("/auth/verify-email");
      }
      catch(error) {
        if(axios.isAxiosError(error)) {
          const errorMsg = error.response?.data.msg;

          if(errorMsg === "Email is required") {
            setInputErrors(prev => ({...prev, email_msg : `${errorMsg}.`}));
          }
        }
        else {
          throw new Error("Failed to send data");
        }
      }
  }

  return (
  <>
    {emailSent ? (
      <Card>
        <Header title="Email is not verified!" content="Click the button to send verification code to your email."/>
        <button 
          onClick={async () => {await handleRequestOTP()}} 
          className={`bg-gray-600 text-white text-xl "w-full" p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-75`}>Send verification code</button>
      </Card>
    ) : (
      <FormContainer>
        <Header
          title="Welcome Back!"
          content="Im waiting for you, please enter your detail"
        />
        <Form submitHandler={submitHandler}>
          <Input type="email" id="email">
            Email
          </Input>
          <Input type="password" id="password">
            Password
          </Input>
          <section className="flex justify-between items-center w-full gap-3 sm:gap-5 px-3 sm:px-5">
            <p className="flex items-center gap-3 text-sm">
            </p>
            <Link
              to="/auth/forget-password"
              className="text-gray-600 text-sm hover:text-gray-400 transition-colors delay-100"
            >
              Forget Password ?
            </Link>
          </section>
          <SubmitButton>Login</SubmitButton>
          <p className="text-red-500 font-semibold">{errorMsg}</p>
          <FormDivider>Or Login with</FormDivider>
          <OAuthOptions />
          <CreateAccount />
        </Form>
      </FormContainer>
    )}
  </>
)}
