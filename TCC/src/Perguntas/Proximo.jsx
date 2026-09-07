import { useState } from "react";

export default function Proximo(props){
    return(<button onClick={() => {if(props.clicavel == false){props.onProximo();}}}>Proximo</button>)
}
