// 3. Crea un componente que obtenga datos de una API y los muestre en pantalla.(https://jsonplaceholder.typicode.com/posts/1)

import { useState, useEffect } from "react";

export const TraerPost = () => {
    const [data, setData] = useState(null);

    const obtenerInfo = async () => {

        // const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const response = await fetch('./backend/libros.json');
        const jsonData = await response.json();
        setData(jsonData[1]);
    }

    // Traer datos de la web https://jsonplaceholder.typicode.com/posts/1
    useEffect( () => {
    
    
        //Usando promesas
        //fetch('https://jsonplaceholder.typicode.com/posts/1')

        //Convertir string de Json a Objeto de JS
        //.then( (response) => {
        //     return response.json();
        // })
            
        //Guardar ese objeto de JS en el state "data"
        //.then( jsonData => setData(jsonData))

        // Usando  Async /
        obtenerInfo();


    }, [])

    
    // si existe data voy a dar data, si no existe data pongo el mensaje: cargando datos...
    return ( <>
        { data ? (
            <>
            {/* mis datos son {JSON.stringify(data)} */}
            <br /> titulo {data.title}
            <div className="Card"> body:{data.body}</div>
            <img src={data[1].img} alt={data[1].title} style={{width: "100%"}} /> 
            </>
        
    ): 'cargando datos...'
        }
        </> );
}