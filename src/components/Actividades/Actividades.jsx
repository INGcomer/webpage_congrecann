// React
import { useState } from "react";
// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// components
import Button from '../basics/Button'
// css
import './Actividades.css';
// imgs
import ingcome from './img/ingcome.png'
import fondo from './img/mapa topografico.png'
// conferencias
import c1 from './img/conferencias/1.jpeg'
import c2 from './img/conferencias/2.jpeg'
import c3 from './img/conferencias/3.jpeg'
// feria
import f1 from './img/feria/1.jpg'
import f2 from './img/feria/2.webp'
import f3 from './img/feria/3.jpg'
import f4 from './img/feria/4.jpg'
// eventos nocturnos
import v1 from './img/eventos nocturnos/1.webp'

export default function Actividades() {
    return (
        <section id='Actividades'>
            <h2> Actividades </h2>
            <div className="container">
                <div className="actividad">
                    <div className="texto">
                        <h3> Conferencias  </h3>
                        <p>
                            Sobre los 3 Pilares propuestos, persiguiendo dar una experiencia completa a cada unos de los diferentes segmentos de asistentes.
                        </p>
                    </div>
                    <div className="carrucel">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide> <img src={c1} alt="" /> </SwiperSlide>
                            <SwiperSlide> <img src={c2} alt="" /> </SwiperSlide>
                            <SwiperSlide> <img src={c3} alt="" /> </SwiperSlide>
                        </Swiper>
                    </div>
                </div>


                <div className="actividad invertida">
                    <div className="texto">
                        <h3> Feria/Expo de empresas  </h3>
                        <p>
                            Haciendo participe a todos los sectores de la industria de cada mercado, buscando una experiencia interactiva.
                        </p>
                        {/* <ul>
                            <li>  </li>
                        </ul> */}
                    </div>
                    <div className="carrucel">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide> <img src={f1} alt="" /> </SwiperSlide>
                            <SwiperSlide> <img src={f2} alt="" /> </SwiperSlide>
                            <SwiperSlide> <img src={f3} alt="" /> </SwiperSlide>
                            <SwiperSlide> <img src={f4} alt="" /> </SwiperSlide>
                        </Swiper>
                    </div>
                </div>




                <div className="actividad">
                    <div className="texto">
                        <h3> Actividades Culturales/Artísticas  </h3>
                        <p>
                            Buscando el enfoque de profundizar en la cultura cannábica como parte de la propuesta de experiencia de asistente.
                        </p>
                    </div>
                    {/* <div className="carrucel">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide> <img src={v1} alt="" /> </SwiperSlide>
                        </Swiper>
                    </div> */}
                </div>





                <div className="actividad invertida">
                    <div className="texto">
                        <h3> Eventos Nocturnos  </h3>
                        <p>
                            Complementando a la experiencia del asistente y dando un veta más atractiva al público recreativo.
                        </p>
                    </div>
                    <div className="carrucel">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            loop={true}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[Autoplay, Pagination]}
                            className="mySwiper"
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                        >
                            <SwiperSlide> <img src={v1} alt="" /> </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>

            <img src={fondo} alt="" className="fondo"/>
        </section>
    );
}
