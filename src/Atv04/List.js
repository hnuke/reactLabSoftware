import { useState } from 'react';

export default function List(){
    const listOf = [
        {title: "2025",
            message: "AAA"
        },
        {
            title: "2026",
            message: "BBB"
        }
    ]
    const [index, setIndex] = useState(0);

    function handleNextClick(){
        if (index + 1 < listOf.length) {
            setIndex(index + 1);
        }
    }

    let something = listOf[index];
    return(<section>
        <button onClick={handleNextClick}>
            Next
        </button>
        <h1> {something.title} </h1>
        <p> {something.message} </p>
    </section>)
}