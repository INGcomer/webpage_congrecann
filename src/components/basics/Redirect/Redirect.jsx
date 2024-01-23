export default function Redirect({loc}) {
    window.location = loc;

    return (<section>Redirecting...</section>);
    
}