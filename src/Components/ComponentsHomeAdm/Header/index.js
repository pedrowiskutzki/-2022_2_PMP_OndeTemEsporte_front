import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../Context/auth";
import { BlueButton, Box, BoxButtons,BoxLogout, Button,HeaderAdm, RedButton, } from "./styled";

export default function HeaderAdmin () {

  const { signOut, userName, userEmail, userId } = useContext(AuthContext);


    return (
        <HeaderAdm>
        <div>
          <h2>
            {" "}
            Bem Vindo!
          </h2>
          <h3> {userEmail}</h3>
          <Link to={{ pathname: `/atualizarPessoa/${userId}` }}>
            <BlueButton style={{marginTop: "1rem"}}>Alterar Cadastro</BlueButton>
          </Link>
        </div>

        <Box>
          <BoxButtons>
            <a href="/insertAtividade">
              <Button> Nova Atividade</Button>
            </a>

            <a href="/insertEvento">
              <Button to="/insertEvento">Novo Evento </Button>
            </a>
            <a href="/insertCentro">
              <Button to="/insertCentro">Novo Centro Esportivo</Button>
            </a>
            <a href="/insertUsuario">
              <Button>Novo Usuario</Button>
            </a>
          </BoxButtons>
          <BoxLogout>
            <a href="/">
              <RedButton onClick={signOut}>Logout</RedButton>{" "}
            </a>
          </BoxLogout>
        </Box>
      </HeaderAdm>
    )

}
