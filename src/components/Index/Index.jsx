// Componentes
import BaseLayout from '../basics/Layout/Layout';
import Header from './Header/Header';
import Contador from './Contador/Contador';
import Sponsors from './Sponsors/Sponsors';
// import AboutUs from './components/AboutUs/AboutUs';
import Entradas from './Entradas/Entradas';
import Ubicacion from './Ubicacion/Ubicacion';
import Contacto from './Contacto/Contacto';
import Actividades from './Actividades/Actividades';
import TextoIntermedio from './TextoIntermedio/TextoIntermedio';
import Expocitores from './Sponsors/Expocitores';
import Disertantes from './Sponsors/Disertantes/Disertantes';
// MUI
import InstagramIcon from '@mui/icons-material/Instagram';
// css
import "./Index.css"
// imgs
import logo from './logo.svg';
import textura from './textura papel madera.jpg'

// import ReactPixel from 'react-facebook-pixel';



export default function Index() {
  return (
    <BaseLayout>

      <div className="Index">
        {/* <NavBar/> */}

        <Header />

        <Sponsors />

        <Expocitores />

        <Disertantes />

        <Actividades />

        <Entradas />

        {/* <Contador/> */}

        {/* <TextoIntermedio/> */}

        {/* <AboutUs/> */}

        <Ubicacion />

        <Contacto />
        {/* <Footer/> */}

        <img src={textura} alt="" className='TexturaFondoGeneral' />

        <a href="https://www.instagram.com/mendocannok/" className='instagram'>
          <InstagramIcon />
        </a>


      </div>
    </BaseLayout>
  );
}
