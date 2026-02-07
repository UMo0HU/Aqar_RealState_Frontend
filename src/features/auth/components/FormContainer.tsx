import type { FC, ReactNode } from "react";


const FormContainer : FC<{children : ReactNode}> = (props) => {
    return <section className="flex flex-col justify-center items-center h-dvh">
        {props.children}
    </section>
}

export default FormContainer;