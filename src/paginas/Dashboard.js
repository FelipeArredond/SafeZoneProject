import {StyledTitle, StyledSubTitle, Avatar, ButtonPosition, colors, StyledFormArea, StyledFormButton, StyledFormArea2} from "./../componentes/styles";

//logo
import logo from './../assets/logo.png';

const Dashboard = () => {
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
                    Conoce la ciudad de forma segura 
                </StyledSubTitle>
            </StyledFormArea>
        </div>
    );
}

export default Dashboard;