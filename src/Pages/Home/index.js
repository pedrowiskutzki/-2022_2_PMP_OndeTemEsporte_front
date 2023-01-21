import React, {useState } from 'react';
import { ButtonsCategorias, Button } from './styled';
import CardCentroEsportivo from '../../Components/ComponentsHome/CardCentroEsportivo';
import CardEvento from '../../Components/ComponentsHome/CardEvento';
import CardAtividade from '../../Components/ComponentsHome/CardAtividade';

export default function Home() {
    const [render, setRender] = useState(1);
 
  return (
    <>
      <ButtonsCategorias>
        <Button onClick={() => setRender(1)}> Evento</Button>
        <Button onClick={() => setRender(2)}> Atividade</Button>
        <Button onClick={() => setRender(3)}> Centro Esportivo</Button>
      </ButtonsCategorias>

      {render !== 1 ? (
        <p></p>
      ) : (
       <CardEvento />
       
      )}
      {render !== 2 ? (
        <p></p>
      ) : (
       <CardAtividade />

      )}
      {render !== 3 ? (
        <p></p>
      ) : (
       <CardCentroEsportivo />
      )}
    </>
  );
}

