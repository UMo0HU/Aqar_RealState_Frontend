import type { FC, ReactNode } from "react";

import { useState } from 'react';

import viewPassword from '../../assets/view.png';
import hidePassword from '../../assets/hide.png';

const Input : FC<{type : string, id : string, children : ReactNode | undefined}> = (props) => {
    const [revealPassword, setRevealPassword] = useState(false);

    function revealPasswordHandler() {
        setRevealPassword(prev => !prev);
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
                        className="border-b-2 sm:w-xs text-lg py-1 px-2"
                    />         
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
                            className="border-b-2 sm:w-xs text-lg py-1 px-2"
                        />         
                        <img 
                            src={revealPassword ? hidePassword : viewPassword} 
                            alt={revealPassword ? "hide password" : "view password"} 
                            onClick={revealPasswordHandler} 
                            className="absolute top-1/2 -translate-y-1/2 right-2 w-6 hover:cursor-pointer"
                        />
                    </div>
                </>
            )}
            {props.id === "fullname" && (
                <>
                    <label htmlFor="firstname" className="text-xl">{props.children}</label>
                    <div className="flex flex-col sm:flex-row gap-3">
                        <input 
                            type={props.type} 
                            id="firstname" placeholder="First Name"
                            className="border-b-2 sm:w-39 text-lg py-1 px-2"
                        />         
                        <input 
                            type={revealPassword ? "text" : props.type} 
                            id="lastname" placeholder="Last Name"
                            className="border-b-2 sm:w-39 text-lg py-1 px-2"
                        />         
                    </div>
                </>
            )}
        </div>

    );
}

export default Input;