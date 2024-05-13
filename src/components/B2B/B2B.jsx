// React
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// MUI
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
// MUI icons
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// components
import BaseLayout from "../basics/Layout/Layout";
import ResponsiveAppBar from '../basics/Layout/NavBar/NavBar';
import ListaScreen from './componentes/Lista/Lista';
import ReunionesScreen from './componentes/Reuniones/Reuniones';
import PerfilScreen from './componentes/Perfil/Perfil';
import HomeScreen from './componentes/Home/Home';
// import Dashboard from './componentes/Home/TinderCard';
// CSS
import './B2B.css';


export default function B2B() {
    const [Home, SetHome] = useState(true);
    const [Lista, SetLista] = useState(false);
    const [Matches, SetMatches] = useState(false);
    const [Perfil, SetPerfil] = useState(false);

    const CambiarBoton = (Boton) => {
        switch (Boton) {
            case 'home':
                SetHome(true)
                SetLista(false)
                SetMatches(false)
                SetPerfil(false)

                break;

            case 'lista':
                SetHome(false)
                SetLista(true)
                SetMatches(false)
                SetPerfil(false)

                break;

            case 'matches':
                SetHome(false)
                SetLista(false)
                SetMatches(true)
                SetPerfil(false)

                break;

            case 'perfil':
                SetHome(false)
                SetLista(false)
                SetMatches(false)
                SetPerfil(true)

                break;

        }
    }


    return (
        <>
        <ResponsiveAppBar/>
            <div className="B2B">
                {Home ? <HomeScreen/> : null}
                {/* {Home ? <Dashboard/> : null} */}
                {Lista ? <ListaScreen/> : null}
                {Matches ? <ReunionesScreen/> : null}
                {Perfil ? <PerfilScreen/> : null}




                <div className="navbar">
                    <div className="navbarItem home" onClick={() => CambiarBoton('home')}>
                        {Home ? <div className="indicador activado" /> : <div className="indicador" />}
                        <HomeIcon />
                        <span> Home </span>
                    </div>
                    <div className="navbarItem lista" onClick={() => CambiarBoton('lista')}>
                        {Lista ? <div className="indicador activado" /> : <div className="indicador" />}
                        <FormatListBulletedIcon />
                        <span> Lista de usuarios </span>
                    </div>
                    <div className="navbarItem reuniones" onClick={() => CambiarBoton('matches')}>
                        {Matches ? <div className="indicador activado" /> : <div className="indicador" />}
                        <QueryBuilderIcon />
                        <span> Mis reuniones </span>
                    </div>
                    <div className="navbarItem perfil" onClick={() => CambiarBoton('perfil')}>
                        {Perfil ? <div className="indicador activado" /> : <div className="indicador" />}
                        <PersonIcon />
                        <span> Perfil </span>
                    </div>
                </div>

            </div>
        </>
    )
}