// React
import React, { useState, useEffect, useMemo, useRef } from 'react';
// Axios
import axios from "axios";
// cookies
import Cookies from 'universal-cookie';
// components
import TinderCard from 'react-tinder-card'
import TinderCardComponent from './TinderCard';
import CardContainer from './CardContainer';
// functions
import { BackendURL } from '../../../../Config';
// CSS
import './Home.css';



export default function HomeScreen() {
    // cookies
    const cookies = new Cookies();

    const [UserToken, SetUserToken] = useState(cookies.get('codigo'));
    const [AllUsersData, SetAllUsersData] = useState();

    const [OnLoading, SetOnLoading] = useState(false);

    useEffect(() => {
        axios({
            method: 'get',
            url: BackendURL('/MatchAle/GetAllUsers'),
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            console.log(response.data)

            let userData = null

            // busco y guardo lainformacion de usuario
            for (let index = 0; index < response.data.length; index++) {
                if (response.data[index].codigo == UserToken) {
                    userData = response.data[index]
                    // SetUserInfo(response.data[index])
                    response.data.splice(index, 1);

                    break
                }
            }

            for (let index = 0; index < response.data.length; index++) {
                // busco y elimino el perfil de "DEV"
                if (response.data[index].codigo == 'DEV') {
                    // response.data.splice(index, 1);
                    response.data[index] = null

                    continue
                }

                // Reviso si el usuario ha dado Likes
                if (userData.likes.length > 0) {
                    // si el perfil actual esta entre los likes del usuario, elimino el perfil
                    if (userData.likes.includes(response.data[index].codigo)) {
                        // response.data.splice(index, 1);
                        response.data[index] = null

                        continue
                    }
                }

                // Reviso si el usuario ha dado DisLikes
                if (userData.dislikes.length > 0) {
                    // si el perfil actual esta entre los Dislikes del usuario, elimino el perfil
                    if (userData.dislikes.includes(response.data[index].codigo)) {
                        // response.data.splice(index, 1);
                        response.data[index] = null

                        continue
                    }
                }
            }

            const dataLimpia = response.data.filter(usuario => usuario != null)

            const nuevoOrden = dataLimpia.sort(function (a, b) {
                if (a.puntaje < b.puntaje) {
                    return 1;
                }
                if (a.puntaje > b.puntaje) {
                    return -1;
                }
                // a must be equal to b
                return 0;
            });

            SetAllUsersData(nuevoOrden)

        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    
    return (
        <div className="Home">

            {AllUsersData ?
                <CardContainer AllUsersData={AllUsersData} />
                :
                null
            }



        </div>
    )
}