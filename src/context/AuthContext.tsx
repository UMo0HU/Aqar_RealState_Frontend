import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

import { setAuthToken }                    from "@/api/tokenStore";
import { connectSocket, disconnectSocket } from "@/api/socket";
import { saveAuth, loadAuth, clearAuth }   from "@/utils/authStorage";
import { logout as apiLogout }             from "@/services/authService";

type AuthUserType = {
  id: string;
  firstName: string;
  secondName: string;
  email: string;
};

interface AuthContextInterface {
  userInfo: AuthUserType | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: AuthUserType, token: string) => void;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextInterface>(null!);

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const stored = loadAuth();
  const [token,    setToken]    = useState<string | null>(stored?.token ?? null);
  const [userInfo, setUserInfo] = useState<AuthUserType | null>(stored?.user ?? null);

  // On page refresh — restore axios token and reconnect socket if session exists
  useEffect(() => {
    if (stored?.token) {
      setAuthToken(stored.token);
      connectSocket(stored.token);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function login(user: AuthUserType, token: string) {
    setUserInfo(user);
    setToken(token);
    setAuthToken(token);
    saveAuth(token, user);
    connectSocket(token);
  }

  async function logout() {
    try {
      await apiLogout();
    } catch {
      // still clear client state even if API call fails
    } finally {
      setUserInfo(null);
      setToken(null);
      setAuthToken(null);
      clearAuth();
      disconnectSocket();
      navigate("/");
    }
  }

  return (
    <AuthContext.Provider
      value={{ userInfo, token, isAuthenticated: !!token, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);