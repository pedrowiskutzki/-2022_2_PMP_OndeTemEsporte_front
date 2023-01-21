import React from "react"
import { useState, useEffect } from "react";
import { Event, Button  } from "./styled"
import centroEsportivoService from "../../../Services/request/centroEsportivoService";
import categoriaService from "../../../Services/request/categoriaService";
import eventoService from "../../../Services/request/eventoService";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useNavigate } from "react-router";

export default function InsertAtividade () {

    const [categoriaSelecionada, setCategoriaSelecionada] = useState([])
    const [centroSelecionado, setCentroSelecionado] = useState([])
    const [centro, setCentro] = useState([])
    const [categoria, setCategoria] = useState([])
    const [data, setData] = useState("")
    const navigate = useNavigate();
    
    
    const animated = makeAnimated();

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


      const handleSubmit = (event) => {
        event.preventDefault();
        const atividade = {
          data: data,
          categoriaId:  {id: categoriaSelecionada.value},
          centroEsportivoId:  {id: centroSelecionado.value},
        };
        console.log(categoriaSelecionada)
        console.log(atividade)
        eventoService.create(atividade).then((res) => {
            console.log(res);
            console.log(res.data);
        });
        navigate("/homeadm")
    };





    return (
        <form>
        
        <Event>
            <h3>Cadastrar nova Atividade</h3>


            <Select 
            options={centro} 
            onChange={(item) => setCentroSelecionado(item)}
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
            components={animated}
            isClearable={true}
            isSearchable={true}
            className="select"
            closeMenuOnSelect={false}
            placeholder="Insira uma ou mais categorias"
            />
            <input type="text" name="Data" placeholder="Data (Favor utilizar o formato AAAA-MM-DD" onChange={(e) => setData(e.target.value)}/>
               
           <Button onClick={(event) => handleSubmit(event)}> Cadastrar </Button>
            
        </Event>



     
      </form>
)
}