// React
import React from "react";
// Componentes
import Clock from "./Clock";
// css
import './Contador.css'
// imgs
import papel from './img/papel.png'
import textura from './img/textura papel madera.jpg'
import planta from './img/planta.png'
import planta2 from './img/planta2.png'

const Contador = () => {
  let deadline = "April, 19, 2024";

  return (
    <section id="Contador">
        <div className="cartel">
            <img src={papel} alt="fondo de la cuenta atras" />
            <div className="text">
                Nos vemos en:
            </div>
            <Clock deadline={deadline}/>
        </div>
        <img src={textura} alt="Textura de papel" className='textura' />
        <img src={planta} alt="planta 1" className='planta_1' />
        <img src={planta} alt="planta 2" className='planta_2' />
        <img src={planta2} alt="planta 3" className='planta_3' />
        <img src={planta2} alt="planta 4" className='planta_4' />
        <img src={planta2} alt="planta 5" className='planta_5' />
        <img src={planta2} alt="planta 6" className='planta_6' />
    </section>
  );
};

export default Contador;
