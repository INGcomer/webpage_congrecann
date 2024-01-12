
// maps
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// components
import Button from '../basics/Button'
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

export default function Ubicacion() {
    return (
        <section id='Ubicacion'>

            <h2> Ubicacion </h2>

            <div className='direccion'>
                <div className='texto'>
                    <h3> Centro de Congresos y Exposiciones Dr. Emilio Civit </h3>
                    <small> Virgen del Carmen de Cuyo 610, M5500 Mendoza </small>
                </div>
                <a href="https://www.google.com/maps/place/Auditorium+Angel+Bustelo/@-32.8980824,-68.8526397,17z/data=!3m1!4b1!4m6!3m5!1s0x967e090e883d34e5:0xa7e2f899c46ce069!8m2!3d-32.8980824!4d-68.8500648!16s%2Fg%2F1tdqvrfs?entry=ttu">
                    <Button>
                        Ver en google maps
                    </Button>
                </a>
            </div>

            <MapContainer
                className='map'
                center={[-32.8985, -68.8500]}
                zoom={15}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <Marker position={[-32.8980, -68.8500]} icon={icon}> */}
                <Marker position={[-32.8973, -68.8504]}>
                    <Popup>
                        Centro de Congresos y Exposiciones Dr. Emilio Civit
                        <br />
                        <a href="https://www.google.com/maps/place/Auditorium+Angel+Bustelo/@-32.8980824,-68.8526397,17z/data=!3m1!4b1!4m6!3m5!1s0x967e090e883d34e5:0xa7e2f899c46ce069!8m2!3d-32.8980824!4d-68.8500648!16s%2Fg%2F1tdqvrfs?entry=ttu"> Ver en google maps </a>
                    </Popup>
                </Marker>
            </MapContainer>

            {/* <img src={fondo} alt="" className='fondo'/> */}

        </section>
    );
}
