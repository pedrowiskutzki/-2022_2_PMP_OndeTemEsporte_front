import "./styles.css"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import React, { useEffect, useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import ptBrLocale from '@fullcalendar/core/locales/pt-br';
import eventoService from "../../Services/request/eventoEspecialService";


export default function Calendar() {
  const [evento, setEvento] = useState([]);
  
  useEffect(() => {
    eventoService
      .getAll()
      .then((res) => {
        var eventos = res.data.map(data => ({
          url: "/",
          color: "#333",
          textColor: '#F7F7F7',
          title: data.nome,
          date: data.data
        })); 
        setEvento(eventos);
        console.log(res.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
   

 
 return (
    <FullCalendar 
    locale={ptBrLocale}
    plugins={[ dayGridPlugin]}
    initialView="dayGridMonth"
    events={ evento}       
   />
        
 )}
