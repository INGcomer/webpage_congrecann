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
import StrechArt from './img/ArtStrech.png'
import Criolla from './img/la criolla.png'
import Multitudes from './img/multitudes.png'

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
                    delay: 6000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide> <img src={Criolla} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={StrechArt} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={Multitudes} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                {/* <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide>
                <SwiperSlide> <img src={ingcome} alt="" /> </SwiperSlide> */}


            </Swiper>
        </section>
    );
}
