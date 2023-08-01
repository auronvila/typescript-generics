import {Name} from "./PropModels/PersonProps.tsx";

interface PersonNameProps{
    names:Name[]
}


export default function PersonList(props:PersonNameProps){
    return(
        <div>
            {props.names.map((name,index) => (
                <h2 key={index}>{name.first} {name.last} {index}</h2>
            ))}
        </div>
    )
}