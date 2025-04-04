// React
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
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
import Disertante from "./Disertante";
// CSS
import './Disertantes.css';
// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

import disertantes from './Data'


export default function Disertantes() {
    const [disertantes, setDisertantes] = useState()
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://sisabackend.herokuapp.com/MatchAle/GetDisertantes',
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {

            setDisertantes(response.data)
            console.log(response.data)

        }).catch(function (error) {

            console.log(error);
        });
    }, [])

    return (
        <BaseLayout>
            <div className="disertantes">
                {/* <h1> Nos acompañan </h1> */}
                {disertantes ?
                    <div className="uppercontainer">
                        {disertantes.map(disertante => <Disertante disertante={disertante} />
                        )}
                    </div>
                    : null}


            </div>
        </BaseLayout>
    )
}