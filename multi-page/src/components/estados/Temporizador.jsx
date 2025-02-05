import {useState, useEffect} from 'react';

export const Temporizador = () => {
    const [segundos, setSegundos] = useState(0);

    useEffect ( ()=> {
        //Código que ejecutamos luego de renderizar mi componente.
        const idIntervalo = setInterval( ()=>{
            setSegundos( s => s + 1);
        }, 1000);

        //Función de limpieza (Código al desmontar el componente).
        return ()=> {
            clearInterval(idIntervalo);
        }
    }, []);

    return <p>Han pasado {segundos} segundos.</p>
}