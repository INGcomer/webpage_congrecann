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
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmitCronograma = data => {
        console.log(data)
    }
    const onSubmitDisertante = data => {
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
                    {...register("dia")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Nombre de la actividad"
                    name="Nombre de la actividad"
                    {...register("nombre")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Tipo de Actividad"
                    name="Tipo de Actividad"
                    {...register("tipo")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Es Medicinal, Industrial o de Cultivo"
                    name="Donde se realiza la actividad?"
                    {...register("sector")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Descripcion de la actividad"
                    name="Descripcion de la actividad"
                    {...register("descripcion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Donde se realiza la actividad?"
                    name="Donde se realiza la actividad?"
                    {...register("ubicacion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Hora de incio formato xx:xx"
                    name="Hora de incio formato xx:xx"
                    {...register("inicio")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Hora de fin formato xx:xx"
                    name="Hora de fin formato xx:xx"
                    {...register("fin")}
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
                    {...register("nombre")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Descripcion del disertante"
                    name="Descripcion del disertante"
                    {...register("descripcion")}
                />
                <CssTextField
                    id="outlined"
                    label="Link a la pagina web del disertante"
                    name="Link a la pagina web del disertante"
                    {...register("web")}
                />
                <CssTextField
                    id="outlined"
                    label="link al instagram del disertante"
                    name="link al instagram del disertante"
                    {...register("instagram")}
                />
                <CssTextField
                    id="outlined"
                    label="link al facebook del disertante"
                    name="link al facebook del disertante"
                    {...register("facebook")}
                />
                <CssTextField
                    id="outlined"
                    label="link al X del disertante"
                    name="link al X del disertante"
                    {...register("x")}
                />
                <CssTextField
                    id="outlined"
                    label="link al linkedin del disertante"
                    name="link al linkedin del disertante"
                    {...register("linkedin")}
                />


                <h3> Actividades del disertante </h3>
                <h4> Actividad 1 </h4>

                <CssTextField
                    required
                    id="outlined-required"
                    label="Tipo de actividad"
                    name="Tipo de actividad"
                    {...register("tipo")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Cuanto dura la actividad en formato xx minutos"
                    name="Cuanto dura la actividad en formato xx minutos"
                    {...register("duracion")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Nombre de la actividad"
                    name="Nombre de la actividad"
                    {...register("nombre")}
                />
                <CssTextField
                    required
                    id="outlined-required"
                    label="Descripcion de la actividad"
                    name="Descripcion de la actividad"
                    {...register("descripcion")}
                />

                <h4> Actividad 2 </h4>
                <CssTextField
                    id="outlined"
                    label="Tipo de actividad"
                    name="Tipo de actividad"
                    {...register("tipo")}
                />
                <CssTextField
                    id="outlined"
                    label="Cuanto dura la actividad en formato xx minutos"
                    name="Cuanto dura la actividad en formato xx minutos"
                    {...register("duracion")}
                />
                <CssTextField
                    id="outlined"
                    label="Nombre de la actividad"
                    name="Nombre de la actividad"
                    {...register("nombre")}
                />
                <CssTextField
                    id="outlined"
                    label="Descripcion de la actividad"
                    name="Descripcion de la actividad"
                    {...register("descripcion")}
                />

                <button type="submit">
                    <Button > Enviar Perfil de Disertante </Button>
                </button>
            </form>
        </>

    )
}