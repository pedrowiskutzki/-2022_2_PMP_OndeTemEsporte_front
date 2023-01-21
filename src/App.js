import React from 'react';
import usePersistedState from './Utils/UsePersistedState';
import { ThemeProvider } from 'styled-components';
import { Router } from './Routes/routes';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import { Footer } from './Components/Footer';
import { AuthProvider } from './Context/auth';
import {darkTheme,lightTheme} from './theme'
import { AcessibilidadeContexto } from './Context/acessibilidadecontext';



export default function App() {
  const [theme, setTheme] = usePersistedState("light")

  const themeToggler= () => {
    theme === "light" ? setTheme ("dark") : setTheme ("light")
    console.log(theme)
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme: darkTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <AcessibilidadeContexto> 
            <Navbar  themeToggler ={themeToggler} />
            <Router />
            <Footer />
          </AcessibilidadeContexto>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

