// Componentes
import BaseLayout from '../basics/Layout/Layout';
import Entradas from '../Index/Entradas/Entradas';
// MUI
import InstagramIcon from '@mui/icons-material/Instagram';
// css
import "./VentaEntradas.css"
// imgs
// import logo from './logo.svg';
// import textura from './textura papel madera.jpg'

export default function VentaEntradas() {
  return (
    <BaseLayout>

      <div className="VentaEntradas">

        <Entradas />
        
      </div>
    </BaseLayout>
  );
}
