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
import ingcome from './img/ingcome.png'

export default function Sponsors() {
    return (
        <section id='Sponsors'>
            <h2> Nos acompañan: </h2>

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
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>


            </Swiper>
        </section>
    );
}
