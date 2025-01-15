// React
import ReactPlayer from 'react-player'
// CSS
import './SobreNosotros.css';

import papel from './img/background.jpg'
import charla from './img/charla.jpg'
import firma from './img/firma.jpg'
import apertura from './img/inaguracion.jpg'
import video from './img/Mendocann.m4v'

export default function SobreNosotros() {
    return (
        <section id="SobreNosotros">

            <h1> Edición  2024 </h1>

            <div className="imagenes">
                <div className='img'>
                    <img src={charla} alt="" />
                    <small> Conferencias de Industria y Cultivo </small>
                </div>
                <div className='img'>
                    <img src={apertura} alt="" />
                    <small>
                        Apertura de la expo con la presencia del gobernador Alfredo Cornejo </small>
                </div>
                <div className='img'>
                    <img src={firma} alt="" />
                    <small> Acuerdo entre DGE e ISCAMEN en el marco de la Expo </small>
                </div>
            </div>



            <ReactPlayer
                url={video}
                playing={true}
                loop={true}
                height='auto'
                width='100%'
            />

        </section>
    );
}
