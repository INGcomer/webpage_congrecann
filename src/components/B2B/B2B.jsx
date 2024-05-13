// React
import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
// MUI icons
import HomeIcon from '@mui/icons-material/Home';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import PersonIcon from '@mui/icons-material/Person';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
// cookies
import Cookies from 'universal-cookie';
// components
import ResponsiveAppBar from '../basics/Layout/NavBar/NavBar';
import ListaScreen from './componentes/Lista/Lista';
import ReunionesScreen from './componentes/Reuniones/Reuniones';
import PerfilScreen from './componentes/Perfil/Perfil';
import HomeScreen from './componentes/Home/Home';
// CSS
import './B2B.css';


export default function B2B() {
    // cookies
    const cookies = new Cookies();
    // navigation
    const navigate = useNavigate();

    const [UserToken, SetUserToken] = useState(cookies.get('codigo'));

    useEffect(() => {
        if (!UserToken) {
            // redirijo al usuario
            navigate("/B2B/LogIn")
        }
    }, [UserToken]);


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
            <ResponsiveAppBar />
            <div className="B2B">
                {Home ? <HomeScreen /> : null}
                {Lista ? <ListaScreen /> : null}
                {Matches ? <ReunionesScreen /> : null}
                {Perfil ? <PerfilScreen /> : null}

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