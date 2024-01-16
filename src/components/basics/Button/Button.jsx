import './Button.css';

export default function Button({children, link}) {
    return (
            <a className='button' href={link}>
            <div className='texto'> {children} </div>
            <div className='sombra'> {children} </div>

            {children}
        </a>
    );
}
