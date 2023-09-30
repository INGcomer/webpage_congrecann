// React
import { useState } from "react";
// components
import Button from '../basics/Button'
// css
import './AboutUs.css';
// imgs
import fondo from './img/mapa topografico.png'
import industria from './img/industria.png'
import medicina from './img/medicina.png'
import cultivo from './img/cultivo.png'

export default function AboutUs() {

    const [color, setColor] = useState("");
    const [titulo, setTitulo] = useState("Nuestros Pilares");


    return (
        <section id='AboutUs'>
            <div className='pilares'>
                    <div className='pilar' onClick={() => {setColor("#FFB6B4"); setTitulo("INDUSTRIA") }} >
                        <div className='icono' style={{ "background-color": "#FFB6B4" }}>
                            <img src={industria} alt="" />
                        </div>
                        <div className='texto' style={{ "color": "#FFB6B4" }}>
                            INDUSTRIA
                        </div>
                    </div>
                    <div className='pilar' onClick={() => {setColor("#037171"); setTitulo("MEDICINA") }} >
                        <div className='icono' style={{ "background-color": "#037171" }}>
                            <img src={medicina} alt="" />
                        </div>
                        <div className='texto' style={{ "color": "#037171" }}>
                            MEDICINA
                        </div>
                    </div>
                    <div className='pilar' onClick={() => {setColor("#97CB33"); setTitulo("CULTIVO") }} >
                        <div className='icono' style={{ "background-color": "#97CB33" }}>
                            <img src={cultivo} alt="" />
                        </div>
                        <div className='texto' style={{ "color": "#97CB33" }}>
                            CULTIVO
                        </div>
                    </div>
                </div>

                <div className='descripcion'>  
                    <div className='titulo' style={{ "color": color }}>
                        {titulo}
                    </div>
                    <div className='parrafo'>
                        <p>
                            estos son nuestros pilares.  relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno
                        </p>
                    </div>
                </div>

            <img src={fondo} alt="" className='fondo' />
        </section>
    );
}
