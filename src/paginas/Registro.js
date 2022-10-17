//Styled components
import {StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonPosition, ExtraText, TextLink, CopyrightText} from './../componentes/styles';

import logo from './../assets/logo.png';

import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';

//Iconos
import {FiMail, FiLock, FiUser} from 'react-icons/fi';

import Axios from 'axios';

import React, { useEffect, useState } from "react";

const Registro = () => {

    const [NombreReg, setNombreReg] = useState('');
    const [ApellidoReg, setApellidoReg] = useState('');
    const [EmailReg, setEmailReg] = useState('');
    const [ContraseñaReg, setContraseñaReg] = useState('');

    const registrobd = () => {
        Axios.post("http://localhost:3001/registro", {
            Nombre: NombreReg,
            Apellido: ApellidoReg,
            Email: EmailReg,
            contraseña: ContraseñaReg
        }).then(() => {
            console.log("inserto exitoso");
        });
    };

    return(
        <div>
            <StyledFormArea>
                <Avatar image={logo} />
                <StyledTitle color={colors.black} size={30}>
                    Registro
                </StyledTitle>
                <Formik>
                    {() => (
                        <Form>
                            <TextInput
                                name='nombre'
                                type='text'
                                label='Nombre'
                                placeholder='Antonio'
                                icon={<FiUser/>}
                                onChange={(e) => {
                                    setNombreReg(e.target.value);
                                }}
                            />

                            <TextInput
                                name='apellido'
                                type='text'
                                label='Apellidos'
                                placeholder='Giraldo Londoño'
                                icon={<FiUser/>}
                                onChange={(e) => {
                                    setApellidoReg(e.target.value);
                                }}
                            />

                            <TextInput
                                name='email'
                                type='text'
                                label='Correo'
                                placeholder='Antonio1@example.com'
                                icon={<FiMail/>}
                                onChange={(e) => {
                                    setEmailReg(e.target.value);
                                }}
                            />

                            <TextInput
                                name='password'
                                type='password'
                                label='Contraseña'
                                placeholder='***********'
                                icon={<FiLock/>}
                                onChange={(e) => {
                                    setContraseñaReg(e.target.value);
                                }}
                            />

                            <ButtonPosition>
                                <StyledFormButton type="submit"  to="/Inicio" onClick={registrobd}>
                                    Registrate
                                </StyledFormButton>
                            </ButtonPosition>
                        </Form>
                    )}
                    </Formik>
                <ExtraText>
                    ¿Ya tienes una cuenta creada?
                    <p>
                    <TextLink to="/Inicio">Inicia sesión</TextLink>
                    </p> 
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                Todos los derechos reservados &copy;2022
            </CopyrightText>
        </div>
    );
};
export default Registro;