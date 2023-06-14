
import { Link } from "react-router-dom";

function AlertButton ({ message, children }) {
    return (
        <button onClick = {() => alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar () {
    return (
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>

            <AlertButton message="Uploading!">
                Upload Image
            </AlertButton>

            <Link to='/atividade04'>Voltar</Link>
        </div>
    );
}