
// maps
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// components
import Button from '../../basics/Button/Button'
// css
import './Ubicacion.css'
import 'leaflet/dist/leaflet.css'
// imgs
import fondo from './img/mapa topografico.png'



let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Ubicacion({ReactPixel}) {
    return (
        <section id='Ubicacion'>

            <h2> Ubicacion </h2>

            <div className='direccion'>
                <div className='texto'>
                    <h3> Espacio Arizu </h3>
                    <small> Belgrano 1322, M5504 Godoy Cruz, Mendoza </small>
                </div>
                
                <a 
                    href="https://maps.app.goo.gl/vwGbKjL15v1BM9da9"
                    onClick={() => {ReactPixel.track('Buscar ubicación', {"Descripción": "Click en el link de google maps"})}}
                >
                    <Button>
                        Ver en google maps
                    </Button>
                </a>
            </div>

            <MapContainer
                className='map'
                center={[-32.909640, -68.843497]}
                zoom={15}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[-32.8980, -68.8500]} icon={icon}> */}
                {/* <Marker position={[-32.909640, -68.843497]}> */}
                <Marker position={[-32.90849633586943, -68.84344322386988]}>
                
                 
                    <Popup>
                        Centro de Congresos y Exposiciones Dr. Emilio Civit
                        <br />
                        <a href="https://maps.app.goo.gl/vwGbKjL15v1BM9da9"> Ver en google maps </a>
                    </Popup>
                </Marker>
            </MapContainer>

            {/* <img src={fondo} alt="" className='fondo'/> */}

        </section>
    );
}
