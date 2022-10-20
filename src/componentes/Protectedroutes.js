import { useContext } from "react";
import { authContext } from "../context/authContext";
import { Redirect } from "react-router-dom";

export default function Protectedroutes({children}){
    const {authData} = useContext(authContext)
    if(!authData.auth){
        return <Redirect to={'/Inicio'}/>
    }
    return children
}