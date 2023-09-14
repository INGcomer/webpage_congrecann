import './Button.css';

export default function Button(props) {
    return (
        <a className='button'>
            <div className='texto'> {props.children} </div>
            <div className='sombra'> {props.children} </div>

            {props.children}
        </a>
    );
}
