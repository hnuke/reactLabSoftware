import {Link} from "react-router-dom";
import ButtonEvent, { GenericButton } from "./Atv04/ButtonEvent.js" ;
import {AlertButton} from './Atv04/ButtonEvent.js';
import List from "./Atv04/List.js";
import "./Atv04/atv04.css";
export default function Atv04(){
    function SaySomething(Something){
        alert(Something);
    }

    return(
        <div className="flex-container">
            <Link to="/"> Voltar </Link>
            <ButtonEvent/>
            <AlertButton message="Don't trust him! ">
                Hello i'm a alert button
            </AlertButton>
            <GenericButton handleClick={SaySomething} alertMessage={"Hellluu"}/>
            <List/>
        </div>
    );
}