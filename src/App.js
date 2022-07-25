import React from "react";
import Inicial from "./Inicio";
import Teladois from "./Segundatela";

export default function App () {

    const [start, setStart] = React.useState(true);

    function iniciar () {
        setStart(false);
    }

    return (
        <>
        {start ? <Inicial iniciar={iniciar}/> :
        <Teladois />}        
        </>
    )
}