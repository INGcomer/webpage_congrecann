import './Header.css';

import fondoDerecha from './img/fondo derecha.png'
import fondoIzquierda from './img/fondo izquierda.png'

export default function Header() {
    return (
        <section id="Header">

            <h1> Mendo Cann </h1>
            <span> Perspectivas desde Mendoza </span>

            <img src={fondoDerecha} className='fondo derecha' alt="" />
            <img src={fondoIzquierda} className='fondo izquierda' alt="" />
        </section>
    );
}
