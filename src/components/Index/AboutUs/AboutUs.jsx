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
    const [descripcion, setDescripcion] = useState("");


    return (
        <section id='AboutUs'>
            <div className='pilares'>
                <div
                    className='pilar'
                    onClick={() => {
                        setColor("#97CB33");
                        setTitulo("CULTIVO");
                        setDescripcion('Nos centraremos en las mejores prácticas de cultivo de cannabis, desde técnicas de cultivo en indoor y exteriores hasta la genética de las cepas y la gestión de plagas. Imperdible oportunidad de aprender sobre la optimización de la producción, la sostenibilidad agrícola y las últimas tendencias en la agricultura de cannabis. También se destacarán las oportunidades para los cultivadores locales y la importancia de la calidad en la producción.')
                    }}
                >
                    <div className='icono' style={{ "background-color": "#97CB33" }}>
                        <img src={cultivo} alt="" />
                    </div>
                    <div className='texto' style={{ "color": "#97CB33" }}>
                        CULTIVO
                    </div>
                </div>
                <div
                    className='pilar'
                    onClick={() => {
                        setColor("#FFB6B4");
                        setTitulo("INDUSTRIA");
                        setDescripcion('En este segmento, se explorarán las aplicaciones industriales del cannabis y el cáñamo. Esto incluirá discusiones sobre la fabricación de productos derivados del cáñamo, como textiles y materiales de construcción, así como el potencial de la industria del cannabis en la creación de empleo y el desarrollo económico. También se analizarán temas relacionados con la regulación y las oportunidades comerciales en el mercado del cannabis y el cáñamo industrial.')
                    }}
                >
                    <div
                        className='icono'
                        style={{ "background-color": "#FFB6B4" }}
                    >
                        <img src={industria} alt="" />
                    </div>
                    <div className='texto' style={{ "color": "#FFB6B4" }}>
                        INDUSTRIA
                    </div>
                </div>
                <div
                    className='pilar'
                    onClick={() => {
                        setColor("#037171");
                        setTitulo("MEDICINA");
                        setDescripcion('También se abordarán temas relacionados con los usos medicinales del cannabis. Se incluirán presentaciones y discusiones sobre las propiedades terapéuticas del cannabis, los avances en investigación médica, los protocolos de prescripción y la experiencia de pacientes que han encontrado alivio a través del cannabis medicinal. Además, se explorarán los desafíos regulatorios y legales que rodean el acceso a tratamientos basados en cannabis.')
                    }}
                >
                    <div className='icono' style={{ "background-color": "#037171" }}>
                        <img src={medicina} alt="" />
                    </div>
                    <div className='texto' style={{ "color": "#037171" }}>
                        MEDICINA
                    </div>
                </div>

            </div>

            <div className='descripcion'>
                <div className='titulo' style={{ "color": color }}>
                    {titulo}
                </div>
                <div className='parrafo'>
                    {/* <p>
                        estos son nuestros pilares.  relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno relleno
                    </p> */}
                    <p> {descripcion} </p>
                </div>
            </div>

            <img src={fondo} alt="" className='fondo' />
        </section>
    );
}
