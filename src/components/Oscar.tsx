import React from "react";

interface Oscarprops{
    children: React.ReactNode
}


export function Oscar(props:Oscarprops){
    return(
        <div>
            {props.children}
        </div>
    )
}