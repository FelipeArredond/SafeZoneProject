import {StyledTitle, StyledSubTitle, colors, StyledFormArea, Avatar} from "./../componentes/styles";
import imagen from './../assets/seguridad.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from "react";
import { useContext } from "react";
import { authContext } from "../context/authContext";
import { serverURL } from "../App";

const Reportes = () => {

    const barrio = useRef();
    const tipoActo = useRef();
    const descActo = useRef();
    const longitud = useRef();
    const latitud = useRef();

    const {authData} = useContext(authContext)

    async function handleForm(e){
        e.preventDefault();
        const postData = {
            "usuario": authData.id,
            "nombre_barrio": barrio.current.value,
            "tipo_reporte": tipoActo.current.value,
            "longitud": longitud.current.value,
            "latitud": latitud.current.value,
            "descripcion": descActo.current.value
        }
        const postDataJson = JSON.stringify(postData)
        const response = await fetch(serverURL+'reportes/ ',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: postDataJson
        });
        const data = await response.json();
        alert('Se ha enviado correctamente el reporte')
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
                    <input type={'text'} placeholder={'Example: Hurto'} ref={tipoActo}></input>
                    <label>Descripcion</label>
                    <input type={'text'} placeholder={'Describa el suceso'} ref={descActo}></input>
                    <label>Longitud</label>
                    <input type={'text'} placeholder={'0.0000000'} ref={longitud}></input>
                    <label>Latitud</label>
                    <input type={'text'} placeholder={'0.0000000'} ref={latitud}></input>
                    <button type="submit" className="reports-button">Enviar</button>
                </form>
            </StyledFormArea>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
}

export default Reportes;