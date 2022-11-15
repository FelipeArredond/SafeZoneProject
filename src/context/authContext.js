import { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthProvider({children}){
    const [authData, setAuthData] = useState({
        id: '',
        nombre: '',
        apellido: '',
        correo: '',
        auth: false
    })

    return <authContext.Provider value={{authData,setAuthData}}>{children}</authContext.Provider>
} 