// React
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
// MUI
import TextField from '@mui/material/TextField';
import { alpha, styled } from '@mui/material/styles';
// router
import { useNavigate } from "react-router-dom";
// axios
import axios from "axios";
// cookies
import Cookies from 'universal-cookie';
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// function
import { BackendURL } from '../../Config';
// components
import Button from '../basics/Button/Button';
import BaseLayout from '../basics/Layout/Layout';
// CSS
import './B2B.css';


export default function B2BLogIn() {
    const cookies = new Cookies();
    // form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Alerts
    const MySwal = withReactContent(Swal)
    // navigation
    const navigate = useNavigate();

    const onSubmit = (data) => {

        console.log(data)
        axios({
            method: 'post',
            url: BackendURL('/MatchAle/GetPerfil'),
            data: data,
            headers: {
                "Accept": "application/json"
            },
        }).then(function (response) {
            console.log(response.data.codigo)


            cookies.set('codigo', response.data.codigo, { path: '/' });

            // redirijo al usuario
            navigate("/B2B")

        }).catch(function (error) {

            // Alert.alert('Pucha :(', 'No encontramos el codigo ingresado');

            console.log(error);
        });
    }

    const CssTextField = styled(TextField)({
        '& label.Mui-focused': {
            color: '#001516',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
            color: '#001516',
            '& fieldset': {
                borderColor: '#001516',
            },
            '&:hover fieldset': {
                borderColor: '#ffffff',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#ffffff',
            },
        },
        '& label': {
            color: '#001516',
        },
        '& .MuiInput': {
            color: '#001516',
        },
    });

    return (
        <BaseLayout>
            <div className="B2BLogin">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <CssTextField
                        required
                        id="outlined-required"
                        label="Codigo"
                        name="Codigo"
                        {...register("codigo")}
                    />
                    <button type="submit">
                        <Button > Enviar </Button>
                    </button>
                </form>
            </div>
        </BaseLayout>
    )
}