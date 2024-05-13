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
            <h1> Reuniones </h1>

            <div className="reunion"></div>

        </div>
    )
}