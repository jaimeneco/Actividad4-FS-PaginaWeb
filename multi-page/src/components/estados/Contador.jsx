import {useState} from 'react';

export const Contador = () => {
    const[contador, setContador] = useState(0);
    const [nombre, setNombre] = useState("Dolores");

    const handleClick = () => {
        setContador (contador +1);
        const newNombre = (nombre=="Francisco")? "Dolores" : "Francisco";
        setNombre(newNombre);

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={ handleClick }> Incrementar {nombre}</button>
        </div>
    );
}}
