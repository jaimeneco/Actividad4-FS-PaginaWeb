// 5. Crea un componente que registre el tamaño de la ventana en la consola cada vez que esta cambie.

import {useState, useEffect} from 'react';

export const CalcularVentana = () => {

    const calcularSize = () => {
        const w= window.innerWidth;
        const h= window.innerHeight;
        console.log(`w:${w} - h: ${h}`);
    }
    
    
    useEffect( () => {
        //Agregamos el eventListener luego del primer render
        window.addEventListener("resize", calcularSize); 
        
        //Al desmontar el componente quitamos el eventListener
        return () => {
            window.removeEventListener("resize", calcularSize);
        }
    }, [] );

    

    return ( <>
        <div>Windows Size</div>
        {/* <h3>Tamaño de la ventana actualizado: </h3>
        <p>Width: {setWidth} </p>
        <p>Height: {setHeight}</p> */}
        </>
     );
}