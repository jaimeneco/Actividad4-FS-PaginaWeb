//2. Interruptor On/Off:
// Implementa un botón que alterne entre los estados "Encendido" y "Apagado". Aprovechar este cambio de estado para cambiar la clase de un objeto, o sus estilos.

import { useState } from 'react';


export const Interruptor = () => {
    const [isOn, setIsOn] = useState(false);
    const [tarea, setTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(["item1", "item2"]);
    const isPrendida = isOn ? "Apagar" : "Encender";

const darkStyle = {
    backgroundColor: 'black',
    color: 'white'
}
const lightStyle = {
    backgroundColor: 'white',
    color: 'black'
}

const buttonStyle = isOn ? lightStyle : darkStyle;
    const handleClick = () => {
        setIsOn( !isOn );

    return ( <>
                <button 
                    className={isOn? "light": "dark"}
                    onClick={handleClick}
                    style={buttonStyle}>
                    Interruptor {isPrendida}
                </button>
            {/* <button>Interruptor {JSON.stringify(isOn)}</button> */ }
            </>
    );
}}
