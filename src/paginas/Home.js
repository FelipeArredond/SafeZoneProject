import {StyledTitle, StyledSubTitle, Avatar, StyledButton, ButtonPosition, colors} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

const Home = () => {
    return(
        <div>
            <div>
                <Avatar image={logo} />
            </div>
            <StyledTitle size={50} color={colors.white}>
                Bienvenido a SafeZone 
            </StyledTitle>
            <StyledSubTitle size={30} color={colors.white}>
                Conoce la ciudad de forma segura 
            </StyledSubTitle>
            <ButtonPosition>
            <StyledButton to='/Map'>
                Mapa
            </StyledButton>
            <StyledButton to='/Busqueda'>
                Búsqueda
            </StyledButton>
            </ButtonPosition>

        </div>
    );
}

export default Home;