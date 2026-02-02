import type { FC, FormEvent, ReactNode } from "react";


const Form : FC<{submitHandler : (e : FormEvent<HTMLFormElement>) => void, children : ReactNode}> = (props) => {
    return (
        <form onSubmit={props.submitHandler} method="post" className="flex flex-col gap-4 items-center">
            {props.children}
        </form>
    )
}

export default Form;