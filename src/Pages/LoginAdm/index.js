
import React, { useContext, useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/auth';
import { Mensagem, DivContainer, Formulario } from './styled'


export default function LoginAdm() {

    const { signIn } = useContext(AuthContext);
    const [mensagem, setMensagem] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSignIn(e) {
        e.preventDefault()
       signIn(email, password)
    }
     

    return (
        <>
            <DivContainer>
                <Formulario>
                    <label>     
                    <input placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button onClick={handleSignIn}> Entrar </button> 
                    <Mensagem>{mensagem}</Mensagem>
                    </label>
                </Formulario>

            </DivContainer>
        </>

    )
}