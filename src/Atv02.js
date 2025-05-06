import {Link} from "react-router-dom";
import {useState} from 'react';
import Contador from "./Contador";


export default function Atv02() {
    const [countTotal, setCountTotal] = useState(0);

    const handleState = (numberValue) =>{
        setCountTotal(countTotal + numberValue);
    }

    return (
        <>
        <h1>Atividade 02</h1>
        <div>
            <h1> Total {parseInt(countTotal)} </h1>
            <div>
                <Contador
                title="Man"
                OnStateChanged={handleState}
                total={countTotal}
                />
            </div>
            <div>
                <Contador
                title="Woman"
                OnStateChanged={handleState}
                total={countTotal}
                />
            </div>
        </div>
        <Link to="/">Voltar</Link>
        </>
    );
}

