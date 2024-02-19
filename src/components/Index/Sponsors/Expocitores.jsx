// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// data
import Json from './Data/Expocitores.json'
// css
import './Sponsors.css';
// img
// import Sabia from './img/expocitores/IMG-20240206-WA0001_-_Gustavo_Mamianetti-removebg-preview.png'

export default function Expocitores() {
    return (
        <section id='Sponsors'>
            <h2> Expocitores: </h2>

            <Swiper
                slidesPerView={3}
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
                {Json.map((expocitor) => {
                return (
                    <SwiperSlide> <Expocitor expocitor={expocitor}/> </SwiperSlide>
                )
            })}
            </Swiper>

            


        </section>
    );
}

function Expocitor({expocitor}) {
    return (
        <div className='expocitor'>
            <img src={expocitor.img} alt="" />
            <h3>{expocitor.nombre_linea_1}</h3>
            <h4>{expocitor.nombre_linea_2}</h4>
        </div>
    )
}
