
export function AlertButton({message, children}){

    return(<>
    <button onClick={() => {
        alert("Please... stop");
    }}>
        {message} + {children}
    </button>
    </>);
}

export function GenericButton ({handleClick, alertMessage}){

    return <button onClick={() => handleClick(alertMessage)}>
        GenericButton
    </button>;
}

export default function ButtonEvent(){
    function handleClick(){
        alert("Don't do that")
    }

    return (<>
        <button onClick={handleClick}>
            Click me!
        </button>
    </>);
}