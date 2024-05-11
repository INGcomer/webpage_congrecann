// React
import React, { useState, useEffect } from 'react';
// Axios
import axios from "axios";
// functions
import { BackendURL } from '../../../../Config';
// CSS
import './Reuniones.css';


export default function ReunionesScreen() {

   

    return (
        <div className="Reuniones">
            <h1> Reuniones </h1>

            <div className="reunion"></div>

        </div>
    )
}