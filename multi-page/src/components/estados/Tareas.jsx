import { useState } from "react";

export const ListaDeTareas = () => {
    const [tarea, setTarea] = useState("");
    const [listaTareas, setListaTareas] = useState(["item1", "item2"]);

    const handleAgregarTarea = () => {
        alert ("Agregar: " +tarea);
    }

    return (
        <>
            Voy a agregar la tarea:"{tarea}"
            <br />
            <input
                value={tarea}
                onChange={(e) => { setTarea(e.target.value) }}
            />
            <ul>
            {   listaTareas.map((t, indice) => (
                    <li key={indice}>{t}</li>
                ))  }

            {/* {   listaTareas.map((t, indice) => {
                    return( <li key={indice}>{t}</li>)
                    }) */ }
            </ul>
        </>
    )
}