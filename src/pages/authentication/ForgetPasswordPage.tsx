import { useContext, useState, type FormEvent } from "react";
import axios from "axios";

import Card from "../../components/authentication/Card";
import CreateAccount from "../../components/authentication/CreateAccount";
import Form from "../../components/authentication/Form";
import Header from "../../components/authentication/Header";
import Input from "../../components/authentication/Input";
import SubmitButton from "../../components/authentication/SubmitButton";

import axiosInstance from "./axiosInstance";
import { UserAuthContext } from "../../context/userAuthContext";

export default function ForgetPasswordPage() {
    const {user, setUser, setInputErrors} = useContext(UserAuthContext); 
    const [emailSent, setEmailSent] = useState(false);
    
    async function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
                await axiosInstance.post('/request-reset', {
                    email : user.email,
                }, {timeout: 15000});
                
                setUser({firstName : "", secondName : "", email : "", password : "", confirmPassword : ""});
                
                setEmailSent(true);
            }
        catch (error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data.msg;
                if(errorMsg === "Email is required") {
                    setInputErrors(prev => ({...prev, email_msg : `${errorMsg}.`}));
                }
                else if(errorMsg === "User not found") {
                    setInputErrors(prev => ({...prev, email_msg : `Email not found.`}));
                }
            }
            else {
                throw new Error("Failed to send data");
            }
        }
    }


    return (
        <Card>
            <Header 
                title={emailSent ? "Email Sent Successfully" : "Oh, no ! I Forgot"} 
                content={emailSent ? "Link was sent, Check your email." : "Enter your email and we'll send you a link to change your password"}/>
            {emailSent ? (
                undefined
            ) : (
                <Form submitHandler={submitHandler}>
                    <div className="my-5">
                        <Input type="email" id="email">Email</Input>
                    </div>
                    <SubmitButton>Send Email</SubmitButton>
                    <CreateAccount />
                </Form>
            )}
        </Card>
    )
}