import {StyledTitle, ExtraText, TextLinkT, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormArea2, StyledFormButton2, StyledFormButton, AvatarLittle, StyledContainer, ExtraTextSub, StyledAreaObject} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

//icono perfil
import icono_perfil from './../assets/icono_perfil.webp';

//Iconos
import {FaSearchLocation} from 'react-icons/fa';

import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';

import Axios from 'axios';

import React, { useEffect, useState } from "react";

const Recomendados = () => {

    const [NombreLugar, setNombreLugar] = useState('');
    const [TipoLugar, setTipoLugar] = useState('');
    const [Calificación, setCalificación] = useState('');
    const [Reporte, setReporte] = useState('');
    const [Descripción, setDescripción] = useState('');
    const [Lugares, setLugares] = useState([]);

    const [BusquedaStatus, setBusquedaStatus] = useState('');
    const [BusquedaStatus2, setBusquedaStatus2] = useState('');
    const [BusquedaStatus3, setBusquedaStatus3] = useState('');
    const [BusquedaStatus4, setBusquedaStatus4] = useState('');
    const [BusquedaStatus5, setBusquedaStatus5] = useState('');
    const [BusquedaStatusN, setBusquedaStatusN] = useState('');
    const [BusquedaStatusT, setBusquedaStatusT] = useState('');
    const [BusquedaStatusC, setBusquedaStatusC] = useState('');
    const [BusquedaStatusR, setBusquedaStatusR] = useState('');
    const [BusquedaStatusD, setBusquedaStatusD] = useState('');

    useEffect ( () => {
        Axios.get("http://localhost:3001/recomendados").then((response) => {
            setLugares(response.data)
            setBusquedaStatus(response.data[0].Nombre)
            setBusquedaStatus2(response.data[1].Nombre)
            setBusquedaStatus3(response.data[2].Nombre)
            setBusquedaStatus4(response.data[3].Nombre)
            setBusquedaStatus5(response.data[4].Nombre)
        });
    }, []);

    const busqueda = () => {
        Axios.get("http://localhost:3001/recomendados").then((response) => {
                if (NombreLugar == BusquedaStatus){
                    setBusquedaStatusN(response.data[0].Nombre)
                    setBusquedaStatusT(response.data[0].Tipo_de_lugar)
                    setBusquedaStatusC(response.data[0].Calificación)
                    setBusquedaStatusR(response.data[0].Reporte)
                    setBusquedaStatusD(response.data[0].Descripción)
                } if (NombreLugar == BusquedaStatus2){
                    setBusquedaStatusN(response.data[1].Nombre)
                    setBusquedaStatusT(response.data[1].Tipo_de_lugar)
                    setBusquedaStatusC(response.data[1].Calificación)
                    setBusquedaStatusR(response.data[1].Reporte)
                    setBusquedaStatusD(response.data[1].Descripción) 
                } if (NombreLugar == BusquedaStatus3){
                    setBusquedaStatusN(response.data[2].Nombre)
                    setBusquedaStatusT(response.data[2].Tipo_de_lugar)
                    setBusquedaStatusC(response.data[2].Calificación)
                    setBusquedaStatusR(response.data[2].Reporte)
                    setBusquedaStatusD(response.data[2].Descripción)
                } if (NombreLugar == BusquedaStatus4){
                    setBusquedaStatusN(response.data[3].Nombre)
                    setBusquedaStatusT(response.data[3].Tipo_de_lugar)
                    setBusquedaStatusC(response.data[3].Calificación)
                    setBusquedaStatusR(response.data[3].Reporte)
                    setBusquedaStatusD(response.data[3].Descripción)
                } if (NombreLugar == BusquedaStatus5){
                    setBusquedaStatusN(response.data[4].Nombre)
                    setBusquedaStatusT(response.data[4].Tipo_de_lugar)
                    setBusquedaStatusC(response.data[4].Calificación)
                    setBusquedaStatusR(response.data[4].Reporte)
                    setBusquedaStatusD(response.data[4].Descripción)
                } 
            });
            } 

    /* const busqueda = () => {
        Axios.post("http://localhost:3001/busqueda", {
            Nombre: NombreLugar
        }).then((response) => {
            if(response.data.message){
                setInicioStatusN(response.data.message)
                /*setInicioStatusT(response.data.message)
                setInicioStatusC(response.data.message)
                setInicioStatusR(response.data.message)
                setInicioStatusD(response.data.message)
            }else{
                setInicioStatusN(response.data[0].Nombre)
                setInicioStatusT(response.data[0].Tipo_de_lugar)
                setInicioStatusC(response.data[0].Calificación)
                setInicioStatusR(response.data[0].Reporte)
                setInicioStatusD(response.data[0].Descripción)
            }
        });
    } */ 

    return(
        <div>
            <StyledFormArea2 background-color={colors.green}>
                <Formik>
                    {() => (
                        <Form>
                            <TextInput
                                name='busqueda'
                                type='text'
                                label='Búsqueda'
                                placeholder='Lugar'
                                icon={<FaSearchLocation/>}
                                onChange={(e) => {
                                    setNombreLugar(e.target.value);
                                }}  
                            />
                            <ButtonPosition>
                                <StyledFormButton2 onClick={busqueda}>
                                Buscar
                                </StyledFormButton2>
                            </ButtonPosition>
                            <AvatarLittle image={logo} />
                        </Form>
                    )}
                </Formik>
            </StyledFormArea2>
            <StyledFormArea>
            <StyledAreaObject>
                        <TextLinkT to="/Lugar">{BusquedaStatusN}</TextLinkT>
                        <StyledSubTitle>{BusquedaStatusT}</StyledSubTitle>
                        <ExtraTextSub>Calificación: </ExtraTextSub><ExtraText>{BusquedaStatusC}</ExtraText>
                        <ExtraTextSub>Reportes presentados en la zona: </ExtraTextSub><ExtraText>{BusquedaStatusR}</ExtraText>
                        <ExtraText>{BusquedaStatusD}</ExtraText>
                        </StyledAreaObject>
            </StyledFormArea>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Recomendados
                </StyledTitle>
                <StyledSubTitle size={20}>
                    Aquí podrá ver las zonas mejores calificadas por los usuarios de la plataforma
                </StyledSubTitle>
            </StyledFormArea>

            <StyledFormArea>
            <div>
            {Lugares.map((val) => {
                    return <StyledAreaObject>
                        <TextLinkT to="/Lugar">{val.Nombre}</TextLinkT>
                        <StyledSubTitle>{val.Tipo_de_lugar}</StyledSubTitle>
                        <ExtraTextSub>Calificación: </ExtraTextSub><ExtraText>{val.Calificación}</ExtraText>
                        <ExtraTextSub>Reportes presentados en la zona: </ExtraTextSub><ExtraText>{val.Reporte}</ExtraText>
                        <ExtraText>{val.Descripción}</ExtraText>
                        </StyledAreaObject>
            })}
                </div>
            </StyledFormArea>
        </div>
    );
}

export default Recomendados;