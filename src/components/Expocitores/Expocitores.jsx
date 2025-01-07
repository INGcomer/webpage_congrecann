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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Alerts
    const MySwal = withReactContent(Swal)
    const onSubmit = data => {
        console.log(data);

        ReactPixel.track('Contactar', { "Descripción": "Respuesta en el formulario de contacto" })

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
        <BaseLayout>
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
        </BaseLayout>
    )
}


// export default function Expocitores() {
//     return (
//         <BaseLayout>
//             <div className="Expocitores">
//                 <h1> Nos acompañan </h1>
//                 <div className="container">
//                     {expocitores.map(expocitor => <Expocitor expocitor={expocitor} />
//                     )}
//                 </div>

//             </div>
//         </BaseLayout>
//     )
// }




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