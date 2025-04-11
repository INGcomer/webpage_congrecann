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
import ARAHAND from './img/sponsors/ARAHAND.png';
import CANNECT from './img/sponsors/CANNECT.png';
import GROWCAST from './img/sponsors/GROWCAST.png';
import HQA from './img/sponsors/HQA.png';
import INSATIVA from './img/sponsors/INSATIVA.png';
import PACU from './img/sponsors/PACCU.png';
import KCB from './img/sponsors/KCBD.png';
import UNIVERSAL from './img/sponsors/UNIVERSAL.png';
import GDSF from './img/sponsors/GDSF.png';
import OJITOS from './img/sponsors/OJITOS.png';
import GEOSTOCK from './img/sponsors/GEOSTOCK.png';
import DR from './img/sponsors/DR.png';
import GREENFIRE from './img/sponsors/GREENFIRE.png';
import TEHACEMOS from './img/sponsors/TEHACEMOSCULTIVAR.png';
import MENDOZA from './img/sponsors/MENDOZA.png';
import GUAYMALLEN from './img/sponsors/guaymallen.png';

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
                <div className="imgs">
                <img src={MENDOZA} alt="Gobierno de Mendoza" />
                <img src={GUAYMALLEN} alt="Municipalidad de Guaymallen" />
                </div>
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
                    <img src={GREENFIRE} alt="Green Fire" />
                    {/* <img src="" alt="CTH" /> */}
                    <img src={CANNECT} alt="Cannect" />
                    <img src={PACU} alt="Laboratorios Paccu" />
                    {/* <img src="" alt="HarvestPro SA" /> */}
                    {/* <img src="" alt="FECCA" /> */}
                    <img src={GDSF} alt="GdSF Estrategia y Estudio Jurídico" />
                </div>
            </div>
            <div className='sponsors plata'>
                <h2> Sponsors Plata: </h2>
                <div className="imgs">
                    <img src={DR} alt="Dr Cultivo" />
                    <img src={INSATIVA} alt="Insativa" />
                    <img src={GROWCAST} alt="Growcast" />
                    <img src={OJITOS} alt="Ojitos Rojos " />
                    {/* <img src="" alt="Stand de Clubes" /> */}
                    <img src={GEOSTOCK} alt="Seedstockers" />
                    <img src={TEHACEMOS} alt="Te Hacemos Cultivar" />
                    <img src={HQA} alt="Laboratorio HQA" />
                </div>
            </div>
            {/* <div className='sponsors mediaParthners'>
                <h2> Media Partner: </h2>
                <div className="imgs">
                    <img src="" alt="Pelagatos" />
                    <img src="" alt="Marimba" />
                    <img src="" alt="Sontrip" />
                </div>
            </div> */}
        </section>
    );
}
