import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { Event, Button  } from "./styled"
import { api } from "../../../Services/api/api";
import pessoaService from '../../../Services/request/pessoaService';


export default function InsertUsuario () {

    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [telefone, setTelefone] = useState("")
    const [senha, setSenha] = useState("")
    
    
    
    const handleSubmit = (event) => {
      event.preventDefault();
       
      const pessoa = {
        name: nome,
        cpf: cpf,
        email: email,
        phone: telefone,
        password: senha
      };

      pessoaService.create(pessoa).then((res) => {
          console.log(res);
          console.log(res.data);
      }).catch((err) => {
            alert("Alguma coisa deu errado!")
      });
  };
    
    // const cadastrar = (e) => {
    //   e.preventDefault();
  
    //   api
    //     .post("/pessoa", {
    //       name: nome,
    //       cpf: cpf,
    //       email: email,
    //       phone: telefone,
    //       password: senha
          
    //     })
    //     .then((response) => {
    //       alert("Usuario cadastrado com sucesso!")
    //     })
    //     .catch((err) => {
    //       alert("Alguma coisa deu errado!")
    //     });
    //   }
    
    
    return (
        <form>
        
        <Event>
            <h3>Cadastrar novo Usuario</h3>
            <input type="text" name="Evento" placeholder='Nome' onChange={e => setNome(e.target.value)} />
            <input type="text"name='Hora'placeholder='CPF' onChange={e => setCpf(e.target.value)} />
            <input type="text" name="Rua" placeholder='email..' onChange={e => setEmail(e.target.value)} />
            <input type="text" name="Bairro" placeholder='Telefone..' onChange={e => setTelefone(e.target.value)} />
            <input type="password" name="Numero" placeholder='Senha' onChange={e => setSenha(e.target.value)} value={senha}/>
          
               
                        <Button onClick={handleSubmit}> Cadastrar </Button>
            
        </Event>



     
      </form>
)
}