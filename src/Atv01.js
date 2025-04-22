import {Link} from "react-router-dom";
import Letreiro from "./Letreiro";
import Relogio from "./Relogio";


export default function Atv01() {
    return (
        <>
        <h1>Atividade 01</h1>
        <Letreiro/>
        <Relogio/>
        <Link to="/">Voltar</Link>
        </>
    );
}

