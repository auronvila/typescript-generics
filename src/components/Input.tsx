import React from "react";
import {InputProps} from "./PropModels/InputProps.tsx";


export default function Input(props:InputProps){
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
            console.log(event)
    }


    return (
        <div>
            <input value={props.value} onChange={handleInputChange}/>
        </div>
    )
}