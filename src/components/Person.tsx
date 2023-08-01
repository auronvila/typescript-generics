import {PersonProps} from "./PropModels/PersonProps.tsx";


export default function Person(props:PersonProps){
    return(
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}