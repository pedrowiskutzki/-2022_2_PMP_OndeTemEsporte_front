import React from 'react';
import { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Button } from './NavbarElements';
import { useContext } from "react";
import { User } from "phosphor-react";
import AuthContext from '../../Context/auth';
import Aumenta from "../AumentaFonte"
import Diminui from "../DiminuiFonte"
import { BiAdjust} from 'react-icons/bi';


const Navbar = ({ themeToggler }) => {

  const { isAuthenticated } = useContext(AuthContext);

  const [hamburguer, setHamburguer] = useState(false);


  const toggleHamburguer = () => {
    setHamburguer(!hamburguer);
  }
  const closeeHamburguer = () => {
    setHamburguer(false);
  }

  return (
    <>
      <Nav>
        <NavLink onClick={() => closeeHamburguer()} hamburguer={hamburguer} to='/'>
          <img src={require('../../images/brasao_branco.png')} width="140x" heigth="120px" alt='' />
        </NavLink>
        <Bars onClick={() => toggleHamburguer()} hamburguer={hamburguer} />
        <NavMenu hamburguer={hamburguer}>
          <NavLink id='firstLink' onClick={() => closeeHamburguer()} to='/'>Home</NavLink>
          <NavLink onClick={() => closeeHamburguer()} to='/map'>Mapa</NavLink>
          <NavLink onClick={() => closeeHamburguer()} to='/calendar'>Calendario</NavLink>
        </NavMenu>
        <NavBtn hamburguer={hamburguer}>
          <NavBtnLink isAuthenticated={isAuthenticated} onClick={() => closeeHamburguer()} to='/homeadm'><User size={32} /></NavBtnLink>
          <Button onClick={themeToggler}> <BiAdjust color='white'/>  </Button>
          <Aumenta />
          <Diminui />
        </NavBtn>
      
      </Nav>
    </>
  );
};

export default Navbar;
