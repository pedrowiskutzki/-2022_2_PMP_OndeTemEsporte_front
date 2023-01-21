import styled from 'styled-components';
import { List } from "phosphor-react";
import { NavLink as Link } from 'react-router-dom';

export const Nav = styled.nav`
  position: sticky;
  background: ${props => props.theme.colors.corPrimaria}; 
  /* background: #0087d9; */
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10000;
`;

export const NavLink = styled(Link)`
  color:  ${props => props.theme.colors.corSecundaria};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  font-size: 18px;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  
  &:hover, :focus {
      background:  ${props => props.theme.colors.corSecundaria};
      color:  ${props => props.theme.colors.corPrimaria};
    } 

  :focus{
    background-color: rgba(68, 68, 122, 0.41);
    color:${props => props.theme.colors.corPrimaria}
  }

  &.active {
    color:  ${props => props.theme.colors.corComplementar3};
    opacity: 1;
  }

 :first-child{
  opacity: 1;
 }

  @media screen and (max-width: 768px) {

    img{
      transition: none;
      display: block;
      
      width:  ${(props) => props.hamburguer === true ? "150px" : "75px"};
      height: auto;

      position:  ${(props) => props.hamburguer === true ? "fixed" : "relative"};;
      top: ${(props) => props.hamburguer === true ? "1rem" : "none"};
      left: ${(props) => props.hamburguer === true ? "50%" : "none"};
      transform:  ${(props) => props.hamburguer === true ? "translate(-48%, 100%)" : "none"};
     
      
      filter: ${(props) => props.hamburguer === true ? "drop-shadow(0px 0px 0px var(--cor-primaria))" : "none"};
      font-size: 1.8rem;
      z-index: 12;


    }
  }
`;

export const Bars = styled(List)`
  display: none;
  color:  ${props => props.theme.colors.corSecundaria};
  cursor: pointer;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: ${(props) => props.hamburguer === true ? "fixed" : "relative"};
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    z-index: 12;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -450px;

  @media screen and (max-width: 768px) {
    min-height: 100vh;
    min-width: 100vw;
    margin: none;
    gap: 2rem;
    
    position: fixed;
    display:  ${(props) => props.hamburguer === true ? "flex" : "none"};
    justify-content: center;
    flex-direction: column;
    transition: 0.5s;

    background-color:  ${props => props.theme.colors.corComplementar2};
    font-size: 2rem;

    z-index: 11;
  }
  #firstLink{
  :hover{
    opacity: 0.8;
  }
  :focus{
    opacity: 1;
  }
 }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 2rem;
  margin-left: 10rem;

  
  @media screen and (max-width: 768px) {
    display: ${(props) => props.hamburguer === true ? "flex" : "none"};
    z-index: 14;
    position: fixed;
    bottom: 5rem;
    left: 15% ;
    font-size: 1.5rem;
    transform: translate(-50%, -50%);
  }
`;

export const NavBtnLink = styled(Link)`
  cursor: pointer;
  color:  ${props => props.theme.colors.corSecundaria};
  outline: none;
  border: none;
  transition: all 0.2s ease-in-out;
  margin-left: 24px;
  text-decoration: none;

  :first-child{
    display: ${(props) => props.isAuthenticated === true ?  "flex" : "none"};
    padding: 0.750rem 1.5rem;
    border-radius: 4px;
   

    &:hover, :focus {
      background:  ${props => props.theme.colors.corSecundaria};
      color: var(--background-footer);
    }
  }
  :last-child{
    display: ${(props) => props.isAuthenticated === true ? "flex" : "none"};
    background-color: var(--background-footer);
    &:hover, :focus {
      color: var(--cor-primaria);
    }

    i{
      background-color: red;
    }
  }
`;


export const Button = styled.button `


    background:${props => props.theme.colors.corPrimaria};
    margin: 1rem;
    border: none;
    
    &:focus {
    width: 72px;
    height: 70px;
    border-radius: 60px;
    background-color: hsla(166, 54%, 46%, 0.4);
  }
`