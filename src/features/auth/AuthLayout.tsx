import { Outlet } from "react-router"
import { FormContextProvider } from "@/context/FormContext"

const AuthLayout = () => {
    return (
        <FormContextProvider>
            <Outlet />
        </FormContextProvider>
    )
}

export default AuthLayout;