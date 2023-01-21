import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AcessibilidadeContext } from "../../Context/acessibilidadecontext";
import { Button } from "./styled";

const Aumenta = () => {
  const {tamanhoGlobalFonte, setTamanhoGlobalFonte} = useContext(AcessibilidadeContext)

  const aumentarFonte =() => {
    // Padrão de tamanho, equivale a 100% do valor definido no Body

  const increaseDecrease = 2;
    setTamanhoGlobalFonte(tamanhoGlobalFonte + increaseDecrease);
  }

  return (
    <div className="aumenta">
      <Button className="fontsize-up" id="increase-font" onClick={aumentarFonte}>
       A+
      </Button>
      </div>
    )
}
export default Aumenta;