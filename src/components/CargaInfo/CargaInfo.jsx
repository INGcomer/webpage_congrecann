// React
import { useState } from "react";
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
import BaseLayout from "../basics/Layout/Layout";
import Button from '../basics/Button/Button'
// CSS
import './CargaInfo.css';



export default function CargaInfo() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [Form, SetForm] = useState(false)

    const onSubmit1 = data => {
        if (data.codigo == 265) {
            console.log('codigo correcto')
            SetForm(true)
        }
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
            <div className="CargaInfo">
                <h1> Carga de informacion </h1>

                {Form ?

                    <FomrsDeInfo CssTextField={CssTextField} />

                    :

                    <form onSubmit={handleSubmit(onSubmit1)}>
                        <CssTextField
                            required
                            id="outlined-required"
                            label="codigo"
                            name="codigo"
                            {...register("codigo")}
                        />
                        <button type="submit">
                            <Button > Enviar </Button>
                        </button>
                    </form>


                }



            </div>
        </BaseLayout>
    )
}

function FomrsDeInfo({ CssTextField }) {
    // Form
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Alerts
    const MySwal = withReactContent(Swal)

    // Envio de actividad de cronograma
    const onSubmitCronograma = data => {
        // Abro una pantalla de carga
        MySwal.fire({
            didOpen: () => { Swal.showLoading() }
        })

        // Envio informacion al backend
        axios({
            method: 'post',
            url: 'http://192.168.0.101:3000/MatchAle/SaveActividad',
            data: data.actividad
        }).then(Response => {
            MySwal.fire({         // si no ocurrio algun error muestro este mensaje
                title: <strong> Informacion Guardada </strong>,
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
    const onSubmitDisertante = data => {
        // Abro una pantalla de carga
        MySwal.fire({
            didOpen: () => { Swal.showLoading() }
        })

        // Envio informacion al backend
        axios({
            method: 'post',
            url: 'http://192.168.0.101:3000/MatchAle/SaveActividad',
            data: data.Disertante
        }).then(Response => {
            MySwal.fire({         // si no ocurrio algun error muestro este mensaje
                title: <strong> Informacion Guardada </strong>,
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
    const onSubmitExpositor = data => {
        let puntaje = 0
        // Defino el puntaje
        if (data.sponsor == 'plata') {
            puntaje += 1
        }
        if (data.sponsor == 'oro') {
            puntaje += 2
        }
        if (data.sponsor == 'diamante') {
            puntaje += 3
        }
        if (data.stand == 'plata') {
            puntaje += 1
        }
        if (data.stand == 'oro') {
            puntaje += 2
        }
        if (data.stand == 'diamante') {
            puntaje += 3
        }

        data.puntaje = puntaje
        console.log(data)
    }
    return (
        <>
            <h2> Cronograma </h2>
            <form onSubmit={handleSubmit(onSubmitCronograma)}>
                <CssTextField
                    required
                    id="outlined-required"
                    label="Dia en numero 11 o 12"
                    name="Dia en numero 11 o 12"
                    {...register("actividad.dia")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Nombre de la actividad"
                    name="Nombre de la actividad"
                    {...register("actividad.nombre")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Tipo de Actividad"
                    name="Tipo de Actividad"
                    {...register("actividad.tipo")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Es Medicinal, Industrial o de Cultivo"
                    name="Donde se realiza la actividad?"
                    {...register("actividad.sector")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Descripcion de la actividad"
                    name="Descripcion de la actividad"
                    {...register("actividad.descripcion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Donde se realiza la actividad?"
                    name="Donde se realiza la actividad?"
                    {...register("actividad.ubicacion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Hora de incio formato xx:xx"
                    name="Hora de incio formato xx:xx"
                    {...register("actividad.inicio")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Hora de fin formato xx:xx"
                    name="Hora de fin formato xx:xx"
                    {...register("actividad.fin")}
                />
                <button type="submit">
                    <Button > Enviar Entrada de Cronograma </Button>
                </button>
            </form>


            <h2> Disertantes </h2>
            <form onSubmit={handleSubmit(onSubmitDisertante)}>
                <CssTextField
                    required
                    id="outlined-required"
                    label="Nombre del disertante"
                    name="Nombre del disertante"
                    {...register("Disertante.nombre")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Descripcion del disertante"
                    name="Descripcion del disertante"
                    {...register("Disertante.descripcion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Foto"
                    name="Foto"
                    {...register("Disertante.foto")}
                />
                <CssTextField
                    id="outlined"
                    label="Link a la pagina web del disertante"
                    name="Link a la pagina web del disertante"
                    {...register("Disertante.web")}
                />
                <CssTextField
                    id="outlined"
                    label="link al instagram del disertante"
                    name="link al instagram del disertante"
                    {...register("Disertante.instagram")}
                />
                <CssTextField
                    id="outlined"
                    label="link al facebook del disertante"
                    name="link al facebook del disertante"
                    {...register("Disertante.facebook")}
                />
                <CssTextField
                    id="outlined"
                    label="link al X del disertante"
                    name="link al X del disertante"
                    {...register("Disertante.x")}
                />
                <CssTextField
                    id="outlined"
                    label="link al linkedin del disertante"
                    name="link al linkedin del disertante"
                    {...register("Disertante.linkedin")}
                />


                <h3> Actividades del disertante </h3>
                <h4> Actividad 1 </h4>

                <CssTextField
                    required
                    id="outlined-required"
                    label="Tipo de actividad"
                    name="Tipo de actividad"
                    {...register("Disertante.actividades[0].tipo")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Cuanto dura la actividad en formato xx minutos"
                    name="Cuanto dura la actividad en formato xx minutos"
                    {...register("Disertante.actividades[0].duracion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Nombre de la actividad"
                    name="Nombre de la actividad"
                    {...register("Disertante.actividades[0].nombre")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Descripcion de la actividad"
                    name="Descripcion de la actividad"
                    {...register("Disertante.actividades[0].descripcion")}
                />

                <h4> Actividad 2 </h4>
                <CssTextField
                    id="outlined"
                    label="Tipo de actividad"
                    name="Tipo de actividad"
                    {...register("Disertante.actividades[1].tipo")}
                />
                <CssTextField
                    id="outlined"
                    label="Cuanto dura la actividad en formato xx minutos"
                    name="Cuanto dura la actividad en formato xx minutos"
                    {...register("Disertante.actividades[1].duracion")}
                />
                <CssTextField
                    id="outlined"
                    label="Nombre de la actividad"
                    name="Nombre de la actividad"
                    {...register("Disertante.actividades[1].nombre")}
                />
                <CssTextField
                    id="outlined"
                    label="Descripcion de la actividad"
                    name="Descripcion de la actividad"
                    {...register("Disertante.actividades[1].descripcion")}
                />

                <button type="submit">
                    <Button > Enviar Perfil de Disertante </Button>
                </button>
            </form>


            <h2> Expositores </h2>
            <form onSubmit={handleSubmit(onSubmitExpositor)}>
                <CssTextField
                    required
                    id="outlined-required"
                    label="Nombre del Expositor"
                    name="Nombre del Expositor"
                    {...register("Expositor.nombre")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Rubro del Expositor"
                    name="Rubro del Expositor"
                    {...register("Expositor.rubro")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Descripcion del Expositor"
                    name="Descripcion del Expositor"
                    {...register("Expositor.descripcion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Foto"
                    name="Foto"
                    {...register("Expositor.foto")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Sector del Expositor"
                    name="Sector del Expositor"
                    {...register("Expositor.sector")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Tipo de sponsor, si tiene"
                    name="Tipo de sponsor, si tiene"
                    {...register("Expositor.sponsor")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Tipo de stand"
                    name="Tipo de stand"
                    {...register("Expositor.stand")}
                />
                <CssTextField
                    id="outlined"
                    label="Link a la pagina web del disertante"
                    name="Link a la pagina web del disertante"
                    {...register("Expositor.web")}
                />
                <CssTextField
                    id="outlined"
                    label="link al instagram del disertante"
                    name="link al instagram del disertante"
                    {...register("Expositor.instagram")}
                />
                <CssTextField
                    id="outlined"
                    label="link al facebook del disertante"
                    name="link al facebook del disertante"
                    {...register("Expositor.facebook")}
                />
                <CssTextField
                    id="outlined"
                    label="link al X del disertante"
                    name="link al X del disertante"
                    {...register("Expositor.x")}
                />
                <CssTextField
                    id="outlined"
                    label="link al linkedin del disertante"
                    name="link al linkedin del disertante"
                    {...register("Expositor.linkedin")}
                />

                <button type="submit">
                    <Button > Enviar Perfil del Expositor </Button>
                </button>
            </form>
        </>

    )
}