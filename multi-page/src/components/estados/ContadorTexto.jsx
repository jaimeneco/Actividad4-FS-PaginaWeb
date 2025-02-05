// 9. Editor de Texto en Tiempo Real:
// Crea un área de texto que muestre en tiempo real un recuento de palabras y caracteres mientras el usuario escribe.

//------------------------------------------------
//--------------VERSIÓN COMPLETA------------------
//------------------------------------------------

import { useState } from "react";

export const ContadorTexto = () => {

    const [frase, setFrase] = useState ("");

    const cantWords = frase.split(" ").filter( p => p != "").length;
    const cantChars = frase.length;
    
    const handleChange = (e) => {
        setFrase(e.target.value)
    }

    return ( 
        <div>
            <textarea       value={frase}
                            onChange={ handleChange }
                            cols="30"
                            rows="10"></textarea>

            <p>Palabras: {cantWords}</p>
            <p>Caracteres: {cantChars}</p>
            
        </div>
     );
}


//------------------------------------------------
//---------------VERSIÓN OPTIMIZADA---------------
//------------------------------------------------

// import { useState } from "react";

// export const ContadorTexto = () => {
//     const [frase, setFrase] = useState ("");

//     const cantWords = () => {
//         return frase.split(" ").filter( p => p != "").length;
//     } 
    
//     return ( 
//         <div>
//             <textarea       value={frase}
//                             onChange={ e => setFrase(e.target.value) }
//                             cols="30" rows="10">
//                             </textarea>

//             <p>Palabras: {cantWords()}</p>
//             <p>Caracteres: {frase.length}</p>
            
//         </div>
//      );
// }