// React
import { useState } from "react";
// components
import Button from '../../basics/Button/Button'
import Clock from "../Contador/Clock";
// css
import './Entradas.css';
// imgs


export default function Entradas() {
    let deadline = "February, 29, 2024, 16:20:00";

    return (
        <section id='Entradas'>
             <h2> Entradas </h2>
            <div className="entradasContainer">
                <div className="entrada">
                    <h3> Entrada General </h3>
                    <p>
                    Sumérgete en el vibrante mundo del cannabis. Accede a todos los rincones de la Expo MendoCann 2024, desde las últimas novedades en tecnología cannábica hasta los shows en vivo más emocionantes. Una experiencia completa para todos los amantes del cannabis
                    </p>
                    <h4>PRECIO POR DIA: $8.500</h4>
                    <h4>PACK 2 DIAS: $13.500</h4>

                    {/* <Button>
                        COMPRAR
                    </Button> */}

                    <div className="proximamente">
                        <div><span>Proximamente</span></div>
                    </div>
                </div>
                <div className="entrada">
                    <h3> Entrada B2B </h3>
                    <p>
                    Da un paso hacia el futuro de los negocios cannábicos con nuestra Entrada B2B. Obtén acceso exclusivo a la Plataforma B2B y a espacios diseñados para conexiones empresariales. Participa en reuniones estratégicas, establece colaboraciones y descubre oportunidades únicas en la industria.
                    </p>
                    <h4>PRECIO POR DIA: $17.000</h4>
                    <h4>PACK 2 DIAS: $28.000</h4>

                    {/* <Button>
                        COMPRAR
                    </Button> */}

                    <div className="proximamente">
                        <div><span>Proximamente</span></div>
                    </div>
                </div>
                <div className="entrada">
                    <h3> Entrada VIP </h3>
                    <p>Vive la experiencia definitiva con nuestra Entrada VIP. Disfruta de todos los beneficios de la Entrada B2B, además de acceso a una jornada completa de degustaciones, almuerzos exclusivos y eventos VIP. Sumérgete en la cultura cannábica de manera única y celebra con estilo en la Expo MendoCann 2024.</p>
                    <h4>PRECIO POR DIA: $30.000</h4>
                    <h4>PACK 2 DIAS: $50.000</h4>

                    {/* <Button>
                        COMPRAR
                    </Button> */}

                    <div className="proximamente">
                        <div><span>Proximamente</span></div>
                    </div>
                </div>
            </div>

            {/* <a  className="comprar disabled"> <span>Compra disponible en:</span> <span><Clock deadline={deadline}/></span>  </a> */}
            <a href="https://www.showstickets.ar/event/mendocann" className="comprar"> <span>Comprar entradas</span>  </a>
            

        </section>
    );
}
