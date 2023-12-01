import logo from './logo.svg';
// import './App.css';


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

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>

      {/* <Contador/> */}

      {/* <TextoIntermedio/> */}

      {/* <Actividades/> */}

      {/* <Sponsors/> */}

      {/* <AboutUs/> */}
      {/* <Entradas/> */}
      {/* <Ubicacion/> */}
      <Contacto/>
      <Footer/>


    </div>
  );
}

export default App;
