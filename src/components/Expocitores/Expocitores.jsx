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
import Button from "../basics/Button/Button";
import BaseLayout from "../basics/Layout/Layout";
// CSS
import './Expocitores.css';
// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

import expocitores from './Data'


export default function Expocitores() {
    return (
        <BaseLayout>
            <div className="Expocitores">
                <h1> Nos acompañan </h1>
                <div className="container">
                    {expocitores.map(expocitor => <Expocitor expocitor={expocitor} />
                    )}
                </div>

            </div>
        </BaseLayout>
    )
}




function Expocitor({ expocitor }) {
    return (
        <div className='expocitorContainer'>
            <div className='expocitor'>
                <div className="imgcontainer">
                    <img src={expocitor.foto} alt="" />
                </div>
                <h3>{expocitor.nombre}</h3>
                <h4>{expocitor.nombre_linea_2}</h4>
            </div>
            <div className='redes'>
                {expocitor.instagram ?
                    <a href={expocitor.instagram}>
                        <InstagramIcon />
                    </a>
                    :
                    null
                }
                {expocitor.web ?
                    <a href={expocitor.web}>
                        <LanguageIcon />
                    </a>
                    :
                    null
                }
                {expocitor.facebook ?
                    <a href={expocitor.facebook}>
                        <FacebookIcon />
                    </a>
                    :
                    null
                }
                {expocitor.x ?
                    <a href={expocitor.x}>
                        <XIcon />
                    </a>
                    :
                    null
                }
            </div>
        </div>
    )
}