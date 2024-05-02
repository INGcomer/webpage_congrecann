import { useState, useEffect } from 'react';
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// data
import Json from '../../../../Data/Disertantes.json'
// components
import Disertante from './Disertante';
// css
import '../Sponsors.css';
// import './Disertantes.css';



export default function Disertantes() {
    const [CantidadSlides, SetCantidadSlides] = useState(1)

    useEffect(() => {
        console.log(window.innerWidth)
        if (window.innerWidth > 1200) {
            SetCantidadSlides(2)
        }
    }, [])

    return (
        <section id='Sponsors'>
            <h2> Disertantes: </h2>

            <Swiper
                slidesPerView={CantidadSlides}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
            >
                {Json.map((disertante, Index) => {
                    return (
                        <SwiperSlide key={Index}> <Disertante disertante={disertante} /> </SwiperSlide>
                    )
                })}
            </Swiper>




        </section>
    );
}
