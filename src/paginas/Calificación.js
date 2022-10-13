import {StyledTitle, ExtraText, StyledSubTitle, ButtonPosition, colors, StyledFormArea, StyledFormArea2, StyledFormButton2, StyledFormButton, Avatar, StyledContainer, StyledAreaObject} from "./../componentes/styles";

//Iconos
import {RiAlarmWarningFill} from 'react-icons/ri';
import {MdDescription} from 'react-icons/md';

import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';

import imagen from './../assets/calificacion.png';

import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from 'reactstrap'

const Calificación = () => {

    const alerta =()=>{
        alert("Se envió la calificación correctamente correctamente")
    }

    const [dropdown, setDropdown]=useState(false);

    const [barrio, setBarrio] = useState('');

    const abrirCerrarDropdown=()=>{
        setDropdown(!dropdown);
    }

    const Enviar=()=>{
        setBarrio('Popular')
    } 
    const Enviar2=()=>{
        setBarrio('Santa Cruz')
    } 
    const Enviar3=()=>{
        setBarrio('Manrique')
    } 
    const Enviar4=()=>{
        setBarrio('Aranjuez')
    } 
    const Enviar5=()=>{
        setBarrio('Castilla')
    } 
    const Enviar6=()=>{
        setBarrio('12 de Octubre')
    } 
    const Enviar7=()=>{
        setBarrio('Robledo')
    } 
    const Enviar8=()=>{
        setBarrio('Villa Hermosa')
    } 
    const Enviar9=()=>{
        setBarrio('Buenos Aires')
    } 
    const Enviar10=()=>{
        setBarrio('La candelaria')
    } 
    const Enviar11=()=>{
        setBarrio('Laureles Estadio')
    } 
    const Enviar12=()=>{
        setBarrio('La América')
    } 
    const Enviar13=()=>{
        setBarrio('San Javier')
    } 
    const Enviar14=()=>{
        setBarrio('El poblado')
    } 
    const Enviar15=()=>{
        setBarrio('Guayabal')
    } 
    const Enviar16=()=>{
        setBarrio('Belén')
    } 

    return(
        <div>
            <StyledFormArea background-color={colors.green}>
                <StyledTitle size={40}>
                    Calificación
                </StyledTitle>
                <StyledSubTitle size={20}>
                    Su seguridad es importante para nosostros, ya que el proposito 
                    <br />de este sitio web es brindar información sobre la seguridad 
                    <br />de la ciudad para su beneficio.
                    <Avatar image={imagen} />
                    <br />
                    Por ello en esta sección tiene la oportunidad de brindarnos
                    <br />su opinión y experiencia de una zona especifica
                    <br />Así otros usuarios podran informarse mejor.
                    
                </StyledSubTitle>
            </StyledFormArea>

            <StyledFormArea>
                <StyledTitle size={40}>Poblado</StyledTitle>
                <br />
                <StyledSubTitle>Encuesta</StyledSubTitle>
                <ExtraText>Responda las preguntas con un Si o un No</ExtraText>
                <Formik
                    >
                        {() => (
                            <Form>

                                <TextInput
                                    name='Tipo_acoso'
                                    type='text'
                                    label='¿Sintió inseguridad o amenaza por parte de alguien en el lugar?'
                                    placeholder='Si o No'
                                    icon={<RiAlarmWarningFill/>}
                                    /* onChange={(e) => {
                                        setContraseñaIn(e.target.value);
                                    }} */
                                />

                                <TextInput
                                    name='Descripción'
                                    type='text'
                                    label='¿Fue molestado o abordado de forma indebida o agresiva por alguien en la zona?'
                                    placeholder='Si o No'
                                    icon={<RiAlarmWarningFill/>}
                                    /* onChange={(e) => {
                                        setContraseñaIn(e.target.value);
                                    }} */
                                />

                                <TextInput
                                    name='Tipo_acoso'
                                    type='text'
                                    label='¿Volvería a transitar por la zona de forma voluntaria?'
                                    placeholder='Si o No'
                                    icon={<RiAlarmWarningFill/>}
                                    /* onChange={(e) => {
                                        setContraseñaIn(e.target.value);
                                    }} */
                                />
                                <br />
                                <StyledSubTitle>Puntuación</StyledSubTitle>
                                <ExtraText>Del 1 al 5 indique la Puntuación que desea asiganrle a la zona</ExtraText>

                                <TextInput
                                    name='Tipo_acoso'
                                    type='text'
                                    label=''
                                    placeholder='indique el número'
                                    /* onChange={(e) => {
                                        setContraseñaIn(e.target.value);
                                    }} */
                                />

                                <br />
                                <ExtraText>Si desea agregar un comentario a la calificación, a continuación tendra una casilla en donde podra dejarlo</ExtraText>
                                <TextInput
                                    name='Tipo_acoso'
                                    type='text'
                                    label='Comentario'
                                    placeholder=''
                                    /* onChange={(e) => {
                                        setContraseñaIn(e.target.value);
                                    }} */
                                />

                                <ButtonPosition>
                                    <StyledFormButton onClick={alerta} to='/Calificación'>
                                    Enviar
                                    </StyledFormButton>
                                    
                                </ButtonPosition>

                            </Form>
                        )}
                    </Formik>
                </StyledFormArea>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Calificación;