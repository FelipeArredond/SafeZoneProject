import {StyledTitle, StyledSubTitle, Avatar, ButtonPosition, ExtraText, StyledFormArea, StyledFormButton, StyledFormArea2} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

import icono_perfil from './../assets/icono_perfil.webp';

const About = () => {
    return(
        <div>
            <StyledFormArea>
                <div>
                    <Avatar image={logo} />
                </div>
                <StyledTitle size={50}>
                    SafeZone
                </StyledTitle>
                <StyledSubTitle size={30}>
                    Nuestro equipo de trabajo
                </StyledSubTitle>
                <ButtonPosition>
                <div>
                    <Avatar image={icono_perfil} />
                    <ExtraText>Brigith Giraldo</ExtraText>
                </div>
                <div>
                    <Avatar image={icono_perfil} />
                    <ExtraText>Felipe Arredondo</ExtraText>
                </div>
                <div>
                    <Avatar image={icono_perfil} />
                    <ExtraText>Valentina Ochoa</ExtraText>
                </div>
                </ButtonPosition>
            </StyledFormArea>
        </div>
    );
}

export default About;