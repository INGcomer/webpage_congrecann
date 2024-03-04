// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Disertante({ disertante }) {
    return (
        <div className='disertante'>
            <div className='fotoRedes'>
                <div className='foto'>
                    <img src={disertante.foto} alt="" />
                </div>
                <div className='redes'>
                    {disertante.instagram ?
                        <a href={disertante.instagram}>
                            <InstagramIcon />
                        </a>
                        :
                        null
                    }
                    {disertante.web ?
                        <a href={disertante.web}>
                            <LanguageIcon />
                        </a>
                        :
                        null
                    }
                    {disertante.facebook ?
                        <a href={disertante.facebook}>
                            <FacebookIcon />
                        </a>
                        :
                        null
                    }
                    {disertante.x ?
                        <a href={disertante.x}>
                            <XIcon />
                        </a>
                        :
                        null
                    }
                </div>
            </div>
            <div className='container'>
                <div className='nombre'>
                    <h3> {disertante.nombre} </h3>
                    <img src={disertante.logo} alt="" />
                </div>
                <div className='disertacion'>
                    <h4> {disertante.tipo}: <br /> {disertante.titulo}</h4>
                    <p> {disertante.descripcion} </p>
                </div>
            </div>
        </div>
    )
}