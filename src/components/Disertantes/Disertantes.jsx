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
    return (
        <BaseLayout>
            <div className="disertantes">
                {/* <h1> Nos acompañan </h1> */}
                <div className="uppercontainer">
                    {disertantes.map(disertante => <Disertante disertante={disertante} />
                    )}
                </div>

            </div>
        </BaseLayout>
    )
}