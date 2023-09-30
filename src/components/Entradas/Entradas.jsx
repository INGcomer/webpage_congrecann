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
            <h2> Entradas </h2>

            <div className="entradas">
                <div className="simple">
                    <div className="entrada">
                        <div className="dia">
                            Jueves 8
                        </div>
                        <div className="precio">
                            $ 5.000
                        </div>
                        <a href="">
                            <Button> Comprar </Button>
                        </a>
                    </div>
                    <div className="entrada completa">
                        <div className="dia">
                            Combo 2 días
                        </div>
                        <div className="precio">
                            $ 8.000
                        </div>
                        <a href="">
                            <Button> Comprar </Button>
                        </a>
                    </div>
                    <div className="entrada">
                        <div className="dia">
                            Viernes 9
                        </div>
                        <div className="precio">
                            $ 5.000
                        </div>
                        <a href="">
                            <Button> Comprar </Button>
                        </a>
                    </div>
                </div>
                {/* <div className="completa">
                    <div className="entrada">
                        <div className="dia">
                            Combo 2 días
                        </div>
                        <div className="precio">
                            $ 8.000
                        </div>
                        <a href="">
                            <Button> Comprar </Button>
                        </a>
                    </div>
                </div> */}
            </div>

        </section>
    );
}
