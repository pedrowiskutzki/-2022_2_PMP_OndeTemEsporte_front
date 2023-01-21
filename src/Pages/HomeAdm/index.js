import React, {useState } from "react";
import CardAtividade from "../../Components/ComponentsHomeAdm/CardAtividade";
import {Button, ButtonsCategorias, ContainerAdm} from "./styled";
import CardCentroEsportivo from "../../Components/ComponentsHomeAdm/CardCentroEsportivo";
import CardEventoEspecial from "../../Components/ComponentsHomeAdm/CardEvento";
import HeaderAdmin from "../../Components/ComponentsHomeAdm/Header";


function HomeAdm() {
  const [render, setRender] = useState(2);
 

  return (
    <>
      <HeaderAdmin />

      <ContainerAdm>
        
        <ButtonsCategorias>
          <Button onClick={() => setRender(1)}> Evento Especial</Button>
          <Button onClick={() => setRender(2)}> Atividade</Button>
          <Button onClick={() => setRender(3)}> Centro Esportivo</Button>
        </ButtonsCategorias>
        
        {render !== 1 ? (
          <p></p>
        ) : (
         <CardEventoEspecial />
        )}
        {render !== 2 ? (
          <p></p>
        ) : (
          <CardAtividade />
        )}
        ;
        {render !== 3 ? (
          <p></p>
        ) : (
         <CardCentroEsportivo />
        )}
      </ContainerAdm>
    </>
  );
}
export default HomeAdm


