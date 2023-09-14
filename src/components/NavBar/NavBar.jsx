import Button from '../basics/Button'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav>
            <div className="izquierda"></div>
            <div className="central">
            <Button> Sobre el congreso </Button>
            <Button> Quiero ser un disertante </Button>
            <Button> Mas informacion </Button>
            </div>
            <div className="derecha">
                <Button> Contactanos </Button>
            </div>
        </nav>
    );
}
