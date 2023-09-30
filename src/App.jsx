import logo from './logo.svg';
// import './App.css';


import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Sponsors from './components/Sponsors/Sponsors';
import AboutUs from './components/AboutUs/AboutUs';
import Entradas from './components/Entradas/Entradas';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <Sponsors/>
      <AboutUs/>
      <Entradas/>


    </div>
  );
}

export default App;
