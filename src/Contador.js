import {useState} from 'react';

export default function Contador(props){
    const [count, setCount] = useState(0);

    function add(){
        setCount(count + 1);
    }

    function sub(){
        setCount(count - 1);
    }

    return (
        <div>
            <img></img>

            <button onClick={add}> Add </button>
            <button onClick={sub}> Sub </button>
            <p>{props.title}</p>
            <p>{count}</p>
        </div>
    );
}