import Button from '../basics/Button'
import './NavBar.css'

import logo from './Mesa de trabajo 1 copy 10.png'

export default function NavBar() {
    return (
        <nav>
            <div className="izquierda">
                <a href="#Header">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="central">
                <a href="#AboutUs" >
                    <Button> Pilares </Button>
                </a>
                <a href="#Entradas">
                    <Button> Entradas </Button>
                </a>
                <a href="#Ubicacion" className='precindible'>
                    <Button> Ubicación </Button>
                </a>
                <a href="" className='precindible'>
                    <Button> Contacto </Button>
                </a>
            </div>
            <div className="derecha">
                <Button>  INSCRIBIRSE  </Button>
            </div>
        </nav>
    );
}
