import type { FC, ReactNode } from "react";

const Card : FC<{children : ReactNode}> = (props) => {
    return <div className="flex flex-col justify-center items-center h-dvh">
        <section className="flex flex-col bg-gray-100 rounded-3xl py-10 px-10 sm:px-20 shadow border border-gray-200">{props.children}</section>
    </div>
}

export default Card;