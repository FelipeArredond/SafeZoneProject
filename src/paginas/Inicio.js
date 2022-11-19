import {StyledFormArea, StyledFormButton, Avatar, StyledTitle, colors, ButtonPosition, ExtraText, TextLink, CopyrightText} from './../componentes/styles';
import logo from './../assets/logo.png';
import {Formik, Form} from 'formik';
import { TextInput } from '../componentes/FormLib';
import {FiMail, FiLock} from 'react-icons/fi';
import React, {useState, useContext} from "react";
import { authContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import { serverURL } from '../App';

const Inicio = () => {
    const {authData,setAuthData} = useContext(authContext)

    const [NombreIn, setNombreIn] = useState('');
    const [ApellidoIn, setApellidoIn] = useState('');
    const [EmailIn, setEmailIn] = useState('');
    const [ContraseñaIn, setContraseñaIn] = useState('');

    const [InicioStatus, setInicioStatus] = useState('');
    const [InicioStatusN, setInicioStatusN] = useState('');
    const [InicioStatusA, setInicioStatusA] = useState('');

    async function authLog(){
        const postData = {
            "correo": EmailIn,
            "contraseña": ContraseñaIn
        }
        const postDataJson = JSON.stringify(postData)
        const response = await fetch(serverURL+'usuarios/log',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: postDataJson
        })
        const data = await response.json()
        if(data.length > 0){
            setAuthData({
                id: data[0]._id,
                nombre: data[0].nombre,
                apellido: data[0].apellido,
                correo: data[0].correo,
                auth: true
            })
        }else{
            return null
        }
    }

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
                                <StyledFormButton onClick={authLog}>
                                    <TextLink>
                                        <Link to={authData.auth?'/Dashboard':'/Inicio'} className={'link'} > {/*DAR CSS A ESTE LINK*/}
                                        Inicia sesión
                                        </Link>
                                    </TextLink>    
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