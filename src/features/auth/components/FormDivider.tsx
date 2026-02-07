import type { FC, ReactNode } from "react";

const FormDivider : FC<{children : ReactNode}> = (props) => {
    return (
        <div className="relative w-full sm:w-[350px] flex pt-2 items-center">
            <div className="grow border-t-2 border-gray-900"></div>
            <span className="shrink mx-2">{props.children}</span>
            <div className="grow border-t-2 border-gray-900"></div>
        </div>
    );
} 

export default FormDivider;