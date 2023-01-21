import styled from "styled-components";
export const DivInfos = styled.div `
display: flex;
flex-direction: column;
margin-top: 2.5rem;
width: 100%;
font-weight: lighter;
justify-content: flex-start;
margin: 1.5rem;


@media screen and (max-width: 768px){
    padding: 0 1rem ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
 h1{
    font-weight: bold;
    font-size : 15px;
    
 };
 h4{
    font-weight: lighter;
    font-size : 12px;
    
 }
}

`
export const CardBox = styled.div `


width: 80vw;
height: 20rem;
display: flex;
flex-direction: row;
margin-top: 3.5rem;
border: 1 px solid #000;
margin-bottom: 3.5rem;
background-color:  ${props => props.theme.colors.corComplementar4};
box-shadow:  28px 28px 56px #8f8f8f,
         -28px -28px 56px #ffffff;
transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
          transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;


:hover{
border-radius: 50px;
transform: scale(1.05);
}


img{
width: 35%;
height: 80%;
object-fit: cover;
border-radius: 5%;
margin: 1.5rem;
}

@media screen and (max-width: 768px){
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

img{
    width: 40%;
    height: 40%;
    margin-left: 1.5rem
}
}
`
export const Card = styled.div `

background-color: ${props => props.theme.colors.corComplementar4};
justify-content: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;



@media screen and (max-width: 768px){
height: 100%;
}

`
export const InputBusca = styled.input `

 width: 50rem;
 padding: 1rem;
 margin-top: 1rem;
 border-radius: 1rem;
 background: #e8e8e8;
 border: solid 1px #111;
 margin-left: 20.5rem;
 transition: 0.3s;
 font-weight: bold;

input:focus {
 outline-color: #e8e8e8;
 background: #e8e8e8;
 box-shadow: inset 20px 20px 60px #c5c5c5,
		inset -20px -20px 60px #ffffff;
 transition: 0.3s;
}
@media screen and (max-width: 768px){
        width: 25rem;
        margin-left: 2.5rem;
    }

`
