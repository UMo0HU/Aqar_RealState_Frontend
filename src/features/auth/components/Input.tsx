import type { FC, ReactNode, ChangeEvent, FocusEvent } from "react";
import { useContext, useState } from 'react';

import { FormContext } from "@/context/FormContext";

import { validateEmail, validateName, validatePassword } from "@/utils/authValidator";

import viewPassword from '@/assets/view.png';
import hidePassword from '@/assets/hide.png';

const Input : FC<{type : string, id : string, children : ReactNode | undefined}> = (props) => {
    const {user, inputErrors, setUser, setInputErrors} = useContext(FormContext);
    const [revealPassword, setRevealPassword] = useState(false);

    // For every input except fullname, the field key matches props.id directly
    const fieldValue = user[props.id as keyof typeof user];

    function revealPasswordHandler() {
        setRevealPassword(prev => !prev);
    }

    function inputHandler(id : string, event : ChangeEvent<HTMLInputElement>) {
        setUser(prev => ({...prev, [id]: event.target.value}));
    }

    function inputValidator(id : string, event : FocusEvent<HTMLInputElement>) {
        const inputValue = event.target.value;

        if (id === "email") {
            if (!validateEmail(inputValue)) {
                setInputErrors(prev => ({...prev, email_msg: "Enter a valid email (e.g., example@gmail.com)"}));
            } else {
                setInputErrors(prev => ({...prev, email_msg: ""}));
            }
        }

        if (id === "firstName") {
            if (!validateName(inputValue)) {
                setInputErrors(prev => ({...prev, firstname_msg: "Firstname must be 2–30 alphabetic characters only."}));
            } else {
                setInputErrors(prev => ({...prev, firstname_msg: ""}));
            }
        }

        if (id === "secondName") {
            if (!validateName(inputValue)) {
                setInputErrors(prev => ({...prev, secondname_msg: "Lastname must be 2–30 alphabetic characters only."}));
            } else {
                setInputErrors(prev => ({...prev, secondname_msg: ""}));
            }
        }

        if (id === "password") {
            if (!validatePassword(inputValue)) {
                setInputErrors(prev => ({...prev, password_msg: "Use 8–16 characters with at least 1 uppercase, 1 lowercase, 1 number & 1 symbol, and with no space."}));
            } else {
                setInputErrors(prev => ({...prev, password_msg: ""}));
            }
        }

        if (id === "confirmPassword") {
            if (inputValue !== user.password) {
                setInputErrors(prev => ({...prev, confirm_password_msg: "Passwords must match."}));
            } else {
                setInputErrors(prev => ({...prev, confirm_password_msg: ""}));
            }
        }
    }

    return (
        <div className="flex flex-col">

            {/* ── Regular text / email inputs ─────────────────────────── */}
            {props.type !== "password" && props.id !== "fullname" && (
                <>
                    <label htmlFor={props.id} className="text-xl">{props.children}</label>
                    <input
                        type={props.type}
                        id={props.id}
                        placeholder={String(props.children)}
                        className={`border-b-2 sm:w-xs text-lg py-1 px-2 ${inputErrors.email_msg ? "border-red-500" : ""}`}
                        onChange={(e) => inputHandler(props.id, e)}
                        onBlur={(e) => inputValidator(props.id, e)}
                        value={fieldValue || ""}
                        required
                    />
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">{inputErrors.email_msg}</p>
                </>
            )}

            {/* ── Password inputs ─────────────────────────────────────── */}
            {props.type === "password" && (
                <>
                    <label htmlFor={props.id} className="text-xl">{props.children}</label>
                    <div className="relative">
                        <input
                            type={revealPassword ? "text" : props.type}
                            id={props.id}
                            placeholder={String(props.children)}
                            className={`border-b-2 sm:w-xs text-lg py-1 px-2
                                ${(inputErrors.password_msg && props.id === "password")
                                || (inputErrors.confirm_password_msg && props.id === "confirmPassword") ? "border-red-500" : ""}`}
                            onChange={(e) => inputHandler(props.id, e)}
                            onBlur={(e) => inputValidator(props.id, e)}
                            value={fieldValue || ""}
                            required
                        />
                        <img
                            src={revealPassword ? hidePassword : viewPassword}
                            alt={revealPassword ? "hide password" : "view password"}
                            onClick={revealPasswordHandler}
                            className="absolute top-1/2 -translate-y-1/2 right-2 w-6 hover:cursor-pointer"
                        />
                    </div>
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">
                        {props.id === "password" ? inputErrors.password_msg : inputErrors.confirm_password_msg}
                    </p>
                </>
            )}

            {/* ── Full name (firstName + secondName) ──────────────────── */}
            {props.id === "fullname" && (
                <>
                    <label htmlFor="firstName" className="text-xl">{props.children}</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type={props.type}
                            id="firstName"
                            placeholder="First Name"
                            className={`border-b-2 sm:w-39 text-lg py-1 px-2 ${inputErrors.firstname_msg ? "border-red-500" : ""}`}
                            onChange={(e) => inputHandler("firstName", e)}
                            onBlur={(e) => inputValidator("firstName", e)}
                            value={user.firstName || ""}
                            required
                        />
                        <input
                            type={props.type}
                            id="secondName"
                            placeholder="Last Name"
                            className={`border-b-2 sm:w-39 text-lg py-1 px-2 ${inputErrors.secondname_msg ? "border-red-500" : ""}`}
                            onChange={(e) => inputHandler("secondName", e)}
                            onBlur={(e) => inputValidator("secondName", e)}
                            value={user.secondName || ""}
                            required
                        />
                    </div>
                    <p className="text-red-500 mt-0.5 font-semibold text-xs sm:w-80 w-56">
                        {inputErrors.firstname_msg || inputErrors.secondname_msg}
                    </p>
                </>
            )}

        </div>
    );
}

export default Input;