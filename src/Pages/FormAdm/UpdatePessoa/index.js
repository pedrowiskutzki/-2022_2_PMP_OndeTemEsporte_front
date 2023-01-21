import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { Event, Button  } from "./styled"
import { api } from "../../../Services/api/api";
import pessoaService from '../../../Services/request/pessoaService';
import { useNavigate, useParams } from "react-router-dom";


export default function UpdateUsuario () {
    const { id } = useParams();
    const navigate = useNavigate();

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [senha, setSenha] = useState("")
    
    
    
    const handleUpdate = (event) => {
      event.preventDefault();

      const dado = {
        name: nome,
        cpf: cpf,
        email: email,
        phone: telefone,
        password: senha
      };

      pessoaService
      .update(id, dado)
      .then((response)=>{
        navigate("/homeadm");
        console.log(response);})
      .catch((error)=>{
        console.log(error);
      });
  };

  useEffect(() => {
    const getPessoa = async () => {
      const { data } = await api.get(`/pessoa/` + id);
      setNome(data.name)
      setCpf(data.cpf)
      setEmail(data.email)
      setTelefone(data.phone)
      setSenha(data.password)
        }
        getPessoa()
  }, []);

    

    
    return (
        <form>
        
        <Event onSubmit={handleUpdate}>
            <h3>Atualizar Cadastro</h3>
            <input type="text" name="Nome" value = {nome} placeholder='Nome' onChange={e => setNome(e.target.value)} />
            <input type="text"name='Cpf'placeholder='CPF' value = {cpf} onChange={e => setCpf(e.target.value)} />
            <input type="text" name="Rua" placeholder='email..' value = {email} onChange={e => setEmail(e.target.value)} />
            <input type="text" name="Bairro" placeholder='Telefone..' value = {telefone} onChange={e => setTelefone(e.target.value)} />
            <input type="password" name="Numero" placeholder='Senha' value = {senha} onChange={e => setSenha(e.target.value)}/>
          
               
                        <Button onClick={handleUpdate}> Cadastrar </Button>
            
        </Event>



     
      </form>
)
}