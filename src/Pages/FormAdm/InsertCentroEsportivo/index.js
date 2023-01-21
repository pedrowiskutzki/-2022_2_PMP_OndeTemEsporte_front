import React from "react"
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import {Div1, Div2, Div3, Div4, Div5, FormContainer, Event, Button  } from "./styled"
import { api2 } from "../../../Services/api/api";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import categoriaService from "../../../Services/request/categoriaService";



export default function InsertCentroEsportivo () {
    const navigate = useNavigate(); 
    const {register, setValue} = useForm();

    const [nome, setNome] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade , setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [nomeImagem, setNomeImagem] = useState("");
    const [selecionado, setSelecionado] = useState([])
    const [categoria, setCategoria] = useState([])
          

     useEffect(() => {
        categoriaService
          .getAll()
          .then((res) => {
            var categorias = res.data.map(data => ({
              value: data, label: data.modal
            })); 
            setCategoria(categorias);
            console.log(res.data)
          })
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
       
    const handleSubmit = (event) => {

        if (nome === "" || rua === "" || cidade === "" ||
            longitude === "" || latitude === "" || cep === "" || bairro === "" ) {

            alert("Os campos a seguir não podem ser vazios: Nome, Rua, Cidade, Latitude, Longitude, Cep e Bairro")
            return
          }
        event.preventDefault();
        alert("Cadastrado com sucesso!")
        navigate("/homeadm")
        
        const centroEsportivo = {   
    nome: nome,

		rua: rua,
		numero: numero,
		complemento: complemento,
		bairro: bairro,
		cidade: cidade,
		cep: cep,
		longitude: longitude,
		latitude: latitude,
		telefone: telefone,
		email: email,
        nomeImagem: nomeImagem,
            categoria: selecionado.map((e) => {return e.value})
            
        
        }

        var txMethod = "post";
        var txUrl = "centroEsportivo";

        var formData = new FormData();
        formData.append("file", document.querySelector("#file").files[0])

        formData.append("centroEsportivo", new Blob([JSON.stringify(centroEsportivo)], {type: "application/json"}));

        
        api2({
            method: txMethod,
            url: txUrl,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' } 
          }).then(()=>{

          });
             
    };
    
    const checkCEP = (e) =>{
        const cep = e.target.value.replace(/\D/g,'');
        console.log(cep);
        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setValue('address', data.logradouro);
            setValue('neighborhood', data.bairro);
            setValue('city', data.localidade);
            setCidade(data.localidade);
            setRua(data.logradouro);
            setBairro(data.bairro);
           
        fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&country=Brazil&city=Petropolis&street=${data?.logradouro}`).then(res => res.json()).then(dataLocal => {
          if(dataLocal[0].lat !== null && dataLocal[0].lon !== null ){
            setValue('lat', dataLocal[0].lat);
            setValue('lon', dataLocal[0].lon);
            setLatitude(dataLocal[0].lat);
            setLongitude(dataLocal[0].lon);
        }else{
            <alert>Latitude e Longitude não encontrados confira o Cep</alert>
        }
            });
        });

    }

    const animated = makeAnimated();

    return (
        <FormContainer encType="multipart/form-data" >
        
        <Event onSubmit={handleSubmit} >
            <h3>Adicionar novo Centro Esportivo!</h3>
            
            <input type="text" required="true" name="nome" 
            placeholder='Nome..' 
            onChange={(e) => setNome(e.target.value)}/>
            
            <Div1>
                
                <input type="text" required="true" name="CEP" onBlur={checkCEP} 
                       placeholder='CEP..' 
                       onChange={(e) => setCep(e.target.value)}/>
                <input type="text" required="true" name="Rua" {...register("address")} 
                       placeholder='Rua..' 
                       onChange={(e) => setRua(e.target.value)}/>
                <input type="text" required="false" name="Numero" 
                       placeholder='Numero..' 
                       onChange={(e) => setNumero(e.target.value)}/>
             </Div1>

             <Div2>
                
            <input type="text" required="false" name="Complemento" 
            placeholder='Complemento..' 
            onChange={(e) => setComplemento(e.target.value)}/>
            <input type="text" required="true" name="Bairro" {...register("neighborhood")} 
            placeholder='Bairro..' 
            onChange={(e) => setBairro(e.target.value)}/>
                
             </Div2>            

          

            <Div3> 
            
            <input type="text" required="true" name="cidade" {...register("city")} 
            placeholder='Cidade..' 
            onChange={(e) => setCidade(e.target.value)}/>
            <input type="text" required="true" name="latitude" {...register("lat")} 
            placeholder='latitude..' 
            onChange={(e) => setLatitude(e.target.value)}/>
            <input type="text" required="true" name="longitude" {...register("lon")} 
            placeholder='longitude..' 
            onChange={(e) => setLongitude(e.target.value)}/>

             
            </Div3>


            <Div4>

            <input type="text" required="true" name="telefone" 
            placeholder='Telefone..' 
            onChange={(e) => setTelefone(e.target.value)}/>
            <input type="text" required="true" name="email" 
            placeholder='Email..' 
            onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" required="true" name="id" 
            placeholder='Id..' 
            onChange={(e) => setId(e.target.value)}/>

            </Div4>
           <Div5>

            <input type="file" name = "file" id = "file"/>
            <Select 
            options={categoria} 
            onChange={(item) => setSelecionado(item)}
            isMulti
            components={animated}
            isClearable={true}
            isSearchable={true}
            className="select"
            closeMenuOnSelect={false}
            placeholder="Insira uma ou mais categorias"
            />

           </Div5>
            <Button type="submit" onClick={handleSubmit}> Confirmar </Button>
            
            
            {/* <input type="text" required="true" name="descricao" placeholder='Descricao..' onChange={(e) => setDescricao(e.target.value)}/> */}

                {/* <h3>Selecione a Categoria</h3>
            <Modalidade>
                <input input type="text" required="true" name="categoria" placeholder="selecione a categoria.." onChange={(e) => setCategoria(e.target.value)}/>
                <option value="Futebol">Futebol</option>
                <option value="Basquete">Basquete</option>
                <option value="Natacao">Natação</option>
                <option value="Escalada">Escalada</option>
                <option value="Futsal">Futsal</option>
                <option value="Ginastica">Ginastica</option>
                <option value="Ciclismo">Ciclismo</option>
                <option value="Corrida">Corrida</option>
            </Modalidade> */}
        </Event>

      </FormContainer>
    )

}

