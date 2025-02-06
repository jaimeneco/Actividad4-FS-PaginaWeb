// 1. Crea un componente que muestre un mensaje en la consola cuando el componente se monte por primera vez.

import {useState, useEffect} from 'react';

export const Saludar = () => {
    const [cont, setCont] = useState(0);

    useEffect(() => {
        console.log("Aquí se carga por primera vez");

    }, [] );

    useEffect(() => {
        console.log("Me ejecuto con cada render");

    }, [] );

    useEffect(() => {
        console.log("Me ejecuto cada vez que cambia cont");

    }, [cont] );

    return ( 
        <>
        Saludar
        <button onClick={()=>setCont(cont+1)}>
            Contar {cont}
        </button>
        </>
     );
}

