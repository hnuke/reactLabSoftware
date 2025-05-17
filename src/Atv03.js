import {Link} from "react-router-dom";
// Imports 1.1
import Gallery from "./Atv03/Gallery";


// Imports 1.2



export default function Atv03(){
    return(
    <>
        <Link to="/">Voltar</Link>
        <section className="">
            <h1>
                1.1 até 1.8 - Utilizei imagens e textos diferentes, mas todo conteúdo foi aplicado nestes componentes! :)
            </h1>
            <Gallery/>


        </section>
    </>);
}