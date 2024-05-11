// React
import React, { useState, useEffect } from 'react';
// Axios
import axios from "axios";
// functions
import { BackendURL } from '../../../../Config';
// CSS
import './Lista.css';


export default function ListaScreen() {

    useEffect(() => {
        axios({
            method: 'get',
            url: BackendURL('/MatchAle/GetAllUsers'),
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            console.log(response.data)

            // let userData = null

            // let likes = []
            // let Dislikes = []

            // // busco y guardo lainformacion de usuario
            // for (let index = 0; index < response.data.length; index++) {
            //     if (response.data[index].codigo == UserToken) {
            //         userData = response.data[index]
            //         // SetUserInfo(response.data[index])
            //         response.data.splice(index, 1);

            //         break
            //     }
            // }

            // for (let index = 0; index < response.data.length; index++) {
            //     // busco y elimino el perfil de "DEV"
            //     if (response.data[index].codigo == 'DEV') {
            //         // response.data.splice(index, 1);
            //         response.data[index] = null

            //         continue
            //     }

            //     // Reviso si el usuario ha dado Likes
            //     if (userData.likes.length > 0) {
            //         // si el perfil actual esta entre los likes del usuario, elimino el perfil
            //         if (userData.likes.includes(response.data[index].codigo)) {
            //             response.data[index].like = true
            //             likes.push(response.data[index])
            //             response.data[index] = null

            //             continue
            //         }
            //     }

            //     // Reviso si el usuario ha dado DisLikes
            //     if (userData.dislikes.length > 0) {
            //         // si el perfil actual esta entre los Dislikes del usuario, elimino el perfil
            //         if (userData.dislikes.includes(response.data[index].codigo)) {
            //             response.data[index].like = false
            //             Dislikes.push(response.data[index])
            //             response.data[index] = null

            //             continue
            //         }
            //     }

            //     response.data[index].like = 'indefinido'
            //     response.data[index].tipo = 'indefinido'
            // }

            // const dataLimpia = response.data.filter(usuario => usuario != null)

            // let nuevoOrden = dataLimpia.sort(function (a, b) {
            //     if (a.puntaje < b.puntaje) {
            //         return 1;
            //     }
            //     if (a.puntaje > b.puntaje) {
            //         return -1;
            //     }
            //     // a must be equal to b
            //     return 0;
            // });

            // nuevoOrden.unshift({
            //     tipo: 'titulo',
            //     texto: `Usuarios sin valorar ${nuevoOrden.length} de ${nuevoOrden.length + likes.length + Dislikes.length}`
            // })

            // nuevoOrden.push({
            //     tipo: 'titulo',
            //     texto: "Mis me gusta"
            // })

            // const sinValorar_Likes = nuevoOrden.concat(likes)

            // sinValorar_Likes.push({
            //     tipo: 'titulo',
            //     texto: "Mis no me gusta"
            // })

            // const sinValorar_Likes_Dislikes = sinValorar_Likes.concat(Dislikes)

            // SetAllUsersDataLocal(sinValorar_Likes_Dislikes)

        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    return (
        <div className="Lista">
            <h1> Lista </h1>

            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
            <div className="usuario"></div>
        </div>
    )
}