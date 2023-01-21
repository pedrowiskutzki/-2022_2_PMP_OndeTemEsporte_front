import React, { useEffect, useState } from "react";
import Loading from "../../Loading";
import eventoService from "../../../Services/request/eventoService";
import {Card, CardBox,DivButtons, DivInfos, RedButton,BlueButton,} from "./styled";
import { Link } from "react-router-dom";

export default function CardAtividade () {
  const [evento, setEvento] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);

  function refreshPage() {
    window.location.reload(false);
  }
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

  //Delete Evento
  function handleDeleteEvento(id) {
    eventoService
      .remove(id)
      .then((response) => {
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  }

return (
<Card>
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
                    <DivButtons>
                    
                      <RedButton onClick={() => handleDeleteEvento(evento.id)}>
                        Excluir
                      </RedButton>
                    </DivButtons>
                  </CardBox>
                </>
              ))
            )}
            {removeLoading && <Loading />}
          </Card>
)}