// functions
import { BackendURL } from '../../../../Config';
// CSS
import './TinderCard.css';



export default function TinderCardComponent({user}) {
    return (
        <div className="TinderCardComponent">
            <div className="usuario">
                <div className="fotocontainer">
                    <img src={BackendURL(`/imgs/MatchAle/${user.usuario.foto}.png`)} alt="" />
                </div>
                <div className="data">
                    <span className='nombre'> {user.usuario.nombre} </span>
                    <span className='descripcion'> {user.usuario.ron_empresa} en: {user.empresa.nombre} </span>
                </div>
            </div>

            <div className="empresa">
                <div className='imgContainer'> <img src={BackendURL(`/imgs/MatchAle/${user.empresa.logo}.png`)} alt="" /> </div>
                <span className='nombre'> <b>Nombre: </b> {user.empresa.nombre} </span>
                <span className='rubro'> <b>Rubro:</b> {user.empresa.rubro} </span>
                <p> <b>Descripcion:</b> {user.empresa.descripcion} </p>
            </div>
        </div>
    )
}