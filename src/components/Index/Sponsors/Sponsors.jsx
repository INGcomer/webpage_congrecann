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
            
        </section>
    );
}
