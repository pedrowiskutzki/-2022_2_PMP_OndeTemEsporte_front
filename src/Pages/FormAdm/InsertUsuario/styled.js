import styled from "styled-components";


export const Event = styled.label `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;
    width: auto;
    height: 80vh;
    background-image: url(${props => props.theme.image.backgroundImage});
    
    h3{
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.theme.colors.corInputText};
    }
    
    input {
 border: none;
 width: 50rem;
 padding: 1rem;
 margin-top: 1rem;
 border-radius: 1rem;
 background: #e8e8e8;
 border: solid 1px #111;
 margin-left: 0.5rem;
  /* box-shadow: 20px 20px 60px #c5c5c5,
		-20px -20px 60px #ffffff; */
 transition: 0.3s;
}

input:focus {
 outline-color: #e8e8e8;
 background: #e8e8e8;
 box-shadow: inset 20px 20px 60px #c5c5c5,
		inset -20px -20px 60px #ffffff;
 transition: 0.3s;
}

@media screen and (max-width: 768px){
    
    
    input{
        width: 25rem;
    }
  
}

`

export const Button = styled.button `
padding: 0.5rem;
background-color: ${props => props.theme.colors.corSecundaria};
color: ${props => props.theme.colors.corPrimaria};
width: 20rem;
border-radius: 0.7rem;
justify-content: center;
margin-top: 0.8rem;


`
