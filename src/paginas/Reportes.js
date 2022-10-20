import {StyledTitle, ExtraText, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormArea2, StyledFormButton2, StyledFormButton, Avatar, StyledContainer, StyledAreaObject} from "./../componentes/styles";

//Iconos
import {RiAlarmWarningFill} from 'react-icons/ri';
import {MdDescription} from 'react-icons/md';

import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';

import imagen from './../assets/seguridad.png';

import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'
import { useRef } from "react";

const Reportes = () => {

    const barrio = useRef();
    const tipoActo = useRef();
    const descActo = useRef();
    const longitud = useRef();
    const latitud = useRef();

    async function handleForm(e){
        e.preventDefault();
        const postData = {
            "nombre_barrio": barrio.current.value,
            "tipo_reporte": tipoActo.current.value,
            "longitud": longitud.current.value,
            "latitud": latitud.current.value,
            "descripcion": descActo.current.value
        }
        const postDataJson = JSON.stringify(postData)
        const response = await fetch('http://localhost:3500/reportes/ ',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: postDataJson
        });
        const data = await response.json();
        console.log(data)
    }

    return(
        <div>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Reportes
                </StyledTitle>
                <StyledSubTitle size={20}>
                    Su seguridad es importante para nosostros,
                    <br />ya que el proposito de este sitio web es brindar
                    <br />información sobre la seguridad de la ciudad para su beneficio.
                    <Avatar image={imagen} />
                    <br />
                    Por ello esta sección le permite reportar en
                    <br />caso de ser victima de algún acto delictivo, o
                    <br />también en caso de ser testigo.
                    
                </StyledSubTitle>
            </StyledFormArea>

            <StyledFormArea>
                <form onSubmit={handleForm} className='reports-form'>
                    <label>Barrio</label>
                    <input type={'text'} placeholder={'Nombre del Barrio'} ref={barrio}></input>
                    <label>Tipo de acto</label>
                    <input type={'text'} placeholder={'Tipo de acto'} ref={tipoActo}></input>
                    <label>Descripcion</label>
                    <input type={'text'} placeholder={'Describa el suceso'} ref={descActo}></input>
                    <label>Longitud</label>
                    <input type={'text'} placeholder={'0.0000000'} ref={longitud}></input>
                    <label>Latitud</label>
                    <input type={'text'} placeholder={'0.0000000'} ref={latitud}></input>
                    <button type="submit">Enviar</button>
                </form>
            </StyledFormArea>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Reportes;