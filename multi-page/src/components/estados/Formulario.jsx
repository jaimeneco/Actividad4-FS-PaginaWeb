import { useState } from "react";

export const FormRegistro = () => {
    const formulario = ();

    const handleSubmit = (e) => {
        e.preventDefault(); // evita que se envíe el formulario en HTML

        //Enviar el formulario a la DB
        console.log("Enviando", formData);


    const handleChange = (e) => {

        setFormData( (prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        })
        }

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
        )
    }
}



