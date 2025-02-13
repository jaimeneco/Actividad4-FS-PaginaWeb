import { useState } from "react";

export const ListaDeProductos = ({ productos }) => {

    // si existe data voy a dar data, si no existe data pongo el mensaje: cargando datos...
    return (
                <>
                    {productos.map((producto) => {
                        return (
                            <Producto key={producto.id} item={producto} />
                                )
                    })}
                </>
            );
}

const Producto = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);
    const {id, name, description, price, image} = item;

    return (
        <>
        <div>
            <ul>
                {image}
                <li>Producto: {name}</li>
                <li>Precio: {price} </li>
                <li>Descripción: {description} </li>
            </ul>
        </div>
        </>
    )
}