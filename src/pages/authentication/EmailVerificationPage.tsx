import { useContext, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "../../components/authentication/Card";
import Form from "../../components/authentication/Form";
import Header from "../../components/authentication/Header";
import OTPInput from "../../components/authentication/OtpInput";
import SubmitButton from "../../components/authentication/SubmitButton";

import { UserAuthContext } from "../../context/userAuthContext";
import axiosInstance from "./axiosInstance";
import SuccessMessagePage from "./SuccessMessagePage";


export default function EmailVerificationPage() {
    const [otp, setOtp] = useState(Array(6).fill(''));
    const [otpMsg, setOtpMsg] = useState('');
    const {user, setUser} = useContext(UserAuthContext); 
    const [verifyEmail, setVerifyEmail] = useState(false);
    const navigate = useNavigate();
    
    async function submitHandler(e : FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const otpJoint = otp.join('');
        const email = user.email || localStorage.getItem("email");

        if(otpJoint.length !== 6) {
            setOtpMsg("Must Fill All Fields.");
            return;
        }

        setOtpMsg("");

        try {
                await axiosInstance.post('/verify-otp', {
                    email : email,
                    otp : otpJoint
                });

                setUser({firstName : "", secondName : "", email : "", password : "", confirmPassword : ""});
                setVerifyEmail(true);
            }
        catch (error) {
            if(axios.isAxiosError(error)) {
                const errorMsg = error.response?.data.msg;
                if(errorMsg === "User already verified") {
                    navigate("/auth/login");
                }
                else if(errorMsg === "OTP expired") {
                    setOtpMsg(`${errorMsg}.`);
                }
                else if(errorMsg === "Invalid OTP") {
                    setOtpMsg(`${errorMsg}.`);
                }
            }
            else {
                throw new Error("Failed to send data");
            }
        }
    }

    const handleRequestOTP = async () => {
        axiosInstance.post("/request-otp", {
            email: user.email
        }, {timeout: 10000})

    }
    

    return (
        <Card>
            {verifyEmail ? (
                <SuccessMessagePage title={
                    <>
                        Email Verified <br /> Successfully!
                    </>
                }/>
            ) : (
                <div className="flex flex-col items-center gap-8 p-0 sm:px-10">
                    <Header title="An Email sent" content="Check if an email has been sent"/>
                    <Form submitHandler={submitHandler}>
                        <OTPInput otpMsg={otpMsg} otp={otp} setOtp={setOtp}/>
                        <SubmitButton>Confirm</SubmitButton>
                        <button onClick={handleRequestOTP} className="cursor-pointer text-gray-600 ms-2 hover:text-gray-400 transition-colors delay-100">Send another email</button>
                    </Form>
                </div>
            )}
        </Card>
    )
}