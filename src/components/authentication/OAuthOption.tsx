import type { FC } from "react";

const OAuthOptions : FC<{src : string, alt : string}> = (props) => {
    return (
        <div className="w-1/3 bg-gray-100 rounded-xl shadow-[0px_1px_2px_0px_#1018280D] py-3 hover:cursor-pointer hover:scale-105">
            <img src={props.src} alt={props.alt} className="w-8 m-auto "/>
        </div>
    );
}

export default OAuthOptions;