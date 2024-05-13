// React
import React, { useState, useEffect } from 'react';
// Axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// functions
import { BackendURL } from '../../../../Config';
// CSS
import './Reuniones.css';


export default function ReunionesScreen() {
    // Alerts
    const MySwal = withReactContent(Swal)
   
    // useEffect(() => {
    //     MySwal.fire({
    //         didOpen: () => { Swal.showLoading() }
    //     })
    //     axios({
    //         method: 'post',
    //         // url: 'http://192.168.0.14:3000/MatchAle/GetPerfil',
    //         url: BackendURL('/MatchAle/GetPerfil'),
    //         data: { codigo: `${UserToken}` },
    //         headers: {
    //             "Accept": "application/json"
    //         },
    //     }).then(function (response) {

    //         SetUserData(response.data)

    //         console.log(response.data)

    //         MySwal.close()

    //     }).catch(function (error) {

    //         // Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

    //         console.log(error);
    //     });
    // }, []);

    return (
        <div className="Reuniones">
            <h1> Reuniones </h1>

            <div className="reunion"></div>

        </div>
    )
}