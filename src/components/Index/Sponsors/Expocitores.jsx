// swiper
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
// data
import Json from '../../../Data/Expocitores.json'
// css
import './Sponsors.css';
// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Expocitores() {
    return (
        <section id='Sponsors'>
            <h2> Expositores: </h2>

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
                        <SwiperSlide> <Expocitor expocitor={expocitor} /> </SwiperSlide>
                    )
                })}
            </Swiper>




        </section>
    );
}

function Expocitor({ expocitor }) {
    return (
        <div className='expocitorContainer'>
            <div className='expocitor'>
                <img src={expocitor.img} alt="" />
                <h3>{expocitor.nombre_linea_1}</h3>
                <h4>{expocitor.nombre_linea_2}</h4>
            </div>
            <div className='redes'>
                {expocitor.instagram ?
                    <a href={expocitor.instagram}>
                        <InstagramIcon />
                    </a>
                    :
                    null
                }
                {expocitor.web ?
                    <a href={expocitor.web}>
                        <LanguageIcon />
                    </a>
                    :
                    null
                }
                {expocitor.facebook ?
                    <a href={expocitor.facebook}>
                        <FacebookIcon />
                    </a>
                    :
                    null
                }
                {expocitor.x ?
                    <a href={expocitor.x}>
                        <XIcon />
                    </a>
                    :
                    null
                }
            </div>
        </div>
    )
}
