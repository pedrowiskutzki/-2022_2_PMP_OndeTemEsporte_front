import styled from "styled-components";

export const FormContainer = styled.form `

    display: flex;
    flex-direction: column;
    
  
`
export const DivContainer1 = styled.div `


`

export const DivContainer2 = styled.div `

`

export const Event = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0.5rem;
    background-image: url(${props => props.theme.image.backgroundImage});
    width: 100vw;
    height: 70vh;
    h3{
        font-size: 1.5rem;
        font-weight: 600;
        color: ${props => props.theme.colors.corInputText};
    }
    
input {
 border: none;
 width: 75rem;
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


.select {
width: 37.5rem;
margin-top: 1rem;
 padding: 0.5rem;
 margin-top: 1rem;
 border-radius: 1rem;
 background: #e8e8e8;
 border: solid 1px #111;
 margin-left: 0.5rem;
  /* box-shadow: 20px 20px 60px #c5c5c5,
		-20px -20px 60px #ffffff; */
 transition: 0.3s;
 @media screen and (max-width: 768px){
    
    width: 13.5rem;
    }
}

 

    @media screen and (max-width: 768px){
    
    align-items: flex-start;
    
    input{
        width: 70%;
    }
  
}
    
`


export const Button = styled.button `
padding: 0.5rem;
background-color: ${props => props.theme.colors.corPrimaria};
color: ${props => props.theme.colors.corComplementar4};
width: 20rem;
border-radius: 0.7rem;
justify-content: center;
margin-top: 0.8rem;
border: 1px solid ${props => props.theme.colors.corSecundaria};
margin-left: 4.5rem;


`
   


export const Div1 = styled.div `
display: flex;
flex-direction: row;


input{
    width: 25rem;
}
@media screen and (max-width: 768px){
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    input {
        height: auto;
        width: 9.0rem;
    }
    }

`


export const Div2 = styled.div `
display: flex;
flex-direction: row;
input{
    width: 37.5rem;
}
@media screen and (max-width: 768px){
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    input {
        height: auto;
        width: 9.0rem;
    }
    }

`

export const Div3 = styled.div `
display: flex;
flex-direction: row;
input{
    width: 25rem;
}
@media screen and (max-width: 768px){
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    input {
        height: auto;
        width: 9.0rem;
    }
    }

`
export const Div4 = styled.div `
display: flex;
flex-direction: row;
input{
    width: 25rem;
}
@media screen and (max-width: 768px){
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    input {
        height: auto;
        width: 9.0rem;
    }
    }

`

export const Div5 = styled.div `
display: flex;
flex-direction: row;
input{
    width: 37.5rem;
}

@media screen and (max-width: 768px){
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    input {
        height: auto;
        width: 13.5rem;
    }
    }

`
