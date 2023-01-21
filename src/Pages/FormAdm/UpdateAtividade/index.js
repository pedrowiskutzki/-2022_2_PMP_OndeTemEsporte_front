import React from "react"
import { useState, useEffect } from "react";
import { Event, Button  } from "./styled"
import centroEsportivoService from "../../../Services/request/centroEsportivoService";
import categoriaService from "../../../Services/request/categoriaService";
import Select from "react-select";
import makeAnimated from "react-select/animated";


export default function InsertUsuario () {

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setData] = useState("")
    const [categoriaSelecionada, setCategoriaSelecionada] = useState([])
    const [centroSelecionado, setCentroSelecionado] = useState([])
    const [centro, setCentro] = useState([])
    const [categoria, setCategoria] = useState([])


    useEffect(() => {
        centroEsportivoService
          .getAll()
          .then((res) => {
            var centros = res.data.map(data => ({
              value: data.id, label: data.nome
            })); 
            setCentro(centros);
            console.log(res.data)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
    
      useEffect(() => {
        categoriaService
          .getAll()
          .then((res) => {
            var categorias = res.data.map(data => ({
              value: data.id, label: data.modal
            })); 
            setCategoria(categorias);
            console.log(res.data)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);


      const animated = makeAnimated();
    return (
        <form>
        
        <Event>
            <h3>Atualizar Atividade</h3>

            <Select 
            options={centro} 
            onChange={(item) => setCentroSelecionado(item)}
            isMulti
            components={animated}
            isClearable={true}
            isSearchable={true}
            className="select"
            closeMenuOnSelect={false}
            placeholder="Insira um ou mais Centros Esportivos"
            />

            <Select 
            options={categoria} 
            onChange={(item) => setCategoriaSelecionada(item)}
            isMulti
            components={animated}
            isClearable={true}
            isSearchable={true}
            className="select"
            closeMenuOnSelect={false}
            placeholder="Insira uma ou mais categorias"
            />
               
            <input type="text" name="Data" placeholder="Data" />
                        <Button onClick={() => console.log("click")}> Cadastrar </Button>
            
        </Event>



     
      </form>
)
}