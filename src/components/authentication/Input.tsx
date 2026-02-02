import type { FC, ReactNode, ChangeEvent, FocusEvent } from "react";
import { useContext, useState } from 'react';

import { UserAuthContext } from "../../context/userAuthContext";

import viewPassword from '../../assets/view.png';
import hidePassword from '../../assets/hide.png';

const Input : FC<{type : string, id : string, children : ReactNode | undefined}> = (props) => {
    const {user, inputErrors, setUser, setInputErrors} = useContext(UserAuthContext);
    const [revealPassword, setRevealPassword] = useState(false);
    
    // Reveal Password Button:
    function revealPasswordHandler() {
        setRevealPassword(prev => !prev);
    }


    // Get User Data From Inputs:
    function inputHandler(id : string, event : ChangeEvent<HTMLInputElement>) {
        setUser(prev => ({...prev, [id]: event.target.value}));
    }

    // Validate Data After Leaving Input Field:
    function inputValidator(id : string, event : FocusEvent<HTMLInputElement>) {
        const inputValue = event.target.value;

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const nameRegex = /^[a-zA-Z]+$/
        const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/

        if(id === "email") {
            if(!(inputValue).match(emailRegex)) {
                setInputErrors(prev => ({...prev, email_msg : "Enter a valid email (e.g., example@gmail.com)"}));
            }
            else {
                setInputErrors(prev => ({...prev, email_msg : ""}))
            }
        }

        if((id === "firstName" || id === "secondName")) {

            if((inputValue).match(nameRegex) && (inputValue.length > 1 && inputValue.length < 31)) {
                setInputErrors(prev => ({...prev, firstname_msg : ""}));
            }
            else {
                setInputErrors(prev => ({...prev, firstname_msg : "Firstname and Lastname must be 2–30 alphabetic characters only."}));
            }
        }

        if(id === "secondName") {
            if((inputValue).match(nameRegex) && (inputValue.length > 1 && inputValue.length < 31)) {
                setInputErrors(prev => ({...prev, secondname_msg : ""}));
            }
            else {
                setInputErrors(prev => ({...prev, secondname_msg : "Firstname and Lastname must be 2–30 alphabetic characters only."}));
            }
        }

        if((id === "password")) {
            if(!(inputValue).match(passwordRegex)) {
                setInputErrors(prev => ({...prev, password_msg : "Use 8–16 characters with at least 1 uppercase, 1 lowercase, 1 number & 1 symbol, and with no space."}));
            }
            else {
                setInputErrors(prev => ({...prev, password_msg : ""}))
            }
        }

    
        if((id === "confirmPassword")) {
            if(!(inputValue === user.password)) {
                setInputErrors(prev => ({...prev, confirm_password_msg : "Passwords must match."}));
            }
            else {
                setInputErrors(prev => ({...prev, confirm_password_msg : ""}))
            }
        }
    }

    return (
        <div className="flex flex-col">
            {props.type !== "password" && props.id !== "fullname" && (
                <>
                    <label 
                        htmlFor={props.id} 
                        className="text-xl">{props.children}</label>
                    <input 
                        type={props.type}
                        id={props.id} 
                        placeholder={String(props.children)} 
                        className={`border-b-2 sm:w-xs text-lg py-1 px-2 ${inputErrors.email_msg ? "border-red-500" : ""}`}
                        onChange={(e) => inputHandler(props.id, e)}
                        onBlur={(e) => inputValidator(props.id, e)}
                        value={user.email}
                        required
                    />  
                    <p className={`text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56`}>{inputErrors.email_msg}</p>      
                </>
            )}
            {props.type === "password" && (
                <>
                    <label 
                        htmlFor={props.id} 
                        className="text-xl">{props.children}</label>
                    <div className="relative">
                        <input 
                            type={revealPassword ? "text" : props.type} 
                            id={props.id} 
                            placeholder={String(props.children)} 
                            className={`border-b-2 sm:w-xs text-lg py-1 px-2 
                                ${(inputErrors.password_msg && props.id === "password") 
                                || (inputErrors.confirm_password_msg && props.id === "confirmPassword") ? " border-red-500" : ""}`}
                            onChange={(e) => inputHandler(props.id, e)}
                            onBlur={(e) => inputValidator(props.id, e)}
                            value={props.id === 'password' ? user.password : user.confirmPassword}
                            required
                        />         
                        <img 
                            src={revealPassword ? hidePassword : viewPassword} 
                            alt={revealPassword ? "hide password" : "view password"} 
                            onClick={revealPasswordHandler} 
                            className="absolute top-1/2 -translate-y-1/2 right-2 w-6 hover:cursor-pointer"
                        />
                    </div>
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">{props.id === 'password' ? inputErrors.password_msg : inputErrors.confirm_password_msg}</p>      
                </>
            )}
            {props.id === "fullname" && (
                <>
                    <label htmlFor="firstName" className="text-xl">{props.children}</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type={props.type} 
                            id="firstName" placeholder="First Name"
                            className={`border-b-2 sm:w-39 text-lg py-1 px-2 ${inputErrors.firstname_msg ? " border-red-500" : ""}`}
                            onChange={(e) => inputHandler(e.target.id, e)}
                            onBlur={(e) => inputValidator(e.target.id, e)}
                            value={user.firstName}
                            required
                        />         
                        <input 
                            type={props.type} 
                            id="secondName" placeholder="Last Name"
                            className={`border-b-2 sm:w-39 text-lg py-1 px-2 ${inputErrors.secondname_msg ? " border-red-500" : ""}`}
                            onChange={(e) => inputHandler(e.target.id, e)}
                            onBlur={(e) => inputValidator(e.target.id, e)}
                            value={user.secondName}
                            required
                        />         
                    </div>
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">{inputErrors.firstname_msg ? inputErrors.firstname_msg : inputErrors.secondname_msg}</p>
                </>
            )}
        </div>

    );
}

export default Input;