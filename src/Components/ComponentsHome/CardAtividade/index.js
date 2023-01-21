import React, { useEffect, useState } from 'react';
import {Card, CardBox, DivInfos} from './styled';
import Loading from '../../Loading';
import eventoService from '../../../Services/request/eventoService';

export default function CardAtividade () {
  
  const [evento, setEvento] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  
  useEffect(() => {
    eventoService
    .getAll()
    .then((res) => {
      setEvento(res.data);
      setRemoveLoading(true);
    })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
    }, []);


    return(
        <Card style={{ minHeight: "30.5vh" }}>
        {evento.length === 0 ? (
          <p></p>
        ) : (
          evento.map((evento) => (
            <>
              <div style={{ height: "10px", width: "100%" }}></div>
              <CardBox>
                <DivInfos key={evento.id}>
                  <h1>{evento.categoriaId.modal}</h1>
                  <h4>{`${evento.centroEsportivoId.nome}`}</h4>
                  <h4>{`Bairro: ${evento.centroEsportivoId.bairro}`}</h4>
                  <h4>{`Rua: ${evento.centroEsportivoId.rua}`}</h4>
                  <h4>{`Numero: ${evento.centroEsportivoId.numero}`}</h4>

                </DivInfos>
                <div style={{ height: "10px", width: "100%" }}></div>
              </CardBox>
            </>
          ))
        )}
        {!removeLoading && <Loading />}
      </Card>
    )
}