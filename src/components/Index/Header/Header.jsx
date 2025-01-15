import './Header.css';

import charla from './img/charla.png'
import expo from './img/feria.png'
import shows from './img/show.png'
import comunidad from './img/comunidad.png'
import b2b from './img/b2b.png'
import fondo from './img/background.jpg'
import logo from './img/Logo.png'
// import fondo from './img/mapa topografico.png'
// import papel from './img/papel.png'
// import textura from './img/textura papel madera.jpg'
// import logo from './img/logo.png'
// import fechas from './img/fecha.png'
// import fondoIzquierda from './img/fondo izquierda.png'

export default function Header() {
    return (
        <section id="Header">
            <div className="texto">
                <img src={logo} alt="" />
                <h1> 11 y 12 de abril 2025 - Espacio Arizu - Godoy Cruz - Mendoza </h1>
            </div>
            <div className="cards">
                <div className="card baja">
                    <h2> Shows </h2>
                    <img src={shows} alt="" />
                </div>
                <div className="card">
                    <h2> Expo </h2>
                    <img src={expo} alt="" />
                </div>
                <div className="card baja">
                    <h2> B2B </h2>
                    <img src={b2b} alt="" />
                </div>
                <div className="card">
                    <h2> Charlas </h2>
                    <img src={charla} alt="" />
                </div>
                <div className="card baja">
                    <h2> Comunidad </h2>
                    <img src={comunidad} alt="" />
                </div>
            </div>
            <img src={fondo} alt="" className='fondo'/>
        </section>
    );
}
