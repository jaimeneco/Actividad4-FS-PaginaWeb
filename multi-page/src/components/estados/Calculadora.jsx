//7. Calculadora Básica:
// Crea una calculadora que pueda realizar operaciones simples (suma, resta, multiplicación, división), utilizando 2 inputs y un <select> de operación (+,-,/,X)

import { useState, useEffect } from "react";

export const Calculadora = () => {
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [operacion, setOperacion] = useState("+");
    const [resultado, setResultado] = useState(0);

    // useEffects
    useEffect( ()=> {
        console.log("cambie el valor del número");
        calcular();

    })


    const calcular = () => {
        // console.log("calculando...", num1, num2, operacion);

        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        switch (operacion) {
            case "+": setResultado(num1 + num2); break;
            case "-": setResultado(num1 - num2); break;
            case "*": setResultado(num1 * num2); break;
            case "/": setResultado(num1 / num2); break;
        }
    };

    return (
        <div>
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />

            <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>

            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />

            <button onClick={calcular}>=</button>

            <p>num1: {num1}</p>
            <p>num2: {num2}</p>
            <p>Resultado: {resultado}</p>
        </div> 
    );
}