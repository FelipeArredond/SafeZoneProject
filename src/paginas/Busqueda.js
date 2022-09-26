import {StyledTitle, ExtraText, TextLinkT, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormArea2, StyledFormButton2, StyledFormButton, AvatarLittle, StyledContainer, ExtraTextSub, StyledAreaObject} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

//icono perfil

//Iconos
import {FaSearchLocation} from 'react-icons/fa';

import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';
import React, { useEffect, useState } from "react";

const Recomendados = () => {

    const [NombreLugar, setNombreLugar] = useState('');
    const [TipoLugar, setTipoLugar] = useState('');
    const [Calificación, setCalificación] = useState('');
    const [Reporte, setReporte] = useState('');
    const [Descripción, setDescripción] = useState('');
    const [Lugares, setLugares] = useState([]);
    const [allLugares, setAllLugares] = useState([]);

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
        // Axios.get("http://localhost:3001/recomendados").then((response) => {
        //     setLugares(response.data)
        //     setBusquedaStatus(response.data[0].Nombre)
        //     setBusquedaStatus2(response.data[1].Nombre)
        //     setBusquedaStatus3(response.data[2].Nombre)
        //     setBusquedaStatus4(response.data[3].Nombre)
        //     setBusquedaStatus5(response.data[4].Nombre)
        // });
        fetchAllLugares();
    }, []);

    const fetchAllLugares = async () =>{
        const res = await fetch('http://localhost:3001/lugares',{
            method: 'PUT'
        });
        const data = await res.json();
        setAllLugares(data);
    }

    const lugares = async() => {
        const res = await fetch(`http://localhost:3001/lugares?nombre=${NombreLugar}`,{
            method: 'GET'
        });
        const data = await res.json();
        console.log(data);
        setLugares(data)
    }

    // const busqueda = () => {
    //     Axios.get("http://localhost:3001/lugares").then((response) => {
    //             if (NombreLugar == BusquedaStatus){
    //                 setBusquedaStatusN(response.data[0].Nombre)
    //                 setBusquedaStatusT(response.data[0].Tipo_de_lugar)
    //                 setBusquedaStatusC(response.data[0].Calificación)
    //                 setBusquedaStatusR(response.data[0].Reporte)
    //                 setBusquedaStatusD(response.data[0].Descripción)
    //             } if (NombreLugar == BusquedaStatus2){
    //                 setBusquedaStatusN(response.data[1].Nombre)
    //                 setBusquedaStatusT(response.data[1].Tipo_de_lugar)
    //                 setBusquedaStatusC(response.data[1].Calificación)
    //                 setBusquedaStatusR(response.data[1].Reporte)
    //                 setBusquedaStatusD(response.data[1].Descripción) 
    //             } if (NombreLugar == BusquedaStatus3){
    //                 setBusquedaStatusN(response.data[2].Nombre)
    //                 setBusquedaStatusT(response.data[2].Tipo_de_lugar)
    //                 setBusquedaStatusC(response.data[2].Calificación)
    //                 setBusquedaStatusR(response.data[2].Reporte)
    //                 setBusquedaStatusD(response.data[2].Descripción)
    //             } if (NombreLugar == BusquedaStatus4){
    //                 setBusquedaStatusN(response.data[3].Nombre)
    //                 setBusquedaStatusT(response.data[3].Tipo_de_lugar)
    //                 setBusquedaStatusC(response.data[3].Calificación)
    //                 setBusquedaStatusR(response.data[3].Reporte)
    //                 setBusquedaStatusD(response.data[3].Descripción)
    //             } if (NombreLugar == BusquedaStatus5){
    //                 setBusquedaStatusN(response.data[4].Nombre)
    //                 setBusquedaStatusT(response.data[4].Tipo_de_lugar)
    //                 setBusquedaStatusC(response.data[4].Calificación)
    //                 setBusquedaStatusR(response.data[4].Reporte)
    //                 setBusquedaStatusD(response.data[4].Descripción)
    //             } 
    //         });
    //         } 

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
    }*/ 

    const mapAllLugares = () =>{
        return(
            allLugares.map((lugar)=>{
                return(
                    <StyledAreaObject key={lugar.ID_lugar}>
                        <StyledSubTitle>{lugar.Nombre}</StyledSubTitle>
                    </StyledAreaObject>
                );
            })
        );
    }

    const mapLugares = () => {
        return(
            Lugares.map((val) => {
                return <StyledAreaObject key={val.ID_lugar}>
                        <TextLinkT to="/Lugar">{val.Nombre}</TextLinkT>
                        <StyledSubTitle>{val.Tipo_de_lugar}</StyledSubTitle>
                        <ExtraTextSub>Calificación: </ExtraTextSub><ExtraText>{val.Calificación}</ExtraText>
                        <ExtraTextSub>Reportes presentados en la zona: </ExtraTextSub><ExtraText>{val.Reporte}</ExtraText>
                        <ExtraText>{val.Descripción}</ExtraText>
                    </StyledAreaObject>
            })
        );
    }

    return(
        <div>
            <StyledFormArea2 background-color={colors.green}>
                <Formik onSubmit={'submited'}>
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
                                <StyledFormButton onClick={lugares}>
                                Buscar
                                </StyledFormButton>
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
                            {/* <ExtraTextSub>Calificación: </ExtraTextSub><ExtraText>{BusquedaStatusC}</ExtraText>
                            <ExtraTextSub>Reportes presentados en la zona: </ExtraTextSub><ExtraText>{BusquedaStatusR}</ExtraText> */}
                            {Lugares.length > 0 ? mapLugares(): <StyledSubTitle>No hay lugares buscados!</StyledSubTitle>}
                        <ExtraText>{BusquedaStatusD}</ExtraText>
                        </StyledAreaObject>
            </StyledFormArea>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Barrios de Medellin
                </StyledTitle>
                {allLugares.length>0? mapAllLugares(): <h2>No hay Lugares</h2>}
            </StyledFormArea>
        </div>
    );
}

export default Recomendados;