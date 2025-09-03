import React, { createContext } from 'react';

interface ILoginContext {
    isLoggedIn: boolean ;
    handleLogin: () => void;
    handleLogout: () => void;
}

export const LoginContext = createContext({} as ILoginContext);

// Custom hook to use the LoginContext
export const useLoginContext = () => React.useContext(LoginContext)


type ILoginContextProvider = {
    children: React.ReactNode;
};



export function LoginContextProvider({ children }: ILoginContextProvider) {
    // This component will provide the login context to its children
    // It can include state and functions related to user authentication
    const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);
    const handleLogin = () => setIsLoggedIn(true);
    const handleLogout = () => setIsLoggedIn(false);

    return (
        <LoginContext.Provider value={{ isLoggedIn, handleLogin, handleLogout }}>
            {children}
        </LoginContext.Provider>
    );
}