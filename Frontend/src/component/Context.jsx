import { createContext, useContext, useState } from 'react';

const LoginContext = createContext();
export function useLogin(){
    return useContext(LoginContext)
}

const LoginProvider = ({ children }) => {
    let [LoggedIn, setLoggedIn] = useState(false);
    const checkLogin =(data)=>{
        setLoggedIn(data)
    }

    return (
        <LoginContext.Provider 
            value={{LoggedIn, checkLogin} }
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;