import type { FC, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import checkMark from "@/assets/verify.png";

const SuccessMessagePage : FC<{title : ReactNode}> = ({ title }) => {
    const navigate = useNavigate();
    
    return (
        <div className="flex flex-col items-center gap-10 p-0 sm:px-10">
            <img src={checkMark} alt="check mark" className="w-32"/>
            <h1 className="text-3xl sm:text-5xl font-semibold text-center">{title}</h1>
            <button onClick={() => navigate("/auth/login")}
                className={`bg-gray-600 text-white text-xl "w-full" p-2 rounded-lg shadow hover:cursor-pointer hover:scale-95 transition-all delay-75`}>
                Return to login page
            </button>
        </div>
    )
}

export default SuccessMessagePage;