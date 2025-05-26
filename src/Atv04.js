import {Link} from "react-router-dom";
import ButtonEvent, { GenericButton } from "./Atv04/ButtonEvent.js" ;
import {AlertButton} from './Atv04/ButtonEvent.js';
import List from "./Atv04/List.js";
import "./Atv04/atv04.css";
import Form from "./Atv04/Form.js"
import Form2 from "./Atv04/Form2.js"
import ShapeEditor from "./Atv04/ShapeEditor.js";
import CounterList from "./Atv04/CounterList.js";
import MovingDot from "./Atv04/MovingDot.js";
export default function Atv04(){
    function SaySomething(Something){
        alert(Something);
    }

    return(
        <div className="flex-container">
            <MovingDot>
            </MovingDot>
            <Link to="/"> Voltar </Link>
            <ButtonEvent/>
            <AlertButton message="Don't trust him! ">
                Hello i'm a alert button
            </AlertButton>
            <GenericButton handleClick={SaySomething} alertMessage={"Hellluu"}/>
            <List/>
            <Form/>
            <Form2/>
            <ShapeEditor/>
            <CounterList/>
        </div>
    );
}