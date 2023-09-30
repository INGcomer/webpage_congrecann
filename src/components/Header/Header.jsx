import './Header.css';

import fondo from './img/mapa topografico.png'
import logo from './img/logo.png'
// import fondoIzquierda from './img/fondo izquierda.png'

export default function Header() {
    return (
        <section id="Header">
            <img src={fondo} alt="" className='fondo'/>

            <img src={logo} alt="" className='logo'/>

        </section>
    );
}
