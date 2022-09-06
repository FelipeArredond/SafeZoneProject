import {useField } from "formik";
import {StyledTextInput, StyledLabel, StyledIcon, ErrorMsg} from './../componentes/styles';


export const TextInput = ({icon, ...props}) => {
    const {field, meta} = useField(props);

    return(
        <div style={{position: 'relative'}}>
            <StyledLabel htmlFor={props.correo}>
                {props.label}
            </StyledLabel>
            <StyledTextInput
                {...field}
                {...props}
            />

            <StyledIcon>
                {icon}
            </StyledIcon>
				</div>
);
};