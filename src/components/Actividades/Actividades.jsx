// css
import './Actividades.css';
// MUI
import CampaignIcon from '@mui/icons-material/Campaign';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import HandshakeIcon from '@mui/icons-material/Handshake';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// imgs
// import Conferencia from './img/conferencia.jpg'
import Conferencia from './img/conferencia_choped.png'
import debate from './img/debate.jpg'
import Workshops from './img/Workshops.jpg'
import B2B from './img/B2B.jpg'
import cultura from './img/cultura.jpg'
import dj from './img/dj.jpg'

export default function Actividades() {
    return (
        <section id='Actividades'>
            <h2> Actividades </h2>

            <div className="Lista">

                <div className="actividad">
                    <div className='imgcontainer'>
                        <img src={Conferencia} alt="Chica dando una conferencia" />
                    </div>
                    <div className="descripcion">
                        <CampaignIcon/>
                        <h3> Conferencias Magistrales </h3>
                        Mas de 20 conferencias de medicina, industria y cultivo.
                        <button className='saverMas'>Saver mas</button>
                    </div>
                </div>

                <div className="actividad">
                    <div className='imgcontainer'>
                        <img src={debate} alt="Chica dando una conferencia" />
                    </div>
                    <div className="descripcion">
                        <PeopleIcon/>
                        <h3> Foros de Debate </h3>
                        Devate con los profecionales mas importantes del sector.
                        <button className='saverMas'>Saver mas</button>
                    </div>
                </div>

                <div className="actividad">
                    <div className='imgcontainer'>
                        <img src={Workshops} alt="Chica dando una conferencia" />
                    </div>
                    <div className="descripcion">
                        <SettingsIcon/>
                        <h3> Workshops </h3>
                        Expertos enseñan de forma practica.
                        <button className='saverMas'>Saver mas</button>
                    </div>
                </div>

                <div className="actividad">
                    <div className='imgcontainer'>
                        <img src={B2B} alt="Chica dando una conferencia" />
                    </div>
                    <div className="descripcion">
                        <HandshakeIcon/>
                        <h3> Plataforma B2B </h3>
                        Comparte reuniones de negocios en nuestra sona B2B.
                        <button className='saverMas'>Saver mas</button>
                    </div>
                </div>

                <div className="actividad">
                    <div className='imgcontainer'>
                        <img src={cultura} alt="Chica dando una conferencia" />
                    </div>
                    <div className="descripcion">
                        <TheaterComedyIcon/>
                        <h3> Eventos Culturales </h3>
                        Disfruta de la cultura cannavica al aire libre.
                        <button className='saverMas'>Saver mas</button>
                    </div>
                </div>

                <div className="actividad">
                    <div className='imgcontainer'>
                        <img src={dj} alt="Chica dando una conferencia" />
                    </div>
                    <div className="descripcion">
                        <MusicNoteIcon/>
                        <h3> Shows en Vivo </h3>
                        Disfruta de renombrados artistas tocando en vivo.
                        <button className='saverMas'>Saver mas</button>
                    </div>
                </div>

            </div>

        </section>
    );
}
