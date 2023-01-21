import { Event, Button, Div1, Div2, Div3, Div4, Div5 } from "./styled";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api, api1, api2 } from "../../../Services/api/api";
import { useForm } from "react-hook-form";

export default function UpdateEvento() {
  const { id } = useParams();

  const {register, setValue} = useForm();
  const navigate = useNavigate();

  const [eventoEspecial, setEventoEspecial] = useState({});
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [rua, setRua] = useState("");
  const [complemento, setComplemento] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [numero, setNumero] = useState("");
  const [nomeImagem, setNomeImagem] = useState("");

  function handleEditEventoEspecial(event){
    event.preventDefault();
    alert("Evento alterado com sucesso!")
    navigate("/homeadm")

    const dado = {
      nome: nome,
      descricao: descricao,
      data: data,
      telefone: telefone,
      email: email,
      cep: cep,
      bairro: bairro,
      complemento: complemento,
      numero: numero,
      rua: rua,
      latitude: latitude,
      longitude: longitude,
      
    };
    
    var txMethod = "put";
        var txUrl = "eventoEspecial/"+id;

        var formData = new FormData();
        formData.append("file", document.querySelector("#file").files[0])

        formData.append("eventoEspecial", new Blob([JSON.stringify(dado)], {type: "application/json"}));

        api2({
            method: txMethod,
            url: txUrl,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' } 
          }).then(()=>{
            navigate("/homeadm");
          });
  
  }

    useEffect(() => {
      const getEventoEspecial = async () => {
        const { data } = await api.get(`/eventoEspecial/` + id);
        console.log(data);

        setNome(data.nome)
        setDescricao(data.descricao)
        setData(data.data)
        setTelefone(data.telefone)
        setEmail(data.email)
        setCep(data.cep)
        setBairro(data.bairro)
        setComplemento(data.complemento)
        setNumero(data.numero)
        setRua(data.rua)
        setLatitude(data.latitude)
        setLongitude(data.longitude)
        setNomeImagem(data.setNomeImagem)
          }
          getEventoEspecial()
    }, []);


    const checkCEP = (e) =>{
      const cep = e.target.value.replace(/\D/g,'');
      console.log(cep);
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
          setValue('address', data.logradouro);
          setValue('neighborhood', data.bairro);

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


  return (
    <form encType="multipart/form-data">
      <Event onSubmit={handleEditEventoEspecial}>
        <h3>Atualizar evento!</h3>
        
        <Div1> 
        <input
          type="text"
          name="Evento"
          placeholder="Nome do evento.."
          onChange={(e) => setNome(e.target.value)}
          value = {nome}
        />
        <input
          type="text"
          name="Descricao"
          placeholder="Descricao.."
          onChange={(e) => setDescricao(e.target.value)}
          value = {descricao}
        />
        <input
          type="Data"
          name="Data"
          placeholder="Data XX/YY/ZZZZ"
          onChange={(e) => setData(e.target.value)}
          value = {data}
        />
        </Div1>
        
        <Div2> 
        <input
          type="text"
          name="Telefone"
          placeholder="Telefone.."
          onChange={(e) => setTelefone(e.target.value)}
          value = {telefone}
        />
        <input
          type="text"
          name="Email"
          placeholder="Email.."
          onChange={(e) => setEmail(e.target.value)}
          value = {email}
        />
        <input
          type="text"
          name="CEP"
          placeholder="CEP.."
          onChange={(e) => setCep(e.target.value)}
          value = {cep}
        />
        </Div2>
        <Div3> 
        <input
          type="text"
          name="Bairro"
          placeholder="Bairro"
          {...register("neighborhood")}
          onChange={(e) => setBairro(e.target.value)}
          value = {bairro}
        />
        <input
          type="text"
          name="Rua"
          placeholder="Rua.."
          {...register("address")}
          onChange={(e) => setRua(e.target.value)}
          value = {rua}
        />
        <input
          type="text"
          name="Complemento"
          placeholder="Complemento.."
          onChange={(e) => setComplemento(e.target.value)}
          value = {complemento}
        />
        </Div3>
        <Div4> 
        <input
          type="text"
          name="Latitude"
          placeholder="Latitude.."
          {...register("lat")}
          onChange={(e) => setLatitude(e.target.value)}
          value = {latitude}
        />
        <input
          type="text"
          name="Longitude"
          placeholder="Longitude.."
          {...register("lon")}
          onChange={(e) => setLongitude(e.target.value)}
          value = {longitude}
        />
        <input
          type="text"
          name="Numero"
          placeholder="Numero.."
          onChange={(e) => setNumero(e.target.value)}
          value = {numero}
        />
        </Div4>

        <Div5>
        <input type="text" name="Nome Imagem" placeholder="imagem.." value = {nomeImagem} />
        <input type="file" name="file" id="file" />
        </Div5>
        <Button type="Submit" onClick={handleEditEventoEspecial}>
          {" "}
          Confirmar{" "}
        </Button>
      </Event>
    </form>
  );
}
