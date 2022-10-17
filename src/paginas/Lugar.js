import {StyledTitle, StyledSubTitle, Avatar, ButtonPosition, Imagen, StyledFormArea, StyledFormButton, StyledFormArea2, ExtraText} from "./../componentes/styles";

//logo
import imagen from './../assets/poblado.webp';

import {GrIndicator} from 'react-icons/gr';


const Lugar = () => {
    return(
        <div>
            <StyledFormArea>
                <div>
                    <Imagen image={imagen} />
                </div>
                <StyledTitle size={50}>
                    Poblado
                </StyledTitle>
                <StyledSubTitle size={30}>
                    Calificación: 4.5
                </StyledSubTitle>
                <ExtraText>
                El poblado es una de las zonas más vistadas en Medellín, y no solo por locales sino también turistas, 
                <br />ya que es una zona muy hermosa y verde, llena de restaurantes, parques y centros comerciales.
                </ExtraText>
                <StyledSubTitle size={30}>
                    Reportes presentados en la zona: 
                    <br/><GrIndicator />
                    <ExtraText>Hurto</ExtraText>
                </StyledSubTitle>
                <ExtraText>Cuentanos tu experiencia y califica la zona</ExtraText>
                <br />
                <StyledFormButton to='/Calificación'>
                    Califica la zona
                </StyledFormButton>
                <br /><br />
            </StyledFormArea>
        </div>
    );
}

export default Lugar;