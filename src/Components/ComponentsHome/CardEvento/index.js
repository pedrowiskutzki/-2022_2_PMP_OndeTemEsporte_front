import React, {  useEffect, useState } from 'react';
import { Card, CardBox, DivInfos, InputBusca} from './styled';
import Loading from '../../Loading';

import eventoEspecialService from '../../../Services/request/eventoEspecialService';
import { Buffer } from "buffer";
import { api } from "../../../Services/api/api";

export default function CardEvento () {
    
   
    const [eventoEspecial, setEventoEspecial] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [busca, setBusca] = useState("")
    

    useEffect(() => {
        eventoEspecialService
        .getAll()
        .then((res) => {
          var pmp = res.data;
          console.log(pmp)
          // var array = Array.from(pmp)
          // array.forEach((temp) => {
          //   if(temp.nomeImagem){
          //     console.log(temp.nomeImagem)
          //     eventoEspecialService.getImagem(temp.nomeImagem).then((img) => {
          //       console.log(img)
          //       temp.imgUrl = "data:" + img.headers["content-type"] + ";base64, " + Buffer.from(img.data, 'binary').toString('base64');
          //     })
          //   }
          // })
          setRemoveLoading(true);
          setEventoEspecial(pmp);
         })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    }, []);
    const filtroBusca = (eventoTemp) => {
      const eventoFiltrado = eventoEspecial.filter((e) => {
        return e.nome.toUpperCase().includes(busca.toUpperCase())
      || e.rua.toUpperCase().includes(busca.toUpperCase())
      || e.bairro.toUpperCase().includes(busca.toUpperCase())
      }) 
    
     return eventoFiltrado
    }
    
 
    
    return (
        <>
         <InputBusca onChange={e => setBusca(e.target.value)} placeholder='Busque por nome, rua ou bairro..'/>
        <Card style={{ minHeight: "56.5vh" }} >
          { eventoEspecial.length === 0 ? (
            <p></p>
          ) : (
            filtroBusca(eventoEspecial).map((eventoEspecial) => (
              <>
                <div style={{ height: "10px", width: "100%" }}></div>
                <CardBox key={eventoEspecial.id}>
                    {eventoEspecial.nomeImagem ? (
                      <img
                        src={`${api.defaults.baseURL}eventoEspecial/mostrarImagem/${eventoEspecial.nomeImagem}`}
                        alt="Imagem do Evento Especial"
                      />
                    ) : (
                      <></>
                    )}
                  <DivInfos key={eventoEspecial.id}>
                    <h1>{eventoEspecial.nome}</h1>
                    <h4>{`Descrição: ${eventoEspecial.descricao}`}</h4>
                    <h4>{`Data: ${eventoEspecial.data}`}</h4>
                    <h4>{`Rua: ${eventoEspecial.rua}`}</h4>
                    <h4>{`Bairro: ${eventoEspecial.bairro}`}</h4>
                    <h4>{`Telefone: ${eventoEspecial.telefone}`}</h4>
                    
                  </DivInfos>
                  <div style={{ height: "10px", width: "100%" }}></div>
                </CardBox>
              </>
            ))
          )}
          {!removeLoading && <Loading />}
        </Card>
        </>
    )
}
