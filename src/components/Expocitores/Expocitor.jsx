// icons
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

export default function Expocitor({ expocitor }) {
    return (
        <div className='disertante'>
            <div className='fotoRedes'>
                <div className='foto'>
                    <img src={expocitor.foto} alt="" />
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
            <div className='container'>
                <div className='nombre'>
                    <h3> {expocitor.nombre} </h3>
                    {/* <img src={expocitor.logo} alt="" /> */}
                </div>
                <div className='disertacion'>
                    <p> {expocitor.descripcion} </p>
                </div>
            </div>
        </div>
    )
}