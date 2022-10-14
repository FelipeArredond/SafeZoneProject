//Styled components
import {StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonPosition, ExtraText, TextLink, CopyrightText} from './../componentes/styles';

import logo from './../assets/logo.png';

//formik
import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';

//Iconos
import {FiMail, FiLock} from 'react-icons/fi';

import Axios from 'axios';

import React, { useEffect, useState } from "react";
import {useHistory} from 'react-router-dom';

const Inicio = () => {
    const history = useHistory();

    const [NombreIn, setNombreIn] = useState('');
    const [ApellidoIn, setApellidoIn] = useState('');
    const [EmailIn, setEmailIn] = useState('');
    const [ContraseñaIn, setContraseñaIn] = useState('');

    const [InicioStatus, setInicioStatus] = useState('');
    const [InicioStatusN, setInicioStatusN] = useState('');
    const [InicioStatusA, setInicioStatusA] = useState('');

    const iniciobd = () => {

        Axios.post("http://localhost:3001/inicio", {
            Email: EmailIn,
            contraseña: ContraseñaIn
        }).then((response) => {
            if(response.data.message){
                setInicioStatus(response.data.message)
            }else{
                setInicioStatus(response.data[0].Email)
                setInicioStatusN(response.data[0].Nombre)
                setInicioStatusA(response.data[0].Apellido)
                history.push('/Dashboard')
            }
        });
    };

    /* const perfil = () => {
        Axios.get("http://localhost:3001/perfil", {
            Nombre: NombreIn,
            Apellido: ApellidoIn,
            Email: EmailIn,
            contraseña: ContraseñaIn
        }).then((response) => {
            if(response.data.message){
                setInicioStatus(response.data.message)
            }else{
                setInicioStatus(response.data[0].Email)
                setInicioStatusN(response.data[0].Nombre)
                setInicioStatusA(response.data[0].Apellido)
                history.push('/Dashboard')
            }
        });
    };  */


    return(
        <div>
            <StyledFormArea>
                <Avatar image={logo} />
                <StyledTitle color={colors.black} size={30}>
                    Inicio de sesión
                </StyledTitle>
                <Formik
                >
                    {() => (
                        <Form>
                            <TextInput
                                name='email'
                                type='text'
                                label='Correo'
                                placeholder='Antonio1@example.com'
                                icon={<FiMail/>}
                                onChange={(e) => {
                                    setEmailIn(e.target.value);
                                }}
                            />

                            <TextInput
                                name='password'
                                type='password'
                                label='Contraseña'
                                placeholder='***********'
                                icon={<FiLock/>}
                                onChange={(e) => {
                                    setContraseñaIn(e.target.value);
                                }}
                            />

                            <ExtraText color={colors.red}>
                                <p>{InicioStatusN} {InicioStatusA}</p>
                                <p>{InicioStatus}</p>
                            </ExtraText>

                            <ButtonPosition>
                                <StyledFormButton onClick={iniciobd}>
                                Inicia sesión
                                </StyledFormButton>
                                
                            </ButtonPosition>

                        </Form>
                    )}
                </Formik>
                <ExtraText>
                    ¿Aún no tienes una cuenta creada?
                    <p>
                    <TextLink to="/Registro">Registrate</TextLink>
                    </p> 
                </ExtraText>
            </StyledFormArea>
            <CopyrightText>
                Todos los derechos reservados &copy;2022
            </CopyrightText>
        </div>
    );
};
export default Inicio;