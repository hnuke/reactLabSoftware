import {useState} from 'react';

export default function Contador({title, countTotal, OnStateChanged}){
    const [count, setCount] = useState(0);

    function add(){
        setCount(count + 1);
        OnStateChanged(1)
    }

    function sub(){
        setCount(count - 1);
        OnStateChanged(-1)
    }

    return (
        <div>
            <img></img>

            <button onClick={add}> Add </button>
            <button onClick={sub}> Sub </button>


            <p>{title}</p>
            <p>{count}</p>
        </div>
    );
}

