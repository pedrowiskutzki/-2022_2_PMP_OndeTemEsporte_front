import React, { useEffect, useState } from 'react';
import centroEsportivoService from '../../../Services/request/centroEsportivoService';
import { Card, CardBox, InputBusca, DivInfos} from './styled';
import Loading from '../../Loading';
import { Buffer } from "buffer";
import { api } from "../../../Services/api/api";




export default function CardCentroEsportivo() {
    
    const [centroEsportivo, setcentroEsportivo] = useState([]);
    const [removeLoading, setRemoveLoading] = useState(false);
    const [busca, setBusca] = useState("")

    useEffect(() => {
        // setTimeout(() => {
        centroEsportivoService
        .getAll()
      .then((res) => {
        var pmp = res.data;
        console.log(pmp);
        // var array = Array.from(pmp);
        // array.forEach((temp) => {
        //   if (temp.nomeImagem) {
        //     console.log(temp.nomeImagem);
        //     centroEsportivoService.getImagem(temp.nomeImagem).then((img) => {
        //       console.log(img);
        //       temp.imgUrl =
        //         "data:" +
        //         img.headers["content-type"] +
        //         ";base64, " +
        //         Buffer.from(img.data, "binary").toString("base64");
        //     });
        //   }
        // });

        setRemoveLoading(true);
        setcentroEsportivo(pmp);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
        // }, 300)
        }, []);


        const filtroBusca = (centroEsportivoTemp) => {
            const centroEsportivoFiltrado = centroEsportivo.filter((e) => {
              
              return e.nome.toUpperCase().includes(busca.toUpperCase())
            || e.rua.toUpperCase().includes(busca.toUpperCase())
            || e.bairro.toUpperCase().includes(busca.toUpperCase())
            || e.categoria?.map((m) => m.modal.toUpperCase()).includes(busca.toUpperCase())
              
            })
            
            return centroEsportivoFiltrado
          }
  



    return(
  <>
<InputBusca onChange={e => setBusca(e.target.value)} placeholder='Busque por nome, rua ou bairro..'/>
<Card style={{ minHeight: "56.5vh" }}>
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
        </CardBox>
      </>
    ))
  )}
{!removeLoading && <Loading />}
</Card>
</>
    )
}



