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

const Reportes = () => {

    const alerta =()=>{
        alert("Se envió el reporte correctamente")
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
                <Dropdown isOpen={dropdown} toggle={abrirCerrarDropdown} size='lg'>
                    <DropdownToggle caret>
                        Seleccionar Comuna
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Comunas</DropdownItem>
                        <DropdownItem divider/>
                        <DropdownItem onClick={Enviar}>1. Popular</DropdownItem>
                        <DropdownItem onClick={Enviar2}>2. Santa Cruz</DropdownItem>
                        <DropdownItem onClick={Enviar3}>3. Manrique</DropdownItem>
                        <DropdownItem onClick={Enviar4}>4. Aranjuez</DropdownItem>
                        <DropdownItem onClick={Enviar5}>5. Castilla</DropdownItem>
                        <DropdownItem onClick={Enviar6}>6. 12 de Octubre</DropdownItem>
                        <DropdownItem onClick={Enviar7}>7. Robledo</DropdownItem>
                        <DropdownItem onClick={Enviar8}>8. Villa Hermosa</DropdownItem>
                        <DropdownItem onClick={Enviar9}>9. Buenos Aires</DropdownItem>
                        <DropdownItem onClick={Enviar10}>10. La candelaria</DropdownItem>
                        <DropdownItem onClick={Enviar11}>11. Laureles Estadio</DropdownItem>
                        <DropdownItem onClick={Enviar12}>12. La América</DropdownItem>
                        <DropdownItem onClick={Enviar13}>13. San Javier</DropdownItem>
                        <DropdownItem onClick={Enviar14}>14. El poblado</DropdownItem>
                        <DropdownItem onClick={Enviar15}>15. Guayabal</DropdownItem>
                        <DropdownItem onClick={Enviar16}>16. Belén</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <ExtraText>{barrio}</ExtraText>
                <br />
            
                <Formik
                    >
                        {() => (
                            <Form>

                                <TextInput
                                    name='Tipo_acoso'
                                    type='text'
                                    label='Tipo de acoso'
                                    placeholder='Hurto'
                                    icon={<RiAlarmWarningFill/>}
                                    /* onChange={(e) => {
                                        setContraseñaIn(e.target.value);
                                    }} */
                                />

                                <TextInput
                                    name='Descripción'
                                    type='text'
                                    label='Descripción'
                                    placeholder=''
                                    icon={<MdDescription/>}
                                    /* onChange={(e) => {
                                        setContraseñaIn(e.target.value);
                                    }} */
                                />

                                <ButtonPosition>
                                    <StyledFormButton onClick={alerta} to='/Reportes'>
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

export default Reportes;