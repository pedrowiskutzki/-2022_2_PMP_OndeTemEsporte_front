import { createGlobalStyle } from "styled-components";
import { lightTheme } from "../theme";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
   
   
   
    ${(props) => props.hamburguer === true ? "150px" : "75px"};
    //Variáveis de cores
    --cor-primaria:#1B1A3D;  
    --cor-secundaria: #fff;
    --cor-complementar-1: #2673a6 ;
    --cor-complementar-2: #292929;
    --cor-complementar-3: #EFE82E;
    --cor-complementar-4: #F7F7F7;

  }
  
  input, button{
    cursor: pointer;
  }

`;