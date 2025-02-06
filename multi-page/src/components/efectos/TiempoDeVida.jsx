// 2. Crea un componente que registre el tiempo en segundos desde que el componente se montó.

import {useState, useEffect} from 'react';

export const TiempoDeVida = () => {
    
    const [sec, setSec] = useState(0);

    useEffect (  ()=>{

        setTimeout( ()=> {
            setSec(s => s+1);
        }, 1000 )

    }, [sec])


    return ( 
        <>
        <h3>Mi tiempo de vida</h3>
        Pasaron: {sec}
        </>
     );
}