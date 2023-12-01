// React
import React from "react";
// Componentes
import Clock from "./Clock";
// css
import './Contador.css'
// imgs
import papel from './img/papel.png'

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
    </section>
  );
};

export default Contador;
