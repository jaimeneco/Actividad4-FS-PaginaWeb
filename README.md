# Actividad4-FS-PaginaWeb

El proyecto multipage nos muestra cómo renderizar distintas páginas usando pathname y `query Params`.

![url-google.png](url-google.png)

Partes de la imagen:
- El subdominio es meet.
- El dominio es google.com
- A partir de / y todo lo que sigue hasta el símbolo ? es el path.
- A partir del símbolo ?, todo lo que sigue son query Params.


<!--INICIAR EN LA TERMINAL:
npm create vite@latest
# elegimos el nombre del proyecto, carpeta, etc...
# elegimos REACT como librería de trabajo.
cd nombre-proyecto
npm i
npm run dev -->

# IDEA DE LA STARTUP:

Proyecto: Books-Nest: un sitio web para organizar y gestionar los libros usados que posee la gente para prestarlos a sus vecinos.

Funcionalidad: 
- Los usuarios pueden registrarse en la plataforma.
- Los usuarios pueden pedir prestado y/o también prestar sus propios libros.
- Debe haber un buscador de libros por categoría, y/o título de toda la comunidad.
- Debo poder ver solo mis libros, y crear un formulario para dar de alta un libro nuevo.
- en la galería de libros, cada libro debe tener título, imagen, categoría y un ranking de 1 a 5 estrellas.
- La página de un libro me muestra los datos anteriores, mas una sinópsis, una lista de los usuarios que lo tienen, reseñas de usuarios del libro.
---------------------------------------------------------------------------------------------------------------------------------------------------------------------

Los datos deben estar en variables listas/objetos de JS, por ejemplo:

- userData (datos del usuario que inicio sesión)
- allUsersData (datos de todos los usuarios)
- booksData (array de libros)
- rentalData (lista de alquileres + id usuario + id libro)
- reviewsData (todas las reviews + id libro)

La página no debe funcionar (sin usar hooks de ningún tipo), solo los links e interfaces.

Secciones:
Landing Page (página de Inicio, explica la idea con Hero a sumarse al proyecto)
Términos y condiciones - TyC - (https://termly.io/es/recursos/plantillas/)
Perfil del usuario
GRID (buscador de libros)
GRID (mis libros)
Tabla con lista de libros que alquiló el usuario con fecha de alquiler/devolución y mi ranking + comentario.
Vista de 1 libro + Reseñas del libro
Mapa (iframe) 
Login / Registro (Formulario)
Dar de alta un nuevo libro (Formulario)

EXCALIDRAW diseño https://excalidraw.com/#json=lrP4KsmzLrTAhB5IxhmPA,J50-61y_RJBC6pxCnEIk8Q 


## EJERCICIOS VARIOS:
1. Contador Simple:
Crea un componente con un botón que incremente un contador. Muestra el valor del contador en la pantalla.

2. Interruptor On/Off:
Implementa un botón que alterne entre los estados "Encendido" y "Apagado". Aprovechar este cambio de estado para cambiar la clase de un objeto, o sus estilos.

3. Lista de Tareas Básica:
Crea un componente que permita añadir tareas a una lista y mostrarlas.

4. Formulario de Registro:
Desarrolla un formulario simple con campos para nombre y email. Usa useState para manejar los cambios en los inputs. Podemos mostrar los datos enviados con un alert. Es buena práctica validar los datos antes de enviarlos.

5. Galería de Imágenes:
Crea una galería simple donde el usuario pueda navegar entre varias imágenes usando botones de "anterior" y "siguiente". Puedes utilizar `https://dummyjson.com/docs/` para generar las imágenes.
6. Temporizador:
Implementa un temporizador con 2 botones: 
uno para iniciarse / pausarse
otro para reiniciarse.

7. Calculadora Básica:
Crea una calculadora que pueda realizar operaciones simples (suma, resta, multiplicación, división).

8. Juego de Adivinanza:
Desarrolla un juego donde el usuario intente adivinar un número aleatorio, con pistas de "más alto" o "más bajo".

```js
// randome número entre 1 y 100
const randomNum = Math.floor(Math.random() * 100) +1;

```

9. Editor de Texto en Tiempo Real:
Crea un área de texto que muestre en tiempo real un recuento de palabras y caracteres mientras el usuario escribe.
10. Carrito de Compras:
Implementa un carrito de compras simple donde los usuarios puedan añadir items, ver el total y la cantidad de items. Investiga el método "reduce" para arrays para calcular el total.




