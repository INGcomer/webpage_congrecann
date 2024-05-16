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
import ingcome from './img/sponsors/ingcome.png'
import StrechArt from './img/sponsors/ArtStrech.png'
import Criolla from './img/sponsors/la criolla.png'
import Multitudes from './img/sponsors/multitudes.png'
import ohcho from './img/sponsors/ohcho blanco.png'

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
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className='sponsors Diamante'>
            <h2> Sponsors Diamante: </h2>

            </div>
            <div className='sponsors oro'>
            <h2> Sponsors Oro: </h2>

            </div>
            <div className='sponsors plata'>
            <h2> Sponsors Plata: </h2>
            </div>
            <div className='sponsors mediaParthners'>
            <h2> Media Partner: </h2>
            </div>
            <div className='sponsors organiza'>
            <h2> Organiza: </h2>
            </div>
        </section>
    );
}
