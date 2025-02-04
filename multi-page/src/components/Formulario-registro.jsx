import { useState } from "react";

export const InicioSesion = () => {
    const formulario = ();
    return (

    <>
        <main className="Main">
            <form action="">

                
                <label htmlFor="nameUser">Usuario:</label>
                    <input type="text" name="name" />
                <label htmlFor="mailUser">Email:</label>
                    <input type="email" name="email" />
                
            </form>
        </main>
        
        </>
)}

const handleSubmit = (e)=>{
    e.preventDefault(); // evita que se envíe el formulario en HTML

    //Enviar el formulario
    console.log("Enviando", formData);


const handleChange = (e) => {

}
}



