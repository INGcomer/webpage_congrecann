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
import Button from '../../basics/Button/Button'
// CSS
import './Contacto.css';


export default function Contacto({ReactPixel}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Alerts
    const MySwal = withReactContent(Swal)
    const onSubmit = data => {
        console.log(data);

        ReactPixel.track('Contactar', {"Descripción": "Respuesta en el formulario de contacto"})

        MySwal.fire({
            didOpen: () => { Swal.showLoading() }
        })

        axios({
            method: 'post',
            url: 'https://api.sheetmonkey.io/form/sXPGJE6DTm3Zw3AwTFeCdp',
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
        <div id="contacto">
                <h2> Contacto </h2>
            {/* <form action="https://api.sheetmonkey.io/form/7qNYbobVacMq9LqjLTY8mh" method="post"> */}
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
                    type="email"
                    id="outlined-required"
                    label="Email"
                    name="Email"
                    {...register("Email")}
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
    )
}