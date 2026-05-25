import { useContext, useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "../components/Card";
import Form from "../components/Form";
import Header from "../components/Header";
import Input from "../components/Input";
import SubmitButton from "../components/SubmitButton";


import { FormContext } from "@/context/FormContext";

import axios from "axios";
import SuccessMessagePage from "./SuccessMessagePage";
import { resetPassword } from "@/services/authService";

export default function ResetPasswordPage() {
    const {user, inputErrors, setUser} = useContext(FormContext);
    const [expired, setExpired] = useState(false);
    const [passwordReset, setPasswordReset] = useState(false);
    const navigate = useNavigate();
    const { token } = useParams();

    async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        for(const error of Object.values(inputErrors)) {
            if(error) return;
        }

        try {
            await resetPassword(token, user.password);

            setUser({firstName : "", secondName : "", email : "", password : "", confirmPassword : ""});

            setPasswordReset(true);
        }
        catch(error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data.msg;

                if(errorMsg === "Invalid or expired token") {
                    setExpired(true);
                }
            } 
        }
    }
    
    return (
        <Card>
            {passwordReset? 
            (
                <SuccessMessagePage title={
                    <>
                        Password Changed <br /> Successfully!
                    </>
                }/>
            ) : (
                <>
                <Header 
                    title={expired ? "Reset link has expired" : "Reset Password"} 
                    content={expired ? "Press The button to request a new link." : "Enter your new password"}/>
                    {expired ? (
                        <button onClick={() => navigate("/auth/forget-password")} 
                            className={`bg-gray-600 text-white text-xl "w-full" p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-75`}>
                            Request new link
                        </button>
                    ) : (
                        <Form submitHandler={submitHandler}>
                            <div className="flex flex-col gap-5 my-5">
                                <Input type="password" id="password">New Password</Input>
                                <Input type="password" id="confirmPassword">Confirm Password</Input>
                            </div>
                            <SubmitButton size="full">Reset Password</SubmitButton>
                        </Form>
                    )}
               </> 
            )}
        </Card>         
    )
}