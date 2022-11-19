import {StyledTitle, Avatar, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormButton} from "./../componentes/styles";
import icono_perfil from './../assets/icono_perfil.webp';
import React, {useState, useEffect} from "react";
import { useContext } from "react";
import { authContext } from "../context/authContext";
import { serverURL } from "../App";

const Perfil = () => {
    
    const {authData, setAuthData} = useContext(authContext)

    const [reports, setReports] = useState([]);
    const [showReports, setShowReports] = useState(false);

    function logOut(){
        setAuthData({
            id: '',
            nombre: '',
            apellido: '',
            correo: '',
            auth: false
        })
    }

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: `{"id":"${authData.id}"}`
    };

    async function fetchReports(){
        const data = await fetch(serverURL+'usuarios/reports',options)
        const res = await data.json();
        console.log(res);
        setReports(res);
    }

    useEffect(()=>{
        fetchReports()
    },[])

    function renderReports(){
        if(reports.length > 0 && showReports){
            return(
                reports.map((reporte)=>{
                    return(
                        <div key={reporte._id} className={'reportBox'}>
                            <h3>{reporte.fecha?.substring(0,10) || 'No data'}</h3>
                            <h2>{reporte.tipo_reporte}</h2>
                            <p>{reporte.descripcion}</p>
                        </div>
                    );
                })
            );
        }else{
            return false
        }
    }

    function handleShowReports(){
        setShowReports(!showReports)
    }

    return(
        <div>
            <StyledFormArea bg={colors.white}>
                <StyledTitle size={40}>
                    Mi Perfil
                </StyledTitle>
                <Avatar image={icono_perfil} />
                <StyledSubTitle size={30}> 
                    <p>{authData.nombre || 'No name'}</p>
                    <p>{authData.correo || 'No email'}</p>
                </StyledSubTitle>
                <ButtonPosition>
                    <StyledFormButton  onClick={handleShowReports}>
                        Ver Reportes
                    </StyledFormButton>
                </ButtonPosition>
                <ButtonPosition>
                    <StyledFormButton  onClick={logOut} to='/Inicio'>
                        Cerrar sesión
                    </StyledFormButton>
                </ButtonPosition>
                {renderReports()}
            </StyledFormArea>
        </div>
    );
}

export default Perfil;