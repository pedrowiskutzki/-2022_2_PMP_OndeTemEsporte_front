import React from "react"
import { Link } from "react-router-dom"
import { Rodape } from "./styled"

export const Footer = () => {
    
    return(
        <Rodape>
                <img src={require('../../images/brasao_branco.png')} width="140x" heigth="120px" alt=''/>
                 <Link to="/LoginAdm"> 
                    <h1>Area Administrativa</h1>
                 </Link> 
        </Rodape>
    )
}