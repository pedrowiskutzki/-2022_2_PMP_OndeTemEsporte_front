import styled from "styled-components";
 export const Mensagem = styled.h3 `
   color: ${props => props.theme.colors.corComplementar4};
      
 `
export const DivContainer = styled.div `
    width: 100%;
    height: 30rem;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-image: url( ${props => props.theme.image.backgroundImage});
    padding: 0;
    margin: 0;
   
`

export const Formulario = styled.form `
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
background-color: ${props => props.theme.colors.corPrimaria};
border: 1px solid #000;
border-radius: 0.8rem;
height: 18.5rem;
width: 18rem;
box-shadow: inset 35px 35px 62px #111127,
            inset -35px -35px 62px #252353;


label {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1.5rem;

}

 button {

 margin-top: 1.5rem;
 padding: 0.8em 1.8em;
 border: 2px solid #F6F6F6;
 position: relative;
 overflow: hidden;
 background-color: transparent;
 text-align: center;
 text-transform: uppercase;
 font-size: 16px;
 transition: .3s;
 z-index: 1;
 font-family: inherit;
 color: #F6F6F6;
}

button::before {
 content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: #F6F6F6;
 transition: .5s ease;
 display: block;
 z-index: -1;
}

button:hover::before {
 width: 155%;
}

button:hover {
 color: #111;
}



input {
 margin-top: 1.5rem;
 line-height: 28px;
 border: 2px solid transparent;
 border-bottom-color: #F7F7F7;
 padding: .2rem 0;
 outline: none;
 background-color: transparent;
 color: #F7F7F7;
 transition: .3s cubic-bezier(0.645, 0.045, 0.355, 1);
}

input:focus, input:hover {
 outline: none;
 padding: .2rem 1rem;
 border-radius: 1rem;
 border-color: #F6F6F6;
}

input::placeholder {
 color: #F6F6F6;
 
}

input:focus::placeholder {
 opacity: 0;
 transition: opacity .3s;
}



`
