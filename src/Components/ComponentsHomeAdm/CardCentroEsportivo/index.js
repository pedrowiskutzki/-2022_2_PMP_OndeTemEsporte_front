import React, {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../../Loading";
import centroEsportivoService from "../../../Services/request/centroEsportivoService";
import {
  Main,
  BlueButton,
  Card,
  CardBox,
  DivButtons,
  DivInfos,
  RedButton,
  InputBusca
} from "./styled";
import { Buffer } from "buffer";
import { api } from "../../../Services/api/api";


export default function CardCentroEsportivo () {

  
  const [centroEsportivo, setcentroEsportivo] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [busca, setBusca] = useState("")

  function refreshPage() {
    window.location.reload(false);
  }

 
  useEffect(() => {
    centroEsportivoService
      .getAll()
      .then((res) => {
        var pmp = res.data;
        console.log(pmp);
        // // var array = Array.from(pmp);
        // // array.forEach((temp) => {
        // //   if (temp.nomeImagem) {
        // //     console.log(temp.nomeImagem);
        // //     centroEsportivoService.getImagem(temp.nomeImagem).then((img) => {
        // //       console.log(img);
        // //       temp.imgUrl =
        // //         "data:" +
        // //         img.headers["content-type"] +
        // //         ";base64, " +
        // //         Buffer.from(img.data, "binary").toString("base64");
        // //     });
        // //   }
        // });

        setRemoveLoading(true);
        setcentroEsportivo(pmp);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  //Delete CentroEsportivo
  function handleDeleteCentroEsportivo(id) {
    centroEsportivoService
      .remove(id)
      .then((response) => {
        refreshPage();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const filtroBusca = (centroEsportivoTemp) => {
    const centroEsportivoFiltrado = centroEsportivo.filter((e) => {
      return e.nome.toUpperCase().includes(busca.toUpperCase())
    || e.rua.toUpperCase().includes(busca.toUpperCase())
    || e.bairro.toUpperCase().includes(busca.toUpperCase())
    })
    
    return centroEsportivoFiltrado
  }

    return (
       <Main> 
      <InputBusca onChange={e => setBusca(e.target.value)} placeholder='Busque por nome, rua ou bairro..'/>
        <Card>
        {centroEsportivo.length === 0 ? (
          <p></p>
        ) : (
          filtroBusca(centroEsportivo).map((centroEsportivo) => (
            <>
              <div style={{ height: "10px", width: "100%" }}></div>
              <CardBox key={centroEsportivo.id}>
                {centroEsportivo.nomeImagem ? (
                  <img
                    src={`${api.defaults.baseURL}centroEsportivo/mostrarImagem/${centroEsportivo?.nomeImagem}`}
                    alt="Imagem do Centro Esportivo"
                  />
                ) : (
                  <></>
                )}
                <DivInfos key={centroEsportivo.id}>
                  <h1>{centroEsportivo.nome}</h1>
                  <h4>{`Bairro: ${centroEsportivo.bairro}`}</h4>
                  <h4>{`Rua: ${centroEsportivo.rua}`}</h4>
                  <h4>{`Atividades Fornecidas: ${centroEsportivo.categoria.map((c) => {
              return  ` ${c.modal}`
            })}`}</h4>
                </DivInfos>
                <div style={{ height: "10px", width: "100%" }}></div>
                <DivButtons>
                  <Link to={{ pathname: `/atualizarCentro/${centroEsportivo.id}` }}>
                    <BlueButton>Atualizar</BlueButton>
                  </Link>
                  <RedButton
                    onClick={() =>
                      handleDeleteCentroEsportivo(centroEsportivo.id)
                    }
                  >
                    Excluir
                  </RedButton>
                </DivButtons>
              </CardBox>
            </>
          ))
        )}
        ;{!removeLoading && <Loading />}
      </Card>
      </Main>
    )
}