// React
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';
// axios
import axios from "axios";
// components
import Button from "../basics/Button/Button";
import BaseLayout from "../basics/Layout/Layout";
import Expocitor from "./Expocitor";
// CSS
import './Expocitores.css';


export default function Expocitores() {
    const [disertantes, setDisertantes] = useState()
    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://sisabackend.herokuapp.com/MatchAle/GetExpocitores',
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
                        {disertantes.map(disertante => <Expocitor expocitor={disertante} />
                        )}
                    </div>
                    : null}


            </div>
        </BaseLayout>
    )
}


