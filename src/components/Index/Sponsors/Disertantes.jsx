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
import Json from './Data/Disertantes.json'
// css
import './Sponsors.css';
import './Disertantes.css';
// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';


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
                {Json.map((disertante, Index) => {
                    return (
                        <SwiperSlide key={Index}> <Disertante disertante={disertante} /> </SwiperSlide>
                    )
                })}
            </Swiper>




        </section>
    );
}

function Disertante({ disertante }) {
    return (
        <div className='disertante'>
            <div className='fotoRedes'>
                <div className='foto'>
                    <img src={disertante.foto} alt="" />
                </div>
                <div className='redes'>
                    {disertante.instagram ?
                        <a href={disertante.instagram}>
                            <InstagramIcon />
                        </a>
                        :
                        null
                    }
                    {disertante.web ?
                        <a href={disertante.web}>
                            <LanguageIcon />
                        </a>
                        :
                        null
                    }
                    {disertante.facebook ?
                        <a href={disertante.facebook}>
                            <FacebookIcon />
                        </a>
                        :
                        null
                    }
                    {disertante.x ?
                        <a href={disertante.x}>
                            <XIcon />
                        </a>
                        :
                        null
                    }
                </div>
            </div>
            <div className='container'>
                <div className='nombre'>
                    <h3> {disertante.nombre} </h3>
                    <img src={disertante.logo} alt="" />
                </div>
                <div className='disertacion'>
                    <h4> {disertante.tipo}: <br /> {disertante.titulo}</h4>
                    <p> {disertante.descripcion} </p>
                </div>
            </div>
        </div>
    )
}
