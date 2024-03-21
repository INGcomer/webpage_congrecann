// React
import { useState } from 'react';
import { useForm } from "react-hook-form";
// Sweet Alert
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content'
// mui
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
// CSS
import './DashBoard.css';
// Data
import EntradasVendidas from '../../Data/EntradasVendidas.json'


export default function DashBoard() {
    // forms
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // Alerts
    const MySwal = withReactContent(Swal)
    // variables
    const [Codigo, SetCodigo] = useState();
    const codigos = ['green_feeling', 'hilands', 'casita_breeder', 'cultivadores', 'mama', 'thc', 'manijita', 'birra_house', 'dr_cultivo', 'pelagatos', 'roots', 'inca_distribuidora']

    const onSubmit = data => {
        if (codigos.includes(data.Codigo)) {
            SetCodigo(data.Codigo)
        } else {
            MySwal.fire({
                title: <strong> Codigo no encontrado </strong>,
                icon: 'error'
            })
        }

        
    }

    return (
        <div className="DashBoard">
            {/* <p> Esta página está en construcción, pronto estará disponible. </p> */}

            {Codigo ?
                null
                :
                <div className='codigo'>
                    <h2> Porfavor ingresa un codigo para ver las ventas </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="outlined-basic" label="Codigo" variant="outlined" {...register("Codigo")}/>
                        <Button type="submit" variant="contained" endIcon={<SendIcon />}> Enviar </Button>
                    </form>
                </div>
            }

            {Codigo ?
                <Entrada clase={"entrada titulos"} registro={{
                    fecha: "Fecha",
                    General: "Cantidad de entradas generales",
                    B2B: "Cantidad de entradas B2B",
                    VIP: "Cantidad de entradas VIP",
                    "Total ingreso": "Total ingresos",
                    "Porcentaje comicion": "Porcentaje comicion",
                    "Total comicion": "Total comicion"
                }}
                />
                :
                null
            }

            {Codigo ?
                EntradasVendidas.map((registro, index) => {
                    if (registro.Codigo == Codigo) {
                        return (
                            <Entrada clase={"entrada"} registro={registro} />
                        )
                    }
                })
                :
                null
            }

            {/* {EntradasVendidas.map((registro, index) => {
                if (registro.Codigo == Codigo) {
                    return (
                        <Entrada clase={"entrada"} registro={registro} />
                    )
                }
            })} */}
        </div>
    )
}

function Entrada({ clase, registro }) {
    return (
        <div className={clase}>
            <div className='fecha'>
                {registro.fecha}
            </div>
            <div className='general'>
                {registro.General}
            </div>
            <div className='b2b'>
                {registro.B2B}
            </div>
            <div className='vip'>
                {registro.VIP}
            </div>
            <div className='ingreso'>
                {registro['Total ingreso']}
            </div>
            <div className='porcentajeComicion'>
                {registro['Porcentaje comicion']}
            </div>
            <div className='comicion'>
                {registro['Total comicion']}
            </div>
        </div>
    )
}