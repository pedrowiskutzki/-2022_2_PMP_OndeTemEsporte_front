import styled from "styled-components";

export const Rodape = styled.footer ` 
    width: 100%;
    height: 10rem;
    bottom: 0;

    
    background-color: ${props => props.theme.colors.corPrimaria} ;
    color: ${props => props.theme.colors.corComplementar4};
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 30px;
    flex-direction: row;


    h1{
        font-size: 0.8rem;
        font-weight: 700;
        color:  ${props => props.theme.colors.corSecundaria};
        margin-left: 10px
    }
`

