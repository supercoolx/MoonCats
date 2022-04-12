import { createContext, useContext, useState } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [address, setAddress] = useState(null);
    return (
        <AuthContext.Provider value={{ address, setAddress }}>
            {children}
        </AuthContext.Provider>
    )
}