// Componentes
import BaseLayout from '../Layout/Layout';
import './Redirect.css'

export default function Redirect({loc}) {
    window.location = loc;

    return (
        <BaseLayout>
            <div className='redirect'>
                <h1>Redirecting...</h1>
            </div>
        </BaseLayout>
    );
    
}