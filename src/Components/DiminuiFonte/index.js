import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Button } from "./styled";
import { AcessibilidadeContext } from "../../Context/acessibilidadecontext";

const Diminui = () => {
const {tamanhoGlobalFonte, setTamanhoGlobalFonte} = useContext(AcessibilidadeContext)

  const diminuirFonte =() => {
  
  const increaseDecrease = 2;
    setTamanhoGlobalFonte(tamanhoGlobalFonte - increaseDecrease);
  }

  return (
    <div className="diminui">
      <Button className="fontsize-down" id="decrease-font" onClick={diminuirFonte}>
       A-
      </Button>
      </div>
    )
}
export default Diminui;