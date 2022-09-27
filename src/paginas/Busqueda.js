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
    const [Lugares, setLugares] = useState([]);
    const [allLugares, setAllLugares] = useState([]);

    const [BusquedaStatusN, setBusquedaStatusN] = useState('');
    const [BusquedaStatusT, setBusquedaStatusT] = useState('');
    const [BusquedaStatusD, setBusquedaStatusD] = useState('');

    useEffect ( () => {
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