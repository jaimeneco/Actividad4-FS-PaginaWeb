# ACTIVIDAD multi-page.

<!--INICIAR EN LA TERMINAL:
npm create vite@latest
# elegimos el nombre del proyecto, carpeta, etc...
# elegimos REACT como librería de trabajo.
cd nombre-proyecto
npm i
npm run dev -->

<!-- EJERCICIOS DE ESTADOS -->
## EJERCICIOS DE ESTADOS:
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



<!-- EJERCICIOS DE EFECTOS -->
## Ejercicios useEffect

1. Crea un componente que muestre un mensaje en la consola cuando el componente se monte por primera vez.
2. Crea un componente que registre el tiempo en segundos desde que el componente se montó.
3. Crea un componente que obtenga datos de una API y los muestre en pantalla.(https://jsonplaceholder.typicode.com/posts/1)
4. Crea un contador con botones para incrementar y decrementar el valor. Usa useEffect para registrar cada vez que el valor del contador cambie.
5. Crea un componente que registre el tamaño de la ventana en la consola cada vez que esta cambie.
6. Crea un componente que sincronice un estado con el localStorage del navegador.
7. Crear un componente  "Montar" con un botón que al hacerle click, muestre en consola cada vez que se monta/desmonta el componente hijo.



<!-- EJERCICIOS CARRUSEL -->
### Ejercicio: Crear un Componente de Carousel de Imágenes en Component Party

![Carousel](./Carousel.png)

Crear un componente de carrusel de imágenes en React que permita navegar entre imágenes, mostrar indicadores de posición y tener una función de reproducción automática que se detenga al pasar el ratón por encima.


#### Paso 1: Crear el Componente Base
1. Crea un nuevo archivo llamado `Carousel.js`.
2. Asegúrate de importar `useState` y `useEffect` desde React, ya que los necesitarás más adelante.
3. Crea la siguiente estructura de componente:
```html
   <div className="carousel" >
        <div className="carousel-container">
        </div>
        <div className="carousel-controls">
        </div>
        <div className="carousel-indicators">
        </div>
    </div>
```

#### Paso 2: Aceptar una Lista de Imágenes como Props
1. Modifica el componente `Carousel` para que acepte una prop llamada `imageList`, que será un array de URLs de imágenes.
2. Utiliza el sitio https://dummyjson.com para crear las imágenes con texto. Ej: "imagen 1", "imagen 2", etc.

#### Paso 3: Mostrar las Imágenes en Pantalla
1. Listar todas las imagenes en el contenedor flex con la siguiente estructura:
```html
    <div className="carousel-slide" key={index}>
        <img src="https:..." alt="imagen 1" />
    </div>
```
2. Utiliza useState para gestionar el índice de la imagen actual a muestra.
3. Renderiza la imagen actual basada en el índice del estado.
4. Asegúrate de que las imágenes se muestren en un contenedor con estilos básicos.

#### Paso 4: Añadir Botones de Navegación
1. Añade dos botones: uno para ir a la imagen anterior y otro para ir a la siguiente.
2. Implementa funciones `goToPrevious` y `goToNext` para actualizar el índice de la imagen actual.
3. Asegúrate de que el carrusel sea circular, es decir, que después de la última imagen vuelva a la primera y viceversa.

#### Paso 5: Añadir Indicadores de Control
1. Añade indicadores de control debajo del carrusel que representen cada imagen.
2. Implementa una función `goToSlide` que permita saltar a una imagen específica al hacer clic en su indicador.

#### Paso 6: Implementar la Función de Reproducción Automática
1. Añade una prop opcional `autoPlay` que active la reproducción automática del carrusel.
2. Utiliza `useEffect` para configurar un intervalo que cambie la imagen cada 2 segundos.
3. Añade eventos `onMouseEnter` y `onMouseLeave` al carrusel para detener la reproducción automática cuando el ratón esté sobre el carrusel y reanudarla cuando se retire.



