import {StyledTitle, Avatar, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormButton, AvatarLittle} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

//icono perfil
import icono_perfil from './../assets/icono_perfil.webp';

import Axios from 'axios';

import React, { useEffect, useState } from "react";

const Perfil = () => {
    const [NombreIn, setNombreIn] = useState('');
    const [ApellidoIn, setApellidoIn] = useState('');
    const [EmailIn, setEmailIn] = useState('');
    const [ContraseñaIn, setContraseñaIn] = useState('');

    const [InicioStatus, setInicioStatus] = useState('');
    const [InicioStatusN, setInicioStatusN] = useState('');
    const [InicioStatusA, setInicioStatusA] = useState('');
    
    /* useEffect(() => {
    Axios.post("http://localhost:3001/inicio").then((response) => {
                setInicioStatus(response.data[0].Email)
                setInicioStatusN(response.data[0].Nombre)
                setInicioStatusA(response.data[0].Apellido)
        });
    }); */


    return(
        <div>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Mi Perfil
                </StyledTitle>
                <Avatar image={icono_perfil} />
                <StyledSubTitle size={30}> 
                    <p>Deisy Arrieta</p>
                    <p>dparrietar@eafit.edu.co</p>
                    {/* <p>{InicioStatusN} {InicioStatusA}</p>
                    <p>{InicioStatus}</p> */}
                </StyledSubTitle>
                <StyledFormArea background-color={colors.gray}> Reportes Y Calificaciones hechas </StyledFormArea>
                <ButtonPosition>
                <StyledFormButton to='/Inicio'>
                    Cerrar sesión
                </StyledFormButton>
                </ButtonPosition>
            </StyledFormArea>
        </div>
    );
}

export default Perfil;