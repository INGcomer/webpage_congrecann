// React
import React, { useState, useEffect } from 'react';
// Axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// cookies
import Cookies from 'universal-cookie';
// functions
import { BackendURL } from '../../../../Config';
// mui
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PlaceIcon from '@mui/icons-material/Place';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// CSS
import './Reuniones.css';


export default function ReunionesScreen() {
    // Alerts
    const MySwal = withReactContent(Swal)
    // cookies
    const cookies = new Cookies();

    const [UserToken, SetUserToken] = useState(cookies.get('codigo'));
    const [UserData, SetUserData] = useState();

    useEffect(() => {
        MySwal.fire({
            didOpen: () => { Swal.showLoading() }
        })
        axios({
            method: 'post',
            url: BackendURL('/MatchAle/GetPerfil'),
            data: { codigo: `${UserToken}` },
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            SetUserData(response.data)

            console.log(response.data)

            MySwal.close()

        }).catch(function (error) {

            // Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

            console.log(error);
        });
    }, []);

    return (
        <div className="Reuniones">
            <div className="reunion">
                <div className='horario'>
                    <span> Informacion </span>
                </div>
                <div className='conQuien'>
                    <p>
                        Acá podes ver las reuniones pactadas, por favor se puntual.
                        en cada tarjeta podes ver con quien tenes la reunion en que mesa de la zona b2b y podes ponerte en contacto haciendo click en el numero de la persona.
                    </p>
                </div>

            </div>
            {UserData ?
                UserData.reuniones.map((reunion, index) => {
                    return (
                        <div key={index} className="reunion">
                            <div className='horario'>
                                <span>
                                    {reunion.horario.dia == 'dia 1' ? 'Viernes 17 ' : null}
                                    {reunion.horario.dia == 'dia 2' ? 'Sabado 18 ' : null}
                                    {reunion.horario.horario ? reunion.horario.horario : reunion.horario}
                                </span>
                            </div>
                            <div className='conQuien'>
                                <div className='nombre'>
                                    <PersonIcon />
                                    <span> {reunion.usuario_2.nombre} </span>
                                </div>
                                <div className='cargo'>
                                    <ApartmentIcon />
                                    <span>  {reunion.usuario_2.puesto} <br /> en: <b>{reunion.usuario_2.empresa}</b>  </span>
                                </div>
                                <div className='mesa'>
                                    <PlaceIcon />
                                    {reunion.mesa == 'sin mesa asignada' ?
                                        <span> Mesa: <br /> libre </span>
                                        :
                                        <span> Mesa: {reunion.mesa} </span>
                                    }
                                </div>
                            </div>
                            <a href="https://api.whatsapp.com/send?phone=542615163613" className="contacto">
                                <WhatsAppIcon />
                                <span> 542615163613 </span>
                            </a>
                        </div>
                    )
                })
                :
                null
            }

        </div>
    )
}