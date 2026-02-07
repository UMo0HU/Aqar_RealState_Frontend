import type { FC } from "react";

const Header : FC<{title : string, content : string}> = (props) => {
    return  <header className="flex flex-col text-center mb-5 gap-2">
                <h1 className="text-3xl sm:text-5xl font-semibold">{props.title}</h1>
                <p className="text-lg sm:text-xl">{props.content}</p>
            </header>
}

export default Header;