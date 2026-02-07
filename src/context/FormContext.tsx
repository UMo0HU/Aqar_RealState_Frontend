import type { ReactNode, SetStateAction, Dispatch } from "react"
import { createContext, useState } from 'react'

type UserType = {
    firstName : string,
    secondName : string,
    email : string,
    password : string,
    confirmPassword : string,
}

type InputErrorsType = {
    firstname_msg : string,
    secondname_msg : string,
    email_msg : string,
    password_msg : string,
    confirm_password_msg : string,
}

interface FormContextInterface {
    user: UserType;
    inputErrors: InputErrorsType;
    setUser: Dispatch<SetStateAction<UserType>>;
    setInputErrors: Dispatch<SetStateAction<InputErrorsType>>;
}

const defaultState = {
    user : {
        firstName : '',
        secondName : '',
        email : '',
        password : '',
        confirmPassword : '',
    },
    inputErrors : {
        firstname_msg: "",
        secondname_msg: "",
        email_msg: "",
        password_msg: "",
        confirm_password_msg: ""
    },
    setUser : (user : UserType) => {user},
    setInputErrors : (inputErrors : InputErrorsType) => {inputErrors} 
} as FormContextInterface;

export const FormContext = createContext<FormContextInterface>(defaultState);

export const FormContextProvider = ({ children } : {children: ReactNode}) => {
    const [user, setUser] = useState<UserType>(defaultState["user"]);
    const [inputErrors, setInputErrors] = useState<InputErrorsType>(defaultState["inputErrors"]);
    
    return (
        <FormContext.Provider 
        value={{ 
            user, 
            inputErrors, 
            setUser, 
            setInputErrors,
        }}>
            {children}
        </FormContext.Provider>
    );
}