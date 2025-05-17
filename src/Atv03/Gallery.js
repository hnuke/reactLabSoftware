import FirstComponent from "./FirstComponent";

export default function Gallery({ children }){
    const components = [<FirstComponent src="https://i.imgur.com/V5J29Ue.jpeg" bool={true}/>,
    <FirstComponent src="https://i.imgur.com/aNTpXnJ.png" bool={true}/>,
    <FirstComponent src="https://i.imgur.com/V5J29Ue.jpeg" bool={false}/>];
    const listComponentes = components.map(comopnent => <li key={Math.random()}> {comopnent} </li>);
    return (
        <>
            <ul>
                {listComponentes}
            </ul>
            

            
        </>
    );
}
