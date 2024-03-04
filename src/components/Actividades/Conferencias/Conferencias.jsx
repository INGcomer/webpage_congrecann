// React
import { useForm } from "react-hook-form";
// MUI
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
// axios
import axios from "axios";
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// components
import Button from "../../basics/Button/Button";
import BaseLayout from "../../basics/Layout/Layout";
// Data
import disertantes from '../../../Data/Disertantes.json'
// components
import Disertante from "../../Index/Sponsors/Disertantes/Disertante";
// CSS
import './Conferencias.css';


export default function Conferencias() {
    
    return (
        <BaseLayout>
            <div className="Conferencias">
                <h1> Conferencias </h1>
                <h2> Esenario de Industria y cultivo </h2>

                {disertantes.map((disertante, Index) => {
                    if (disertante.esenario == 'Escenario Industria y Cultivo') {
                        return (<Disertante disertante={disertante} />)
                    }
                })}

                <h2> Esenario medicinal </h2>

                {disertantes.map((disertante, Index) => {
                    if (disertante.esenario == 'Escenario Medicinal') {
                        return (<Disertante disertante={disertante} />)
                    }
                })}



            </div>
        </BaseLayout>
    )
}