import type { FC, ReactNode } from "react";


const Form : FC<{children : ReactNode}> = (props) => {
    return <form className="flex flex-col gap-4 items-center">
        {props.children}
    </form>
}

export default Form;