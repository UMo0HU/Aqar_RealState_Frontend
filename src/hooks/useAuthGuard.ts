import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { isAuthExpired } from "@/utils/authStorage";

export const useAuthGuard = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    if (isAuthenticated && isAuthExpired()) {
      logout();
    }
  }, [location.pathname]);
};