// React
import { useState } from "react";
// components
import Button from '../basics/Button'
// css
import './Entradas.css';
// imgs


export default function Entradas() {
    return (
        <section id='Entradas'>
            <div className="textoContainer">
                <div className="textoContainer2">
                <h2> Entradas </h2>

                <p>Pronto revelaremos mas informacion sobre las entradas</p>
                </div>
                
            </div>
            <div className="entradasContainer">
                <div className="entrada">
                    <h3> Entrada B2B </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, similique atque? Ex aliquam fugiat voluptate, eos reprehenderit corporis dolorem illum vel veniam repellendus, inventore at obcaecati vitae deleniti id beatae.</p>
                    <h4>PRECIO: XXXX</h4>

                    <Button>
                        COMPRAR
                    </Button>

                    <div className="proximamente">
                        <div><span>Proximamente</span></div>
                    </div>
                </div>
                <div className="entrada">
                    <h3> Entrada Basica </h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos vitae esse neque? Ratione odio repudiandae odit at nobis? Nobis porro earum asperiores placeat sequi pariatur velit quam eveniet libero ipsam.</p>
                    <h4>PRECIO: XXXX</h4>

                    <Button>
                        COMPRAR
                    </Button>

                    <div className="proximamente">
                        <div><span>Proximamente</span></div>
                    </div>
                </div>
            </div>
            

        </section>
    );
}
