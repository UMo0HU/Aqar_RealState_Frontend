import type { ReactNode } from "react";
import { useNavigate } from "react-router";

import { useAuth } from "@/context/AuthContext";

const ProtectedRoute = ({ children }: {children: ReactNode} ) => {
    const { token } = useAuth();
    const navigate = useNavigate();

    if(!token) return navigate("/auth/login");

    return children;
}

export default ProtectedRoute;