import styled from "styled-components";

 



export const RedButton = styled.button `
  margin-top: 2.5rem;
  width: 6.0rem;
  height: 2.5rem;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color:  ${props => props.theme.colors.corComplementar4};
  background-color: red;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;


:hover {
  background-color: #C86355;
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color:  ${props => props.theme.colors.corComplementar4};
  transform: translateY(-5px);
}

:active {
  transform: translateY(-1px);
}

@media screen and (max-width: 768px){
   width: 6.0rem;
}

`

export const BlueButton = styled.button `
margin-bottom: 1.3rem;
margin-top: 2.5rem;
height: 2.5rem;
width: 6.0rem;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color:  ${props => props.theme.colors.corComplementar4};
  background-color: blue;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;


:hover {
  background-color:  ${props => props.theme.colors.corPrimaria};
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color: #fff;
  transform: translateY(-5px);
}

:active {
  transform: translateY(-1px);
}

@media screen and (max-width: 768px){
   margin-top: 0;
   margin-left: 1.5rem;
   margin-right: 1.5rem;
}

`



export const Card = styled.div `

background-color:  ${props => props.theme.colors.corComplementar4};
justify-content: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;


@media screen and (max-width: 768px){
   
}

`

export const DivButtons = styled.div `
margin-left: 15px;
display: flex;
flex-direction: column;
position: relative;
width: 450px;



@media screen and (max-width: 768px){ 
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1.5rem;
}
`
export const CardBox = styled.div `

 
 width: 80vw;
 height: 11rem;
 display: flex;
 flex-direction: row;
 margin-top: 3.5rem;
 margin-bottom: 3.5rem;
 background-color: #e0e0e0;
 box-shadow:  28px 28px 56px #8f8f8f,
             -28px -28px 56px #ffffff;
 transition: border-radius cubic-bezier(0.075, 0.82, 0.165, 1) 1s,
              transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;


:hover {
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

    export const DivInfos = styled.div `
    display: flex;
    flex-direction: column;
    margin-top: 2.5rem;
    width: 100%;
    font-weight: lighter;
    justify-content: flex-start;
    margin: 1.5rem;
    
    h1{
        font-weight: bold;
        font-size : 20px;
        min-width: 100%;
       
    };
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
        width: 100%;
     }
    }

`
