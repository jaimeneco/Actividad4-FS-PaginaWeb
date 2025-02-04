import { useState } from "react";

export const ListaDeTareas = () => {
    const [tarea, setTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(["item1", "item2"]);


    const handleAgregartarea = () => {
        if (tarea.trim() !== "") {


            //versión poco segura
            // setListaTareas([...prevState, tarea]);

            //Si mi estado depende del estado previo, utilizamos función de callback.
            setListaTareas((prevState) => [...prevState, tarea]);

            //Como no depende del estado anterior, podemos actualizarlo directamente.
            setTarea("");
        }
    }

    return (
        <>
            Voy a agregar la tarea:"{tarea}"
            <br />
            <input
                value={tarea}
                onChange={(e) => { setTarea(e.target.value) }}
            />
            <button onClick={handleAgregartarea}>Añadir tarea</button>
            <ul>
                {listaTareas.map((t, indice) => (
                    <li key={indice}>{t}</li>
                ))}

                {/* {   listaTareas.map((t, indice) => {
                    return( <li key={indice}>{t}</li>)
                    }) */ }
            </ul>


            <p>Mi tarea es:</p>
        </>
    )
}