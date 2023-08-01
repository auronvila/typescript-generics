import React from "react";

interface ButtonProps{
    click:(event:React.MouseEvent) => void;
}


export default function Button(props:ButtonProps){
    return (
        <div>
            <button onClick={props.click}>Click</button>
        </div>
    )
}