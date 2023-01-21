import styled from "styled-components";
export const ContainerAdm = styled.div  `

background-color: #F7F7F7;
width: 100%;
color:  ${props => props.theme.colors.corComplementar2};
border-bottom: 0.5px solid  ${props => props.theme.colors.corComplementar4};
display: flex;
flex-direction: column;


`
export const Button = styled.button `

    background-color:  ${props => props.theme.colors.corPrimaria};
    color:  ${props => props.theme.colors.corComplementar4};
    border-radius: 10% ;
    border: none;
    padding: 0.5em 0.5em 0.5em;
    margin: 0.5em;
    width: 10.5rem;
    height: 2.5rem;
    cursor: pointer;
    box-shadow: 1px -2px 11px 6px rgba(7,2,31,0.3) ;

    @media screen and (max-width: 768px){
        width: 4.5;
    
    }`


export const ButtonsCategorias = styled.div `
display: flex;
justify-content: center;
align-items: center;
 background-color:  ${props => props.theme.colors.corComplementar4};
     button {
  
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color:  ${props => props.theme.colors.corComplementar4};
  background-color:  ${props => props.theme.colors.corPrimaria};
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color:  ${props => props.theme.colors.corComplementar3};
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-5px);
}

button:active {
  transform: translateY(-1px);
}

`

