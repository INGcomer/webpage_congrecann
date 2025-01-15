import './newHeader.css';

// import fondo from './img/mapa topografico.png'
import papel from './img/papel.png'
import textura from './img/textura papel madera.jpg'
// import logo from './img/logo.png'
// import fechas from './img/fecha.png'
// import fondoIzquierda from './img/fondo izquierda.png'
import ReactPlayer from 'react-player'

import video from './img/Mendocann.m4v'

export default function NewHeader() {
    return (
        <section id="Header">


    <ReactPlayer 
        url={video} 
        playing={true} 
        loop={true} 
        height='auto'
        width='100%'
    />

        </section>
    );
}
