// Componentes
import BaseLayout from '../basics/Layout/Layout';
import Header from './Header/Header';
import Sponsors from './Sponsors/Sponsors';
import SobreNosotros from './SobreNosotros/SobreNosotros';
// import AboutUs from './components/AboutUs/AboutUs';
import Entradas from './Entradas/Entradas';
import Ubicacion from './Ubicacion/Ubicacion';
import Contacto from './Contacto/Contacto';
import Actividades from './Actividades/Actividades';
import TextoIntermedio from './TextoIntermedio/TextoIntermedio';
import Expocitores from './Sponsors/Expocitores';
import Disertantes from './Sponsors/Disertantes/Disertantes';
// import NewHeader from './Header/NewHeader';
// MUI
import InstagramIcon from '@mui/icons-material/Instagram';
// css
import "./Index.css"
// imgs
import logo from './logo.svg';
import textura from './textura papel madera.jpg'

import ReactPixel from 'react-facebook-pixel';



export default function Index() {
  const advancedMatching = { em: 'some@email.com' }; // optional, more info: https://developers.facebook.com/docs/facebook-pixel/advanced/advanced-matching
  const options = {
    autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
    debug: true, // enable logs
  };
  ReactPixel.init('794305848874570', null, options);
  return (
    <BaseLayout>

      <div className="Index">
        {/* <NavBar/> */}

        {/* <NewHeader/> */}

        <Header />

        <Sponsors />

        {/* <Expocitores /> */}

        {/* <Disertantes /> */}

        {/* <Actividades /> */}

        {/* <Entradas ReactPixel={ReactPixel}/> */}

        {/* <Contador/> */}

        {/* <TextoIntermedio/> */}

        {/* <AboutUs/> */}

        <Ubicacion/>

        <SobreNosotros/>

        <Contacto/>
        {/* <Footer/> */}


        {/* <img src={textura} alt="" className='TexturaFondoGeneral' /> */}

        <a href="https://www.instagram.com/mendocannok/" className='instagram' onClick={() => { ReactPixel.track('Contactar', {"Descripción": "Click en el link de instagram"});  }}>
          <InstagramIcon />
        </a>


      </div>
    </BaseLayout>
  );
}
