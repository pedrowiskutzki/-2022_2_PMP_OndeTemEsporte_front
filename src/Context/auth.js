import React, { createContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { api } from "../Services/api/api";
import clienteService from "../Services/request/pessoaService";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {

    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userId, setUserId] = useState("");
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [pessoa, setPessoa] = useState("");
      
   const [token, setToken] = useState(null)
   useEffect(() => {

        // pega o token do storage quando a pagina for atualizada
        const token = localStorage.getItem('token')
        const pessoa = localStorage.getItem('pessoa');

        if (token) {
            api.defaults.headers.Authorization = `Bearer ${token}`;
            setToken(token);
            setPessoa(pessoa);
            setIsAuthenticated(true); 
            setUserName(localStorage.getItem('@user'));
            setUserEmail(localStorage.getItem('@email'));
            setUserId(localStorage.getItem('@id'));
            
        }
    }, [])      
  
  function signIn(emailLogin, senhaLogin) {
  
   	api.post("/pessoa/login", {"email" : emailLogin, "password" : senhaLogin }).then( (resp) => {
   		var token = resp.data.token;
   		var pessoa = resp.data.pessoa;
		api.defaults.headers.Authorization = `Bearer ${token}`;
		setToken(token);
		setPessoa(pessoa);
		localStorage.setItem("token", token);
		localStorage.setItem("pessoa",pessoa);
                localStorage.setItem("@authenticated", true);
                localStorage.setItem("@token",token);
                localStorage.setItem("@id", pessoa.pessoa_id);
                localStorage.setItem("@user", pessoa.nome);
                localStorage.setItem("@email", pessoa.email);
                setIsAuthenticated(true); 
                setUserName(pessoa.nome);
                setUserEmail(pessoa.email); 
                navigate("/homeadm")
            },(error) => {
                console.log(error)
    })
    }
         

  const signOut = () => {
        setIsAuthenticated(false);
        setUserId("");
        setUserName("");
        setUserEmail("");
        setPessoa(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("pessoa");
        localStorage.removeItem("@authenticated");
        localStorage.removeItem("@token");
        localStorage.removeItem("@id");
        localStorage.removeItem("@user");
        localStorage.removeItem("@email");

        navigate("/")
    }

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                signIn,
                signOut,
                userId,
                userName,
                userEmail,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContext;