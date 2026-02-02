import type { ReactNode, FC, SetStateAction, Dispatch } from "react"
import { createContext, useState } from 'react'

export type User = {
    firstName : string,
    secondName : string,
    email : string,
    password : string,
    confirmPassword : string,
}

export type InputErrors = {
    firstname_msg : string,
    secondname_msg : string,
    email_msg : string,
    password_msg : string,
    confirm_password_msg : string,
}

export interface UserContextInterface {
    user : User,
    setUser : Dispatch<SetStateAction<User>>,
    inputErrors : InputErrors,
    setInputErrors : Dispatch<SetStateAction<InputErrors>>
}

const defaultState = {
    user : {
        firstName : '',
        secondName : '',
        email : '',
        password : '',
        confirmPassword : '',
    },
    inputErrors : {},
    setUser : (user : User) => {user},
    setInputErrors : (inputErrors : InputErrors) => {inputErrors} 
} as UserContextInterface;

const UserAuthContext = createContext<UserContextInterface>(defaultState);

const UserAuthContextProvider : FC<{ children : ReactNode }> = (props) => {
    const [user, setUser] = useState<User>(defaultState["user"]);
    const [inputErrors, setInputErrors] = useState<InputErrors>(defaultState["inputErrors"]);
    
    return (
        <UserAuthContext.Provider value={{ user, inputErrors, setUser, setInputErrors}}>
            {props.children}
        </UserAuthContext.Provider>
    );
}

export { UserAuthContext, UserAuthContextProvider }