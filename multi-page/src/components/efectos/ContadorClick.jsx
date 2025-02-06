//EJERCICIO 4(PASAR LUEGO AL JSX CORRESPONDIENTE)
//4. Crea un contador con botones para incrementar y decrementar el valor. Usa useEffect para mostrar la cantidad de veces que les hice click.

import {useState, useEffect} from 'react';

export const ContadorClick = () => {
    const [cont, setCont] = useState(0);
    const [clicks, setClicks] = useState(0);

    useEffect(() => {
        console.log("Aquí se carga por primera vez");

    }, [] );

    useEffect(() => {
        console.log("Me ejecuto con cada render");

    }, [] );

    useEffect(() => {
        console.log(cont);
        setClicks(c => c+1);
        console.log("Me ejecuto cada vez que cambia cont");

    }, [cont] );

return ( 
    <>
    Contador de los clicks:
    <p>Valor: {cont}</p>
    <p>Click: {clicks}</p>
    <button onClick={()=>setCont(cont+1)}>
        Incrementar {cont}
    </button>
    <button onClick={()=>setCont(cont-1)}>
        Decrementar {cont}
    </button>
    </>
 );
}