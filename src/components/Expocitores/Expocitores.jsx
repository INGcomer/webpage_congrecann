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


export default function Expocitores() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Alerts
    const MySwal = withReactContent(Swal)
    const onSubmit = data => {
        console.log(data);

        MySwal.fire({
            didOpen: () => { Swal.showLoading() }
        })

        axios({
            method: 'post',
            url: 'https://api.sheetmonkey.io/form/pa4t2jHLzSvwYiQ3aafi7R',
            data: data
        }).then(Response => {
            MySwal.fire({         // si ocurrio algun error muestro este mensaje
                title: <strong> Mensaje enviado </strong>,
                icon: 'success'
            })

            console.log(Response)
        }).catch(error => {
            MySwal.fire({         // si ocurrio algun error muestro este mensaje
                title: <strong> ${error} </strong>,
                icon: 'error'
            })
        })
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
            <div className="Expocitores">
                <h1> ¿Querés ser expocitor? </h1>
                <h2> Completá el presente formulario para recibir toda la información necesaria para contratar un stand y ser sponsor de Expo MendoCann 2024 </h2>
                <div id="contacto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <CssTextField
                            required
                            id="outlined-required"
                            label="Nombre y apellido"
                            name="Nombre y apellido"
                            {...register("Nombre")}
                        />
                        <CssTextField
                            required
                            id="outlined-required"
                            label="Empresa"
                            name="Empresa"
                            {...register("Empresa")}
                        />
                        <CssTextField
                            required
                            type="email"
                            id="outlined-required"
                            label="Email"
                            name="Email"
                            {...register("Email")}
                        />
                        <CssTextField
                            required
                            // type="email"
                            id="outlined-required"
                            label="Teléfono"
                            name="Teléfono"
                            {...register("Teléfono")}
                        />
                        <CssTextField
                            required
                            id="outlined-multiline-flexible"
                            className='mensaje'
                            label="Mensaje"
                            name="Mensaje"
                            multiline
                            maxRows={4}
                            {...register("Mensaje")}
                        />
                        <input
                            type="hidden"
                            name="Created"
                            value="x-sheetmonkey-current-date-time"
                            {...register("Enviado_el")}
                        />
                        <button type="submit">
                            <Button > Enviar </Button>
                        </button>
                    </form>
                </div>


            </div>
        </BaseLayout>
    )
}