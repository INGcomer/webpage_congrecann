// React
import { useState, useEffect } from 'react';
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

    // console.log(parseFloat("18000"))

    // var entradas_general = 0
    // var entradas_b2b = 0
    // var entradas_vip = 0
    // var total_ingreso = 0
    // var total_comicion = 0

    // useEffect(() => {
    //     EntradasVendidas.map((registro, index) => {
    //         if (registro.Codigo == Codigo) {
    //             return (
    //                 <Entrada clase={"entrada"} registro={registro} />
    //             )
    //         }
    //     })

    //     for (let index = 0; index < EntradasVendidas.length; index++) {
    //         entradas_general = entradas_general + EntradasVendidas[index].General
    //         entradas_b2b = entradas_b2b + EntradasVendidas[index].B2B
    //         entradas_vip = entradas_vip + EntradasVendidas[index].VIP

    //         let total_ingreso_unitario = 0


            
    //     }

    // }, [Codigo]);

    return (
        <div className="DashBoard">
            {/* <p> Esta página está en construcción, pronto estará disponible. </p> */}

            {Codigo ?
                null
                :
                <div className='codigo'>
                    <h2> Porfavor ingresa un codigo para ver las ventas </h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <TextField id="outlined-basic" label="Codigo" variant="outlined" {...register("Codigo")} />
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

            {/* {Codigo ?
                <Entrada clase={"entrada titulos"} registro={{
                    fecha: "TOTALES",
                    General: "",
                    B2B: "",
                    VIP: "",
                    "Total ingreso": "",
                    "Porcentaje comicion": "",
                    "Total comicion": ""
                }}
                />
                :
                null
            } */}
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