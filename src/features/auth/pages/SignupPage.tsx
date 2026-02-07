import { useContext, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Form from "../components/Form";
import FormContainer from "../components/FormContainer";
import FormDivider from "../components/FormDivider";
import Header from "../components/Header";
import Input from "../components/Input";
import OAuthOptions from "../components/OAuthOptions";
import SubmitButton from "../components/SubmitButton";

import { FormContext } from "@/context/FormContext";
import { signup } from "@/features/auth/services/authService";

export default function SignupPage () {
    const {user, inputErrors, setInputErrors} = useContext(FormContext); 
    const navigate = useNavigate();
    
    async function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        for(const error of Object.values(inputErrors)) {
            if(error) return
        }

        try {
            await signup({...user});

            localStorage.setItem("email", user.email);
            navigate("/auth/verify-email");
        }
        catch (error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data.msg
                if(errorMsg === "Email is already used") {
                    setInputErrors(prev => ({...prev, email_msg : `${errorMsg}.`}));
                }
            }
            else {
                throw new Error("Failed to send data");
            }
        }
    }

    return (
        <FormContainer>
            <Header title="Create an Account" content="Enter your details to sign up"/>
            <Form submitHandler={submitHandler}>
                <Input type="email" id="email">Email</Input>
                <Input type="text" id="fullname">Full Name</Input>
                <Input type="password" id="password">Password</Input>
                <Input type="password" id="confirmPassword">Confirm Password</Input>
                <p className="text-[16px] sm:text-xl tracking-tighter">
                    Already have an account ? <Link to="/auth/login" className="text-gray-600 ms-2 hover:text-gray-400 transition-colors delay-100">Login</Link>
                </p>
                <FormDivider>Or sign up with</FormDivider>
                <OAuthOptions />
                <SubmitButton>Sign Up</SubmitButton>
            </Form>
        </FormContainer>
    )
}