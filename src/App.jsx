import logo from './logo.svg';
// import './App.css';

import textura from './textura papel madera.jpg'


import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Contador from './components/Contador/Contador';
import Sponsors from './components/Sponsors/Sponsors';
import AboutUs from './components/AboutUs/AboutUs';
import Entradas from './components/Entradas/Entradas';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Actividades from './components/Actividades/Actividades';
import TextoIntermedio from './components/TextoIntermedio/TextoIntermedio';

// MUI
import InstagramIcon from '@mui/icons-material/Instagram';

function App() {
  return (
    <div className="App">
      <NavBar/>

      <Header/>

      <Sponsors/>

      <Actividades/>

      <Entradas/>

      {/* <Contador/> */}

      {/* <TextoIntermedio/> */}

      {/* <AboutUs/> */}
     
      <Ubicacion/>
      
      <Contacto/>
      <Footer/>


      <img src={textura} alt="" className='TexturaFondoGeneral'/>

      <a href="https://www.instagram.com/mendo.cann/" className='instagram'>
        <InstagramIcon/>
      </a>


    </div>
  );
}

export default App;
