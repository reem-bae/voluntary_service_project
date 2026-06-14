import { useState } from "react"
import { createContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(()=>{
           const saved = localStorage.getItem("userInfo");
    return saved ? JSON.parse(saved) : null;
    }
    )

    const login = (userdata) =>{
        console.log("AuthProvider received data:", userdata);
         setUser(userdata)
         localStorage.setItem("userInfo", JSON.stringify(userdata))
    }

    const logout = ()=> {
            setUser(null)
            localStorage.removeItem("userInfo")
        }
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}