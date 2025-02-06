// 7. Crear un componente  "Montar" con un botón que al hacerle click, muestre en consola cada vez que se monta/desmonta el componente hijo.

import { useState, useEffect } from "react";  

export const Montar = () => {

    // isActive, mostrarHijo, isOpen...
    const [showChild, setShowChild] = useState(true);

    return ( 
        <>
        <button onClick={()=> setShowChild(!showChild)}>
            Agregar/Quitar Hijo
        </button>
        <br />
        { showChild && <MontarHijo />}
        </>
     );
}


export const MontarHijo = () => {
    useEffect(()=> {
        console.log("Componente activo");

        //Código que se ejecutará cuando desmonto este componente.
        return () => {
            console.log("Componente desactivado");
        }

    }, []);

    return ( <>
        <div>
            Soy tu hijo, no me quites...
        </div>
        </>
     );
}