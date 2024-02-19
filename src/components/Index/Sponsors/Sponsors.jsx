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

export default function Sponsors() {
    const [CantidadSlides, SetCantidadSlides] = useState(1)

    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 1200) {
            SetCantidadSlides(3)
        }
    }, [])
    return (
        <section id='Sponsors'>
            <h2> Nos acompañan: </h2>

            <Swiper
                slidesPerView={CantidadSlides}
                spaceBetween={30}
                loop={true}
                // pagination={{
                //     clickable: true,
                // }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img className='sponsord' src={Criolla} alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='sponsord' src={StrechArt} alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='sponsord' src={Multitudes} alt="" /> </SwiperSlide>
                <SwiperSlide> <img className='sponsord' src={ingcome} alt="" /> </SwiperSlide>
            </Swiper>
        </section>
    );
}
