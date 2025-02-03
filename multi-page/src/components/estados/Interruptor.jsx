import { useState } from 'react';


export const Interruptor = () => {
    const [isOn, setIsOn] = useState(false);

    const isPrendida = isOn ? "Apagar" : "Encender";

const darkStyle = {
    backgroundColor: 'black',
    color: 'white'
}
const lightStyle = {
    backgroundColor: 'white',
    color: 'black'
}

const buttonStyle = isOn ? lightStyle : darkStyle;
    const handleClick = () => {
        setIsOn( !isOn );

    return ( <>
                <button 
                    className={isOn? "light": "dark"}
                    onClick={handleClick}
                    style={buttonStyle}>
                    Interruptor {isPrendida}
                </button>
            {/* <button>Interruptor {JSON.stringify(isOn)}</button> */ }
            </>
    );
}}
