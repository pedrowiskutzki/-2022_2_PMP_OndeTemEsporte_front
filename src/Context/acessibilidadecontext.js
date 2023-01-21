import React, {useState, useEffect} from "react";


export const AcessibilidadeContext = React.createContext(null)

export const AcessibilidadeContexto = (props) => {

const [tamanhoGlobalFonte, setTamanhoGlobalFonte] = useState(16)

useEffect(()=> {console.log(tamanhoGlobalFonte)
     if (tamanhoGlobalFonte <= 26 && tamanhoGlobalFonte >= 16) {
         document.documentElement.style.fontSize = tamanhoGlobalFonte + "px"
        
        } else if( tamanhoGlobalFonte > 26 ) {
            setTamanhoGlobalFonte(26)
            document.documentElement.style.fontSize = "30px"
        }
        else {
            setTamanhoGlobalFonte(16)
            document.documentElement.style.fontSize = "16px"
        }
    },[tamanhoGlobalFonte])

    return(
        <AcessibilidadeContext.Provider value={{ tamanhoGlobalFonte, setTamanhoGlobalFonte }}>
            {props.children}
        </AcessibilidadeContext.Provider>
    )
}