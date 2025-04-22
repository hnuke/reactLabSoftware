import {Link} from "react-router-dom";
import Contador from "./Contador";


export default function Atv02() {
    return (
        <>
        <h1>Atividade 02</h1>
        <div>
            
            <div>
                <Contador
                title="Man"    
                />
            </div>
            <div>
                <Contador
                title="Woman"/>
            </div>
        </div>
        <Link to="/">Voltar</Link>
        </>
    );
}

