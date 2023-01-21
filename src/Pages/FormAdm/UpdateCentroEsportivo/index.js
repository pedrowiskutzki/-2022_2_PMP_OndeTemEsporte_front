import React from "react"
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { Div1, Div2, Div3, Div4, Div5, FormContainer, Event, Button } from "./styled"
import { api, api2 } from "../../../Services/api/api";
import { useNavigate, useParams } from "react-router-dom";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import categoriaService from "../../../Services/request/categoriaService";



export default function UpdateCentroEsportivo() {
  const { id } = useParams();

  const navigate = useNavigate();
  const {register, setValue} = useForm();
  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [cep, setCep] = useState("");
  const [id2, setId2] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [nomeImagem, setNomeImagem] = useState("");
  const [selecionado, setSelecionado] = useState([])
  const [categoria, setCategoria] = useState([])

  function handleEditCentroEsportivo(event){
    event.preventDefault();
   
    navigate("/homeadm")
    
    const dado = {
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

    
  }
  var txMethod = "put";
  var txUrl = "centroEsportivo/"+id;

  var formData = new FormData();
  formData.append("file", document.querySelector("#file").files[0])

  formData.append("centroEsportivo", new Blob([JSON.stringify(dado)], { type: "application/json" }));


  api2({
    method: txMethod,
    url: txUrl,
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' }
  }).then(() => {
    handleEditCentroEsportivo();
    alert("Centro Esportivo alterado com sucesso!")
    navigate("/homeadm");
  });
}
useEffect(() => {
  const getCentroEsportivo = async () => {
    const { data } = await api.get(`/centroEsportivo/`+ id);
    setNome(data.nome)
    setRua(data.rua)
    setNumero(data.numero)
    setComplemento(data.complemento)
    setBairro(data.bairro)
    setCidade(data.cidade)
    setCep(data.cep)
    setLongitude(data.longitude)
    setLatitude(data.latitude)
    setTelefone(data.telefone)
    setEmail(data.email)
    setCategoria (data.categoria[0].modal)
      }
      getCentroEsportivo()
}, []);



  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
      setValue('address', data.logradouro);
      setValue('neighborhood', data.bairro);
      setValue('city', data.localidade);
      setCidade(data.localidade);
      setRua(data.logradouro);
      setBairro(data.bairro);

      fetch(`https://nominatim.openstreetmap.org/search?format=json&limit=1&country=Brazil&city=Petropolis&street=${data?.logradouro}`).then(res => res.json()).then(dataLocal => {
        if (dataLocal[0].lat !== null && dataLocal[0].lon !== null) {
          setValue('lat', dataLocal[0].lat);
          setValue('lon', dataLocal[0].lon);
          setLatitude(dataLocal[0].lat);
          setLongitude(dataLocal[0].lon);
        } else {
          <alert>Latitude e Longitude não encontrados confira o Cep</alert>
        }
      });
    });

  }

  const animated = makeAnimated();

  return (
    <FormContainer encType="multipart/form-data" >

      <Event onSubmit={handleEditCentroEsportivo} >
        <h3>Atualizar Centro Esportivo!</h3>

        <input type="text" required="true" name="nome"
          placeholder='Nome..'
          onChange={(e) => setNome(e.target.value)}
          value = {nome} 
          />

        <Div1>

          <input type="text" required="true" name="CEP" onBlur={checkCEP}
            placeholder='CEP..'
            onChange={(e) => setCep(e.target.value)} 
            value = {cep}
            />
          <input type="text" required="true" name="Rua" 
            placeholder='Rua..'
            onChange={(e) => setRua(e.target.value)} 
            value = {rua}
            />
          <input type="text" required="false" name="Numero"
            placeholder='Numero..'
            onChange={(e) => setNumero(e.target.value)} 
            value = {numero}
            />
        </Div1>

        <Div2>

          <input type="text" required="false" name="Complemento"
            placeholder='Complemento..'
            onChange={(e) => setComplemento(e.target.value)} 
            value = {complemento}
            />
          <input type="text" required="true" name="Bairro" 
            placeholder='Bairro..'
            onChange={(e) => setBairro(e.target.value)} 
            value = {bairro}
            />

        </Div2>



        <Div3>

          <input type="text" required="true" name="cidade" {...register("city")}
            placeholder='Cidade..'
            onChange={(e) => setCidade(e.target.value)}
            value = {cidade}
             />
          <input type="text" required="true" name="latitude" {...register("lat")}
            placeholder='latitude..'
            onChange={(e) => setLatitude(e.target.value)} 
            value = {latitude}/>
          <input type="text" required="true" name="longitude" {...register("lon")}
            placeholder='longitude..'
            onChange={(e) => setLongitude(e.target.value)} 
            value = {longitude}
            />


        </Div3>


        <Div4>

          <input type="text" required="true" name="telefone"
            placeholder='Telefone..'
            onChange={(e) => setTelefone(e.target.value)}
            value = {telefone} />
          <input type="text" required="true" name="email"
            placeholder='Email..'
            onChange={(e) => setEmail(e.target.value)}
            value = {email} />
          
        </Div4>
        <Div5>

          <input type="file" name="file" id="file" />
          <Select
            options={categoria}
            onChange={(item) => setSelecionado(item)}
            isMulti
            components={animated}
            isClearable={true}
            isSearchable={true}
            className="select"
            closeMenuOnSelect={false}
            placeholder="Insira a Categoria"
          />

        </Div5>
        <Button type="submit" onClick={handleEditCentroEsportivo}> Confirmar </Button>
      </Event>

    </FormContainer>
  )

}

