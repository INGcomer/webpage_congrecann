// React
import React, { useState, useEffect } from 'react';
// Axios
import axios from "axios";
// router
import { useNavigate } from "react-router-dom";
// cookies
import Cookies from 'universal-cookie';
// functions
import { BackendURL } from '../../../../Config';
// componentes
import Button from '../../../basics/Button/Button';
// CSS
import './Perfil.css';


export default function PerfilScreen() {
    // cookies
    const cookies = new Cookies();
    // navigation
    const navigate = useNavigate();
    // data
    const [UserData, SetUserData] = useState();
    const [UserToken, SetUserToken] = useState(cookies.get('codigo'));

    console.log(UserToken)

    useEffect(() => {
        axios({
            method: 'post',
            // url: 'http://192.168.0.14:3000/MatchAle/GetPerfil',
            url: BackendURL('/MatchAle/GetPerfil'),
            data: { codigo: `${UserToken}` },
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            SetUserData(response.data)

            console.log(response.data)

        }).catch(function (error) {

            // Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

            console.log(error);
        });
    }, []);

    useEffect(() => {
        if (!UserToken) {
            // redirijo al usuario
            navigate("/B2B/LogIn")
        }
    }, [UserToken]);


    return (
        <div className="Perfil">
            {UserData ?
                <>
                    <div className="data">
                        <div className="FotoContainer">
                            <img src={ BackendURL(`/imgs/MatchAle/${UserData.usuario.foto}.png`)} alt="" />
                        </div>

                        <h1> {UserData.usuario.nombre} </h1>

                        {/* <span>
                        <h2> {UserData.usuario.ron_empresa} </h2>
                        <h3> En: {UserData.empresa.nombre} </h3>
                        </span> */}
                        
                    </div>


                    <button onClick={() => {
                        cookies.remove('codigo')
                        SetUserToken(null)
                        console.log('llega')
                    }}>
                        <Button > Cerrar sesión </Button>
                    </button>
                </>
                :
                null
            }
        </div>
    )
}