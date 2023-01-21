import React from "react"
import { useState } from "react";
import { Event, Modalidade, Adress, Button, Div1, Div2, Div3, Div4  } from "./styled"
import eventoEspecialService from '../../../Services/request/eventoEspecialService';
import { api2 } from "../../../Services/api/api";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

export default function InsertEvento () {

    const {register, setValue} = useForm();

    const navigate = useNavigate();

    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [data, setData] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email , setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [bairro , setBairro] = useState("");
    const [rua , setRua] = useState("");
    const [complemento, setComplemento] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [numero, setNumero] = useState("");
    const [nomeImagem, setNomeImagem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Cadastrado com sucesso!")
        navigate("/homeadm")

        const eventoEspecial = {
            nome: nome,
            descricao:descricao,
            data: data,
            telefone: telefone,
            email: email,
            cep: cep,
            bairro: bairro,
            complemento: complemento,
            numero: numero,
            rua: rua,
            latitude:latitude,
            longitude:longitude,
            nomeImagem: nomeImagem,

        };

        var txMethod = "post";
        var txUrl = "eventoEspecial";

        var formData = new FormData();
        formData.append("file", document.querySelector("#file").files[0])

        formData.append("eventoEspecial", new Blob([JSON.stringify(eventoEspecial)], {type: "application/json"}));

        api2({
            method: txMethod,
            url: txUrl,
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' } 
          }).then(()=>{

          });
          navigate("/homeadm");

        // eventoEspecialService.create(eventoEspecial).then((res) => {
        //     console.log(res);
        //     console.log(res.data);
        // });
    };
    

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
        
        <Event onSubmit={handleSubmit} >
            <h3>Inserir um novo evento!</h3>
            
            <Div1>

            <input type="text" name="Evento" placeholder='Nome do evento..' onChange={(e) => setNome(e.target.value)}/>
            <input type="text" name="Descricao" placeholder='Descricao..' onChange={(e) => setDescricao(e.target.value)}/>
            <input type="Data" name="Data" placeholder='Data XX/YY/ZZZZ' onChange={(e) => setData(e.target.value)}/>        

            </Div1>
           
            <Div2>

            <input type="text" name="Telefone" placeholder='Telefone..' onChange={(e) => setTelefone(e.target.value)}/>
            <input type="text" name="Email" placeholder='Email..' onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" name="CEP" placeholder='CEP..'  onBlur={checkCEP} onChange={(e) => setCep(e.target.value)}/>

            </Div2>
            
            <Div3>

            <input type="text "name='Bairro' placeholder='Bairro' {...register("neighborhood")} onChange={(e) => setBairro(e.target.value)} />
            <input type="text" name="Rua" placeholder='Rua..' {...register("address")} onChange={(e) => setRua(e.target.value)}/>
            <input type="text" name="Complemento" placeholder='Complemento..' onChange={(e) => setComplemento(e.target.value)}/>

            </Div3>
            
            <Div4>

            <input type="text" name="Numero" placeholder='Numero..' onChange={(e) => setNumero(e.target.value)}/>
            <input type="text" name="Latitude" placeholder='Latitude..' {...register("lat")} onChange={(e) => setLatitude(e.target.value)}/>
            <input type="text" name="Longitude" placeholder='Longitude..' {...register("lon")} onChange={(e) => setLongitude(e.target.value)}/>

            </Div4>
            
            
            
            
            <input type="file" name = "file" id = "file"/>
          
               
                       <Button type="submit" onClick={handleSubmit}> Confirmar </Button>
            
        </Event>
     
      </form>
)
}