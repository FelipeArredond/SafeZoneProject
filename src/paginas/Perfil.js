import {StyledTitle, Avatar, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormButton} from "./../componentes/styles";
import icono_perfil from './../assets/icono_perfil.webp';
import React, {useState } from "react";
import { useContext } from "react";
import { authContext } from "../context/authContext";

const Perfil = () => {
    
    const {authData, setAuthData} = useContext(authContext)

    function logOut(){
        setAuthData({
            nombre: '',
            apellido: '',
            correo: '',
            auth: false
        })
    }

    return(
        <div>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Mi Perfil
                </StyledTitle>
                <Avatar image={icono_perfil} />
                <StyledSubTitle size={30}> 
                    <p>{authData.nombre || 'No name'}</p>
                    <p>{authData.correo || 'No email'}</p>
                </StyledSubTitle>
                <StyledFormArea background-color={colors.gray}> Reportes Y Calificaciones hechas </StyledFormArea>
                <ButtonPosition>
                <StyledFormButton  onClick={logOut} to='/Inicio'>
                    Cerrar sesión
                </StyledFormButton>
                </ButtonPosition>
            </StyledFormArea>
        </div>
    );
}

export default Perfil;