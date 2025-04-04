import { useState, useEffect } from 'react';
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// css
import './Sponsors.css';
// Sponsos
import ARAHAND from './img/sponsors/ARAHAND.jpg';
import CANNECT from './img/sponsors/CANNECT.png';
import GROWCAST from './img/sponsors/GROWCAST.png';
import HQA from './img/sponsors/HQA.png';
import INSATIVA from './img/sponsors/INSATIVA.png';
import PACU from './img/sponsors/PACCU.png';
import KCB from './img/sponsors/KCBD.jpg';
import UNIVERSAL from './img/sponsors/UNIVERSAL.png';


export default function Sponsors() {
    const [CantidadSlides, SetCantidadSlides] = useState(2)

    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 1200) {
            SetCantidadSlides(3)
        }
    }, [])
    return (
        <section id='Sponsors'>
            <div className='sponsors nosAcompañan'>
                <h2> Nos acompañan: </h2>
                <img src="" alt="Gobierno de Mendoza" />
            </div>
            <div className='sponsors Diamante'>
                <h2> Sponsors Diamante: </h2>
                <div className="imgs">
                    <img src={ARAHAND} alt="Arahand Seeds" />
                    <img src={KCB} alt="KCB Corp" />
                    <img src={UNIVERSAL} alt="Universal Growing" />
                </div>
            </div>
            <div className='sponsors oro'>
                <h2> Sponsors Oro: </h2>
                <div className="imgs">
                    <img src="" alt="Green Fire" />
                    <img src="" alt="CTH" />
                    <img src={CANNECT} alt="Cannect" />
                    <img src={PACU} alt="Laboratorios Paccu" />
                    <img src="" alt="HarvestPro SA" />
                    <img src="" alt="FECCA" />
                    <img src="" alt="GdSF Estrategia y Estudio Jurídico" />
                </div>
            </div>
            <div className='sponsors plata'>
                <h2> Sponsors Plata: </h2>
                <div className="imgs">
                    <img src={INSATIVA} alt="Insativa" />
                    <img src={GROWCAST} alt="Growcast" />
                    <img src="" alt="Ojitos Rojos " />
                    <img src="" alt="Stand de Clubes" />
                    <img src="" alt="Dr Cultivo" />
                    <img src="" alt="Seedstockers" />
                    <img src="" alt="Te Hacemos Cultivar" />
                    <img src={HQA} alt="Laboratorio HQA" />
                </div>
            </div>
            <div className='sponsors mediaParthners'>
                <h2> Media Partner: </h2>
                <div className="imgs">
                    <img src="" alt="Pelagatos" />
                    <img src="" alt="Marimba" />
                    <img src="" alt="Sontrip" />
                </div>
            </div>
        </section>
    );
}
