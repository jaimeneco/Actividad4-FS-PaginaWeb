// 5. Galería de Imágenes:
// Crea una galería simple donde el usuario pueda navegar entre varias imágenes usando botones de "anterior" y "siguiente". Puedes utilizar `https://dummyjson.com/docs/` para generar las imágenes.

import { useState } from "react";

export const GaleriaImagenes = () => {
    const [idx, setIdx] = useState(0);

    const listaImagenes = [
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Imagen+1",
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Imagen+2",
        "https://dummyjson.com/image/400x200/008080/ffffff?text=Imagen+3",
    ]

    //Botón Prev:
    const handlePrev = () => {
        //Condicional:
        // if (idx === 0) {
        //     setIdx(listaImagenes.length - 1);
        // } else {
        //     setIdx(idx - 1);
        // }

        //Ternario:
        const prevIndice = (idx === 0) ? listaImagenes.length - 1 : idx - 1;
        setIdx(prevIndice);

    }


    //Botón Next:
    const handleNext = () => {
        //Condicional:
        // if (idx === listaImagenes.length - 1) {
        //     setIdx(0);
        // } else {
        //     setIdx(idx + 1);
        // }
        
        //Ternario:
        const sigIndice = (idx === listaImagenes.length -1) ? 0 : idx + 1;
        setIdx(sigIndice);
    }

    return (
        <>
            <h3>Galería de Imágenes</h3>
            <img src={listaImagenes[idx]} alt="titulo" />
            <button onClick={handlePrev}>Anterior</button>
            <button onClick={handleNext}>Siguiente</button>
        </>

    );
}