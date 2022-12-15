import React, { Component, useState, useEffect } from 'react'

export const ClockHook = (props) => {

   const defaultState = {
      // Se genera una fecha como estado inicial del componente
      fecha: new Date(),
      edad: 0,
      nombre: 'Javier',
      apellidos: 'San Jose'
   }


   const [defaultClock, setdefaultClock] = useState(defaultState);

   useEffect(() => {
      const timerID = setInterval(() => {
         tick()
      }, 1000)
      return () => {
         clearInterval(timerID)
      };
   });

   const tick = () => {
      setdefaultClock((prevState) => {
         let edad = defaultClock.edad + 1;         
         return {
            ...prevState,  //?aquí hace propagación de todas las propiedades del objeto          
            fecha: new Date(),
            edad,

         }
      });
   }

   return (
      <div>
         <div>
            <h2>
               Hora Actual:
               {defaultClock.fecha.toLocaleTimeString()}
            </h2>
            <h3>{defaultClock.nombre} {defaultClock.apellidos}</h3>
            <h1>Edad: {defaultClock.edad}</h1>
         </div>
      </div>
   );
}


