// React
import React, { useState, useEffect } from 'react';
// Axios
import axios from "axios";
// functions
import { BackendURL } from '../../../../Config';
// componentes
import Button from '../../../basics/Button/Button';
// CSS
import './Perfil.css';


export default function PerfilScreen() {



    return (
        <div className="Perfil">
            <div className="data">
                <div className="FotoContainer">
                    <img src="" alt="" />
                </div>

                <h1> nombre </h1>
            </div>

            <Button>
                Cerrar cecion
            </Button>
        </div>
    )
}