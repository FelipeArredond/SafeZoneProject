import { createContext, useState } from "react";

export const hoodsContext = createContext()

export default function HoodsProvider({children}){

    const [hoods, setHoods] = useState([]);
    
    return <hoodsContext.Provider value={{hoods,setHoods}}>{children}</hoodsContext.Provider>

}