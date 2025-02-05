//8. Juego de Adivinanza:
// Desarrolla un juego donde el usuario intente adivinar un número aleatorio, con pistas de "más alto" o "más bajo".

// ```js
// // randome número entre 1 y 100
// const randomNum = Math.floor(Math.random() * 100) +1;

// ```
import { useState } from "react";

export const Adivinanza = () => {
    const [randomNum] = useState(Math.floor(Math.random() * 100) + 1);
    const [mensaje, setMensaje] = useState("Adivina el número entre 1 y 100");
    const [inputValue, setInputValue] = useState("");

    const comprobarNumero = () => {
        const num = parseInt(inputValue, 10);
        if (isNaN(num)) {
            setMensaje("Por favor, introduce un número válido");
            return;
        }
        if (num === randomNum) {
            setMensaje("¡Has acertado!");
        } else if (num > randomNum) {
            setMensaje("¡Más abajo!");
        } else {
            setMensaje("¡Más arriba!");
        }
    };

    return (

        <div>
            <h3>Juego de Adivinanza:</h3>
            <p>{mensaje}</p>
            <input 
                type="number" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={comprobarNumero}>Adivinar</button>
        </div>
    );
};


// export const Adivinanza = () => {
//     const randomNum = Math.floor(Math.random() * 100) +1;
    
//     const comprobarNum = () => {
//         if (num1 === randomNum) {
//             console.log("¡Has acertado!")
//         } else {
//             (num1 > randomNum){
//                 console.log("¡Más abajo!")
//         } else {
//             (num1 < randomNum){
//                 console.log("¡Más arriba")
//             }
//         }
//     }

//     return ( 
//         <h3>Juego de Adivinanzas</h3>
//         <p>comprobarNum</p>
//     );

// }