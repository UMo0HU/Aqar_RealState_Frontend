import { setAuthToken } from '@/api/tokenStore';
import { createContext, useContext, useState, type ReactNode } from 'react';

type AuthUserType = {
    id: string;
    firstName: string;
    secondName: string;
    email: string;
}

interface AuthContextInterface {
    userInfo: AuthUserType | null;
    token: string | null;
    isAuthenticated: boolean;
    login: (user: AuthUserType, token: string) => void;
    logout: () => void;
}

export const AuthContext = createContext<AuthContextInterface>(null!);

export function AuthContextProvider({ children }: {children: ReactNode}) {
    const [token, setToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<AuthUserType | null>(null);

    function login(user: AuthUserType, token: string) {
        setUserInfo(user);
        setToken(token);
        setAuthToken(token);
    }

    function logout() {
        setUserInfo(null);
        setToken(null);
        setAuthToken(null);
    }

    return (
        <AuthContext.Provider 
        value={{
            userInfo,
            token,
            isAuthenticated: !!token,
            login,
            logout,
        }}>
            {children}
        </AuthContext.Provider>
    );
    
}

export const useAuth = () => useContext(AuthContext);