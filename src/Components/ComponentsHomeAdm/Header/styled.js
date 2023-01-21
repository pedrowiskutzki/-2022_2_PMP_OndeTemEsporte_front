import styled from "styled-components";

 
export const HeaderAdm = styled.header `
    
    background-color:  ${props => props.theme.colors.corComplementar4};
    width: 100%;
    height: 20vh;
    color:  ${props => props.theme.colors.corComplementar2};
    border-bottom: 0.5px solid #090909;
    padding: 15px;
    justify-content: space-between;
    align-items: center;
    display: flex;
   
    @media screen and (max-width: 768px){
        flex-direction: row;
        justify-content: space-between;
        height: 40vh;
        align-items: center;
        h2{
            font-size: 18px; 
        };
        
        h3{
            font-size: 16px;
            margin-top: 0.15rem;
        }
        

    }
`

export const Button = styled.button `

    background-color:  ${props => props.theme.colors.corPrimaria};
    color:  ${props => props.theme.colors.corComplementar4};
    border-radius: 10% ;
    border: none;
    padding: 0.5em 0.5em 0.5em;
    margin: 0.5em;
    width: 10.5rem;
    height: 2.5rem;
    cursor: pointer;
    box-shadow: 1px -2px 11px 6px rgba(7,2,31,0.3) ;

    @media screen and (max-width: 768px){
        width: 4.5;
    
    }`

    export const Box = styled.div `
    
    background-color:  ${props => props.theme.colors.corComplementar4};
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    @media screen and (max-width: 768px){   

        flex-direction: column;
        align-items: flex-start;

    }

    
    `
export const BoxButtons = styled.div `

display: flex;
flex-direction: row;
background-color:  ${props => props.theme.colors.corComplementar4};
justify-content: center;
align-items: center;
height: 4.5rem;

button {
  
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color:  ${props => props.theme.colors.corComplementar4};
  background-color:  ${props => props.theme.colors.corPrimaria};
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
}

button:hover {
  background-color:  ${props => props.theme.colors.corComplementar3};
  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  color:  ${props => props.theme.colors.corComplementar4};
  transform: translateY(-5px);
}

button:active {
  transform: translateY(-1px);
}


@media screen and (max-width: 768px){   

flex-direction: column;
align-items: center;
justify-content: baseline;
margin-left: 5.5rem;

height: 100vh;
}

`

export const BoxLogout = styled.div `
    display: flex;
    justify-content: flex-end;
    padding: 0.5em 0.5em;
    height: 100%;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        button{
            width: 10.5rem;
            height: 2.3rem;
            margin-left:  5.5rem;
            
        }

    }
`

export const RedButton = styled.button `
  
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

